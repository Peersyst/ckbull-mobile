import { atom } from "recoil";

/**
 * This state is only used in the createWallet process
 * to access the general wallet info use WalletState
 */

export interface CreateWalletState {
    name: string | undefined;
    pin: string | undefined;
    mnemonic: string[] | undefined;
    colorIndex: number | undefined;
}

// 3:45:00
const privatePond = ["private", "pond", "zero", "popular", "fashion", "omit", "february", "obscure", "pattern", "city", "camp", "pistol"];
// 1:15:00
const teachAct = "teach act exotic into script once dutch choice menu elite apple faith".split(" ");

const createWalletState = atom<CreateWalletState>({
    key: "createWallet",
    default: {
        name: "Test",
        pin: "0000",
        mnemonic: privatePond,
        colorIndex: 1,
    },
});

export default createWalletState;
