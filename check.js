"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
// function main() {
//     const masters = [1,2,3];
//     const promises: Promise<string>[] = masters.map(DummyRemoteProcess.requestMaster);
//     Promise.all(promises).then(console.log);
// }
function limitMain() {
    const masters = [1, 2, 3];
    _1.RateLimitDelayPromise.all(masters, DummyRemoteProcess.requestMaster, 2000)
        .then(console.log);
}
class DummyRemoteProcess {
    static requestMaster(master) {
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
// main();
limitMain();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGVjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdCQUEwQztBQUUxQyxvQkFBb0I7QUFDcEIsK0JBQStCO0FBQy9CLHlGQUF5RjtBQUN6RiwrQ0FBK0M7QUFDL0MsSUFBSTtBQUVKLFNBQVMsU0FBUztJQUNkLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUN4Qix3QkFBcUIsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUM7U0FDckUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBRUQsTUFBTSxrQkFBa0I7SUFDcEIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFjO1FBQy9CLFFBQVEsTUFBTSxFQUFFO1lBQ1osS0FBSyxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQyxLQUFLLENBQUM7Z0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLEtBQUssQ0FBQztnQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNyQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEM7Z0JBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0wsQ0FBQztDQUNKO0FBRUQsVUFBVTtBQUNWLFNBQVMsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmF0ZUxpbWl0RGVsYXlQcm9taXNlIH0gZnJvbSAnLic7XG5cbi8vIGZ1bmN0aW9uIG1haW4oKSB7XG4vLyAgICAgY29uc3QgbWFzdGVycyA9IFsxLDIsM107XG4vLyAgICAgY29uc3QgcHJvbWlzZXM6IFByb21pc2U8c3RyaW5nPltdID0gbWFzdGVycy5tYXAoRHVtbXlSZW1vdGVQcm9jZXNzLnJlcXVlc3RNYXN0ZXIpO1xuLy8gICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGNvbnNvbGUubG9nKTtcbi8vIH1cblxuZnVuY3Rpb24gbGltaXRNYWluKCl7XG4gICAgY29uc3QgbWFzdGVycyA9IFsxLDIsM107XG4gICAgUmF0ZUxpbWl0RGVsYXlQcm9taXNlLmFsbChtYXN0ZXJzLCBEdW1teVJlbW90ZVByb2Nlc3MucmVxdWVzdE1hc3RlciwgMjAwMClcbiAgICAgICAgLnRoZW4oY29uc29sZS5sb2cpO1xufVxuXG5jbGFzcyBEdW1teVJlbW90ZVByb2Nlc3Mge1xuICAgIHN0YXRpYyByZXF1ZXN0TWFzdGVyKG1hc3RlcjogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgc3dpdGNoIChtYXN0ZXIpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb25lJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgnb25lJyk7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3R3bycpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoJ3R3bycpO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aHJlZScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoJ3RocmVlJyk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBtYXN0ZXIgbnVtYmVyJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIG1haW4oKTtcbmxpbWl0TWFpbigpO1xuIl19