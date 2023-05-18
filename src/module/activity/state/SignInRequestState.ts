import { atom } from "recoil";

export interface SignInRequestState {
    selectedWallet?: number;
}

const signInRequestState = atom<SignInRequestState>({
    key: "signInRequest",
    default: {},
});

export default signInRequestState;
