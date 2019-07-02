import * as delay from 'delay';

export class RateLimitDelayPromise {

    /**
     * @param values async function target data list.
     * @param asyncExecutor input: target value, return: Promise.
     * @param delayMillis: how long delay between each Promises.
     */
    static all<T, U>(values: T[], asyncExecutor: ((value: T) => Promise<U>), delayMillis: number): Promise<U[]> {
        const delayedValues = RateLimitDelayPromise.delayedValuesGenerator(values, delayMillis);
        return RateLimitDelayPromise.delayedValuesExecution(delayedValues, asyncExecutor);
    }

    private static delayedValuesExecution<T, U>(delayedValues: (() => Promise<T>)[], asyncExecutor: ((value: T) => Promise<U>)): Promise<U[]> {
        return delayedValues.reduce((prev: Promise<U[]>, curr: (() => Promise<T>)) => {
            return prev.then(async array => {
                const value: T = await curr();
                const result = await asyncExecutor(value);
                return array.concat(result);
            })
        }, Promise.resolve([]));
    }

    private static delayedValuesGenerator<T>(values: T[], delay: number): (() => Promise<T>)[] {
        return values.map(v => RateLimitDelayPromise.delayedValue(v, delay));
    }

    private static delayedValue<T>(value: T, interval: number): () => Promise<T> {
        return async () => {
            await delay(interval);
            return value;
        }
    }

}


