import { RateLimitPromise } from '.';

function main() {
    const targetList = [1,2,3];
    const promiseList: Promise<string>[] = targetList.map(DummyRemoteProcess.requestMaster);
    Promise.all(promiseList).then(console.log);
}

function limitMain(){
    const targetList = [1,2,3];
    RateLimitPromise.all(targetList, DummyRemoteProcess.requestMaster, 2000)
        .then(console.log);
}

class DummyRemoteProcess {
    static requestMaster(master: number): Promise<string> {
        switch (master) {
            case 1:
                console.log('one');
                return Promise.resolve('one');
            case 2:
                console.log('two');
                return Promise.resolve('two');
            case 3:
                console.log('three');
                return Promise.resolve('three');
            default:
                throw new Error('Invalid master number');
        }
    }
}

main();
limitMain();
