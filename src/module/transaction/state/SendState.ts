import { atom } from "recoil";
import { config } from "config";
import { AppCurrency } from "module/wallet/component/display/Balance/Balance.types";
import { Asset, AssetType } from "module/wallet/wallet.types";

export interface SendState {
    senderWalletIndex?: number;
    receiverAddress?: string;
    amount?: string;
    message?: string;
    token: AppCurrency | string;
    asset: Asset;
}

const sendState = atom<SendState>({
    key: "send",
    default: {
        token: config.tokenName,
        asset: { type: AssetType.NATIVE_TOKEN },
        amount: "",
    },
});

export default sendState;
