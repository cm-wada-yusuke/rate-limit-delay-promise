import { DateTime } from 'luxon';
import { RateLimitDelayPromise } from './index';

export class DummyRemoteProcess {
    static requestMaster(master: number): Promise<string> {
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

test('import', async () => {
    const masterEnum = [1, 2, 3];
    const getMasterStringFunction = (masterNumber: number) => {
        // get string by async operation, such as external api.
        return DummyRemoteProcess.requestMaster(masterNumber)
    };

    const actual = await RateLimitDelayPromise.all(masterEnum, getMasterStringFunction, 1000);
    const expected = ['one', 'two', 'three'];
    expect(actual).toEqual(expected);
});

test('wait for delay', async () => {
    const masterEnum = [1, 2, 3, 2];
    const getMasterStringFunction = (masterNumber: number) => {
        // get string by async operation, such as external api.
        return DummyRemoteProcess.requestMaster(masterNumber)
    };

    const before = DateTime.utc();
    await RateLimitDelayPromise.all(masterEnum, getMasterStringFunction, 1000);
    const after = DateTime.utc();

    const actualTake = after.toMillis() - before.toMillis();
    expect(actualTake).toBeGreaterThan(4000);
});
