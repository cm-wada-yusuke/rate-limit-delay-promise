export declare class RateLimitPromise {
    /**
     * @param values
     * @param asyncExecutor
     * @param delayMillis
     */
    static all<T, U>(values: T[], asyncExecutor: ((value: T) => Promise<U>), delayMillis: number): Promise<U[]>;
    private static delayedValuesExecution;
    private static delayedValuesGenerator;
    private static delayedValue;
}
