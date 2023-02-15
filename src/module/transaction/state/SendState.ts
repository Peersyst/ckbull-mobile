import { atom } from "recoil";
import { Asset, AssetType } from "module/wallet/wallet.types";

export interface SendState {
    senderWalletIndex?: number;
    receiverAddress?: string;
    amount?: string;
    message?: string;
    asset: Asset;
}

const sendState = atom<SendState>({
    key: "send",
    default: {
        asset: { type: AssetType.NATIVE_TOKEN },
        amount: "",
    },
});

export default sendState;
