"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const delay = require("delay");
class RateLimitDelayPromise {
    /**
     * @param values async function target data list.
     * @param asyncExecutor input: target value, return: Promise.
     * @param delayMillis: how long delay between each Promises.
     */
    static all(values, asyncExecutor, delayMillis) {
        const delayedValues = RateLimitDelayPromise.delayedValuesGenerator(values, delayMillis);
        return RateLimitDelayPromise.delayedValuesExecution(delayedValues, asyncExecutor);
    }
    static delayedValuesExecution(delayedValues, asyncExecutor) {
        return delayedValues.reduce((prev, curr) => {
            return prev.then(async (array) => {
                const value = await curr();
                const result = await asyncExecutor(value);
                return array.concat(result);
            });
        }, Promise.resolve([]));
    }
    static delayedValuesGenerator(values, delay) {
        return values.map(v => RateLimitDelayPromise.delayedValue(v, delay));
    }
    static delayedValue(value, interval) {
        return async () => {
            await delay(interval);
            return value;
        };
    }
}
exports.RateLimitDelayPromise = RateLimitDelayPromise;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUErQjtBQUUvQixNQUFhLHFCQUFxQjtJQUU5Qjs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBTyxNQUFXLEVBQUUsYUFBeUMsRUFBRSxXQUFtQjtRQUN4RixNQUFNLGFBQWEsR0FBRyxxQkFBcUIsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDeEYsT0FBTyxxQkFBcUIsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVPLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBTyxhQUFtQyxFQUFFLGFBQXlDO1FBQ3RILE9BQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQWtCLEVBQUUsSUFBd0IsRUFBRSxFQUFFO1lBQ3pFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEVBQUU7Z0JBQzNCLE1BQU0sS0FBSyxHQUFNLE1BQU0sSUFBSSxFQUFFLENBQUM7Z0JBQzlCLE1BQU0sTUFBTSxHQUFHLE1BQU0sYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxQyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTyxNQUFNLENBQUMsc0JBQXNCLENBQUksTUFBVyxFQUFFLEtBQWE7UUFDL0QsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFTyxNQUFNLENBQUMsWUFBWSxDQUFJLEtBQVEsRUFBRSxRQUFnQjtRQUNyRCxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ2QsTUFBTSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztDQUVKO0FBakNELHNEQWlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGRlbGF5IGZyb20gJ2RlbGF5JztcblxuZXhwb3J0IGNsYXNzIFJhdGVMaW1pdERlbGF5UHJvbWlzZSB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gdmFsdWVzIGFzeW5jIGZ1bmN0aW9uIHRhcmdldCBkYXRhIGxpc3QuXG4gICAgICogQHBhcmFtIGFzeW5jRXhlY3V0b3IgaW5wdXQ6IHRhcmdldCB2YWx1ZSwgcmV0dXJuOiBQcm9taXNlLlxuICAgICAqIEBwYXJhbSBkZWxheU1pbGxpczogaG93IGxvbmcgZGVsYXkgYmV0d2VlbiBlYWNoIFByb21pc2VzLlxuICAgICAqL1xuICAgIHN0YXRpYyBhbGw8VCwgVT4odmFsdWVzOiBUW10sIGFzeW5jRXhlY3V0b3I6ICgodmFsdWU6IFQpID0+IFByb21pc2U8VT4pLCBkZWxheU1pbGxpczogbnVtYmVyKTogUHJvbWlzZTxVW10+IHtcbiAgICAgICAgY29uc3QgZGVsYXllZFZhbHVlcyA9IFJhdGVMaW1pdERlbGF5UHJvbWlzZS5kZWxheWVkVmFsdWVzR2VuZXJhdG9yKHZhbHVlcywgZGVsYXlNaWxsaXMpO1xuICAgICAgICByZXR1cm4gUmF0ZUxpbWl0RGVsYXlQcm9taXNlLmRlbGF5ZWRWYWx1ZXNFeGVjdXRpb24oZGVsYXllZFZhbHVlcywgYXN5bmNFeGVjdXRvcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZGVsYXllZFZhbHVlc0V4ZWN1dGlvbjxULCBVPihkZWxheWVkVmFsdWVzOiAoKCkgPT4gUHJvbWlzZTxUPilbXSwgYXN5bmNFeGVjdXRvcjogKCh2YWx1ZTogVCkgPT4gUHJvbWlzZTxVPikpOiBQcm9taXNlPFVbXT4ge1xuICAgICAgICByZXR1cm4gZGVsYXllZFZhbHVlcy5yZWR1Y2UoKHByZXY6IFByb21pc2U8VVtdPiwgY3VycjogKCgpID0+IFByb21pc2U8VD4pKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcHJldi50aGVuKGFzeW5jIGFycmF5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZTogVCA9IGF3YWl0IGN1cnIoKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhc3luY0V4ZWN1dG9yKHZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXkuY29uY2F0KHJlc3VsdCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCBQcm9taXNlLnJlc29sdmUoW10pKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBkZWxheWVkVmFsdWVzR2VuZXJhdG9yPFQ+KHZhbHVlczogVFtdLCBkZWxheTogbnVtYmVyKTogKCgpID0+IFByb21pc2U8VD4pW10ge1xuICAgICAgICByZXR1cm4gdmFsdWVzLm1hcCh2ID0+IFJhdGVMaW1pdERlbGF5UHJvbWlzZS5kZWxheWVkVmFsdWUodiwgZGVsYXkpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBkZWxheWVkVmFsdWU8VD4odmFsdWU6IFQsIGludGVydmFsOiBudW1iZXIpOiAoKSA9PiBQcm9taXNlPFQ+IHtcbiAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGF3YWl0IGRlbGF5KGludGVydmFsKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cbiJdfQ==