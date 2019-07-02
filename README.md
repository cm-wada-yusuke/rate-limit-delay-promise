rate-limit-promise
===

A library that performs rate limiting when executing a list of asynchronous processes.


Install
---

```
$ npm install rate-limit-promise
```

Usage
---


### Before

```typescript
function main() {
    const targetList = [1,2,3];
    const promiseList: Promise<string>[] = targetList.map(DummyRemoteProcess.requestMaster);
    Promise.all(promiseList).then(console.log);
}

class DummyRemoteProcess {
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
main();
```

It is very useful, but if the external API `requestMaster` has a rate limit, you need a mechanism to reduce the frequency of requests. Use the library as follows:


### After


```typescript
function limitMain() {
    const targetList = [1,2,3];
    const promiseList: Promise<string>[] = targetList.map(DummyRemoteProcess.requestMaster);
    Promise.all(promiseList).then(console.log);
}

class DummyRemoteProcess {
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
limitMain();
```

