"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
// function main() {
//     const targetList = [1,2,3];
//     const promiseList: Promise<string>[] = targetList.map(DummyRemoteProcess.requestMaster);
//     Promise.all(promiseList).then(console.log);
// }
function limitMain() {
    const targetList = [1, 2, 3];
    _1.RateLimitPromise.all(targetList, DummyRemoteProcess.requestMaster, 2000)
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
limitMain();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3QkFBcUM7QUFFckMsb0JBQW9CO0FBQ3BCLGtDQUFrQztBQUNsQywrRkFBK0Y7QUFDL0Ysa0RBQWtEO0FBQ2xELElBQUk7QUFFSixTQUFTLFNBQVM7SUFDZCxNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsbUJBQWdCLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDO1NBQ25FLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0IsQ0FBQztBQUVELE1BQU0sa0JBQWtCO0lBQ3BCLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBYztRQUMvQixRQUFRLE1BQU0sRUFBRTtZQUNaLEtBQUssQ0FBQztnQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEMsS0FBSyxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQyxLQUFLLENBQUM7Z0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDckIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BDO2dCQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUNoRDtJQUNMLENBQUM7Q0FDSjtBQUVELFNBQVMsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmF0ZUxpbWl0UHJvbWlzZSB9IGZyb20gJy4nO1xuXG4vLyBmdW5jdGlvbiBtYWluKCkge1xuLy8gICAgIGNvbnN0IHRhcmdldExpc3QgPSBbMSwyLDNdO1xuLy8gICAgIGNvbnN0IHByb21pc2VMaXN0OiBQcm9taXNlPHN0cmluZz5bXSA9IHRhcmdldExpc3QubWFwKER1bW15UmVtb3RlUHJvY2Vzcy5yZXF1ZXN0TWFzdGVyKTtcbi8vICAgICBQcm9taXNlLmFsbChwcm9taXNlTGlzdCkudGhlbihjb25zb2xlLmxvZyk7XG4vLyB9XG5cbmZ1bmN0aW9uIGxpbWl0TWFpbigpe1xuICAgIGNvbnN0IHRhcmdldExpc3QgPSBbMSwyLDNdO1xuICAgIFJhdGVMaW1pdFByb21pc2UuYWxsKHRhcmdldExpc3QsIER1bW15UmVtb3RlUHJvY2Vzcy5yZXF1ZXN0TWFzdGVyLCAyMDAwKVxuICAgICAgICAudGhlbihjb25zb2xlLmxvZyk7XG59XG5cbmNsYXNzIER1bW15UmVtb3RlUHJvY2VzcyB7XG4gICAgc3RhdGljIHJlcXVlc3RNYXN0ZXIobWFzdGVyOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBzd2l0Y2ggKG1hc3Rlcikge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbmUnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCdvbmUnKTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndHdvJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgndHdvJyk7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RocmVlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgndGhyZWUnKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG1hc3RlciBudW1iZXInKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubGltaXRNYWluKCk7XG4iXX0=