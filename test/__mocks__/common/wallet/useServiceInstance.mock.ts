import { MnemonicMocked } from "mocks/MnemonicMocked";
import { CKBSDKService } from "module/common/service/CkbSdkService";
import { Chain } from "module/common/service/CkbSdkService.types";
import * as useServiceInstance from "module/wallet/hook/useServiceInstance";
import BaseMock from "../base.mock";

export class UseServiceInstanceMock extends BaseMock implements useServiceInstance.useServiceInstanceReturn {
    network: Chain;
    serviceInstance: CKBSDKService;
    index: number;
    queryEnabled: boolean;
    constructor({
        network = "testnet",
        serviceInstance = new CKBSDKService("testnet", MnemonicMocked),
        index = 0,
        queryEnabled = true,
    }: Partial<useServiceInstance.useServiceInstanceReturn> = {}) {
        super();
        this.network = network;
        this.serviceInstance = serviceInstance;
        this.index = index;
        this.queryEnabled = queryEnabled;
        this.mock = jest.spyOn(useServiceInstance, "default").mockReturnValue(this);
    }
}
