import { FeeRate } from "ckb-peersyst-sdk";
import { LocaleType } from "locale";
import getDefaultLocale from "locale/utils/getDefaultLocale";
import { atom } from "recoil";
import { Chain } from "module/common/service/CkbSdkService.types";

export interface NodeInfo {
    selected: "default" | string;
    nodes?: string[];
}

export type FiatCurrencyType = "cny" | "usd" | "eur" | "jpy" | "gbp";

export type NetworkType = Chain;

export type FeeType = FeeRate.SLOW | FeeRate.NORMAL | FeeRate.FAST;

export interface SettingsState {
    locale?: LocaleType;
    fiat: FiatCurrencyType;
    network: NetworkType;
    fee: FeeType;
    mainnetNode: NodeInfo;
    testnetNode: NodeInfo;
    loading?: boolean;
}

export const defaultSettingsState: SettingsState = {
    locale: getDefaultLocale(),
    fiat: "usd",
    network: "testnet",
    fee: FeeRate.NORMAL,
    mainnetNode: { selected: "default" },
    testnetNode: { selected: "default" },
};

const settingsState = atom<SettingsState>({
    key: "settings",
    default: defaultSettingsState,
});

export default settingsState;
