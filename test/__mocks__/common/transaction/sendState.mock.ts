import { AppCurrency } from "module/wallet/component/display/Balance/Balance.types";
import BaseMock from "../base.mock";
import { MOCKED_ADDRESS } from "../wallet";
import { AssetMock } from "../wallet/asset.mock";

export interface ISendStateMock {
    senderWalletIndex?: number;
    receiverAddress?: string;
    amount?: string;
    message?: string;
    token: AppCurrency | string;
    asset: AssetMock;
}

export class SendStateMock extends BaseMock implements ISendStateMock {
    senderWalletIndex?: number | undefined;
    receiverAddress?: string | undefined;
    amount?: string | undefined;
    message?: string | undefined;
    token: AppCurrency | string;
    asset: AssetMock;
    constructor({ senderWalletIndex, receiverAddress, amount, message, token, asset }: Partial<ISendStateMock> = {}) {
        super();
        this.amount = amount;
        this.message = message;
        this.receiverAddress = receiverAddress || MOCKED_ADDRESS;
        this.senderWalletIndex = senderWalletIndex || 0;
        this.token = token || "CKB";
        this.asset = asset || new AssetMock();
    }
}
