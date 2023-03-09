import { Nft } from "ckb-peersyst-sdk";
import { NetworkType } from "module/settings/state/SettingsState";
import { TokenAmount } from "module/token/types";

export enum AssetType {
    NATIVE_TOKEN = "native_token",
    FT = "token",
    NFT = "nft",
} //token refers as near token

export interface Asset {
    type: AssetType;
    nft?: Nft;
    ft?: TokenAmount;
}

export interface BaseWallet {
    index: number;
}

/**
 * STORAGE TYPES
 */
export interface UnencryptedWalletInfo extends BaseWallet {
    account: string;
}

export interface UnsecureWalletStorageType {
    testnet: [];
    mainnet: UnencryptedWalletInfo[];
}

export interface SecureWalletInfo {
    privateKey: string;
    walletIds: number[];
}

export interface SecureWalletStorageType {
    testnet: SecureWalletInfo[];
    mainnet: SecureWalletInfo[];
    pin: string | undefined;
    mnemonic: string | undefined;
    mainPrivateKey: string | undefined;
}

export type StorageWallet = UnencryptedWalletInfo;

export interface WalletStorageType {
    pin: SecureWalletStorageType["pin"];
    mnemonic: SecureWalletStorageType["mnemonic"];
    testnet: StorageWallet[];
    mainnet: StorageWallet[];
}

export interface SetWalletsParams {
    wallets: StorageWallet[];
    secureWallets: SecureWalletInfo[];
    network: NetworkType;
}

export interface BaseWalletWithFormScreenProps {
    onSubmit: () => void;
    submitText?: string;
}
