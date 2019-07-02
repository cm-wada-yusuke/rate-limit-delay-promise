export declare class RateLimitDelayPromise {
    /**
     * @param values async function target data list.
     * @param asyncExecutor input: target value, return: Promise.
     * @param delayMillis: how long delay between each Promises.
     */
    static all<T, U>(values: T[], asyncExecutor: ((value: T) => Promise<U>), delayMillis: number): Promise<U[]>;
    private static delayedValuesExecution;
    private static delayedValuesGenerator;
    private static delayedValue;
}
