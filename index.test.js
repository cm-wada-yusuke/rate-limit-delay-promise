"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const luxon_1 = require("luxon");
class DummyRemoteProcess {
    static requestMaster(master) {
        switch (master) {
            case 1:
                return Promise.resolve('one');
            case 2:
                return Promise.resolve('two');
            case 3:
                return Promise.resolve('three');
            default:
                throw new Error('Invalid master number');
        }
    }
}
exports.DummyRemoteProcess = DummyRemoteProcess;
test('import', async () => {
    const masterEnum = [1, 2, 3];
    const getMasterStringFunction = (masterNumber) => {
        // get string by async operation, such as external api.
        return DummyRemoteProcess.requestMaster(masterNumber);
    };
    const actual = await _1.RateLimitPromise.all(masterEnum, getMasterStringFunction, 1000);
    const expected = ['one', 'two', 'three'];
    expect(actual).toEqual(expected);
});
test('wait for delay', async () => {
    const masterEnum = [1, 2, 3, 2];
    const getMasterStringFunction = (masterNumber) => {
        // get string by async operation, such as external api.
        return DummyRemoteProcess.requestMaster(masterNumber);
    };
    const before = luxon_1.DateTime.utc();
    await _1.RateLimitPromise.all(masterEnum, getMasterStringFunction, 1000);
    const after = luxon_1.DateTime.utc();
    const actualTake = after.toMillis() - before.toMillis();
    expect(actualTake).toBeGreaterThan(4000);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZGV4LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3QkFBcUM7QUFDckMsaUNBQWlDO0FBRWpDLE1BQWEsa0JBQWtCO0lBQzNCLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBYztRQUMvQixRQUFRLE1BQU0sRUFBRTtZQUNaLEtBQUssQ0FBQztnQkFDRixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEMsS0FBSyxDQUFDO2dCQUNGLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQyxLQUFLLENBQUM7Z0JBQ0YsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BDO2dCQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUNoRDtJQUNMLENBQUM7Q0FDSjtBQWJELGdEQWFDO0FBRUQsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLElBQUksRUFBRTtJQUN0QixNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0IsTUFBTSx1QkFBdUIsR0FBRyxDQUFDLFlBQW9CLEVBQUUsRUFBRTtRQUNyRCx1REFBdUQ7UUFDdkQsT0FBTyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDekQsQ0FBQyxDQUFDO0lBRUYsTUFBTSxNQUFNLEdBQUcsTUFBTSxtQkFBZ0IsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLHVCQUF1QixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JGLE1BQU0sUUFBUSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3JDLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEtBQUssSUFBSSxFQUFFO0lBQzlCLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEMsTUFBTSx1QkFBdUIsR0FBRyxDQUFDLFlBQW9CLEVBQUUsRUFBRTtRQUNyRCx1REFBdUQ7UUFDdkQsT0FBTyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDekQsQ0FBQyxDQUFDO0lBRUYsTUFBTSxNQUFNLEdBQUcsZ0JBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM5QixNQUFNLG1CQUFnQixDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEUsTUFBTSxLQUFLLEdBQUcsZ0JBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUU3QixNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3hELE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSYXRlTGltaXRQcm9taXNlIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gJ2x1eG9uJztcblxuZXhwb3J0IGNsYXNzIER1bW15UmVtb3RlUHJvY2VzcyB7XG4gICAgc3RhdGljIHJlcXVlc3RNYXN0ZXIobWFzdGVyOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBzd2l0Y2ggKG1hc3Rlcikge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoJ29uZScpO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoJ3R3bycpO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoJ3RocmVlJyk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBtYXN0ZXIgbnVtYmVyJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnRlc3QoJ2ltcG9ydCcsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBtYXN0ZXJFbnVtID0gWzEsIDIsIDNdO1xuICAgIGNvbnN0IGdldE1hc3RlclN0cmluZ0Z1bmN0aW9uID0gKG1hc3Rlck51bWJlcjogbnVtYmVyKSA9PiB7XG4gICAgICAgIC8vIGdldCBzdHJpbmcgYnkgYXN5bmMgb3BlcmF0aW9uLCBzdWNoIGFzIGV4dGVybmFsIGFwaS5cbiAgICAgICAgcmV0dXJuIER1bW15UmVtb3RlUHJvY2Vzcy5yZXF1ZXN0TWFzdGVyKG1hc3Rlck51bWJlcilcbiAgICB9O1xuXG4gICAgY29uc3QgYWN0dWFsID0gYXdhaXQgUmF0ZUxpbWl0UHJvbWlzZS5hbGwobWFzdGVyRW51bSwgZ2V0TWFzdGVyU3RyaW5nRnVuY3Rpb24sIDEwMDApO1xuICAgIGNvbnN0IGV4cGVjdGVkID0gWydvbmUnLCAndHdvJywgJ3RocmVlJ107XG4gICAgZXhwZWN0KGFjdHVhbCkudG9FcXVhbChleHBlY3RlZCk7XG59KTtcblxudGVzdCgnd2FpdCBmb3IgZGVsYXknLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbWFzdGVyRW51bSA9IFsxLCAyLCAzLCAyXTtcbiAgICBjb25zdCBnZXRNYXN0ZXJTdHJpbmdGdW5jdGlvbiA9IChtYXN0ZXJOdW1iZXI6IG51bWJlcikgPT4ge1xuICAgICAgICAvLyBnZXQgc3RyaW5nIGJ5IGFzeW5jIG9wZXJhdGlvbiwgc3VjaCBhcyBleHRlcm5hbCBhcGkuXG4gICAgICAgIHJldHVybiBEdW1teVJlbW90ZVByb2Nlc3MucmVxdWVzdE1hc3RlcihtYXN0ZXJOdW1iZXIpXG4gICAgfTtcblxuICAgIGNvbnN0IGJlZm9yZSA9IERhdGVUaW1lLnV0YygpO1xuICAgIGF3YWl0IFJhdGVMaW1pdFByb21pc2UuYWxsKG1hc3RlckVudW0sIGdldE1hc3RlclN0cmluZ0Z1bmN0aW9uLCAxMDAwKTtcbiAgICBjb25zdCBhZnRlciA9IERhdGVUaW1lLnV0YygpO1xuXG4gICAgY29uc3QgYWN0dWFsVGFrZSA9IGFmdGVyLnRvTWlsbGlzKCkgLSBiZWZvcmUudG9NaWxsaXMoKTtcbiAgICBleHBlY3QoYWN0dWFsVGFrZSkudG9CZUdyZWF0ZXJUaGFuKDQwMDApO1xufSk7XG4iXX0=