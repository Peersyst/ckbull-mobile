import { SettingsState } from "module/settings/state/SettingsState";
import { FeeRate } from "module/sdk";
import nodeInfo from "mocks/node-info";

const settings: SettingsState = {
    locale: "en",
    fiat: "usd",
    network: "testnet",
    fee: FeeRate.NORMAL,
    ...nodeInfo,
};

export default settings;
