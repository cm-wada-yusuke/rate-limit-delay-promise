export declare class RateLimitPromise {
    static all<T, U>(values: T[], asyncExecutor: ((value: T) => Promise<U>), delayMillis: number): Promise<U[]>;
    private static delayedValuesExecution;
    private static delayedValuesGenerator;
    private static delayedValue;
}
