"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
function main() {
    const masters = [1, 2, 3];
    const promises = masters.map(DummyRemoteProcess.requestMaster);
    Promise.all(promises).then(console.log);
}
function limitMain() {
    const masters = [1, 2, 3];
    _1.RateLimitPromise.all(masters, DummyRemoteProcess.requestMaster, 2000)
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
main();
limitMain();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3QkFBcUM7QUFFckMsU0FBUyxJQUFJO0lBQ1QsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLE1BQU0sUUFBUSxHQUFzQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xGLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1QyxDQUFDO0FBRUQsU0FBUyxTQUFTO0lBQ2QsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLG1CQUFnQixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQztTQUNoRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFFRCxNQUFNLGtCQUFrQjtJQUNwQixNQUFNLENBQUMsYUFBYSxDQUFDLE1BQWM7UUFDL0IsUUFBUSxNQUFNLEVBQUU7WUFDWixLQUFLLENBQUM7Z0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLEtBQUssQ0FBQztnQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEMsS0FBSyxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwQztnQkFDSSxNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FDaEQ7SUFDTCxDQUFDO0NBQ0o7QUFFRCxJQUFJLEVBQUUsQ0FBQztBQUNQLFNBQVMsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmF0ZUxpbWl0UHJvbWlzZSB9IGZyb20gJy4nO1xuXG5mdW5jdGlvbiBtYWluKCkge1xuICAgIGNvbnN0IG1hc3RlcnMgPSBbMSwyLDNdO1xuICAgIGNvbnN0IHByb21pc2VzOiBQcm9taXNlPHN0cmluZz5bXSA9IG1hc3RlcnMubWFwKER1bW15UmVtb3RlUHJvY2Vzcy5yZXF1ZXN0TWFzdGVyKTtcbiAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihjb25zb2xlLmxvZyk7XG59XG5cbmZ1bmN0aW9uIGxpbWl0TWFpbigpe1xuICAgIGNvbnN0IG1hc3RlcnMgPSBbMSwyLDNdO1xuICAgIFJhdGVMaW1pdFByb21pc2UuYWxsKG1hc3RlcnMsIER1bW15UmVtb3RlUHJvY2Vzcy5yZXF1ZXN0TWFzdGVyLCAyMDAwKVxuICAgICAgICAudGhlbihjb25zb2xlLmxvZyk7XG59XG5cbmNsYXNzIER1bW15UmVtb3RlUHJvY2VzcyB7XG4gICAgc3RhdGljIHJlcXVlc3RNYXN0ZXIobWFzdGVyOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBzd2l0Y2ggKG1hc3Rlcikge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbmUnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCdvbmUnKTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndHdvJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgndHdvJyk7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RocmVlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgndGhyZWUnKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG1hc3RlciBudW1iZXInKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubWFpbigpO1xubGltaXRNYWluKCk7XG4iXX0=