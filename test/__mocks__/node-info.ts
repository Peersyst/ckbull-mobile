import { SettingsState } from "module/settings/state/SettingsState";

const nodeInfo: Pick<SettingsState, "testnetNode" | "mainnetNode"> = {
    testnetNode: {
        selected: "testnet-url",
        nodes: ["testnet-url", "alt-testnet-url"],
    },
    mainnetNode: {
        selected: "mainnet-url",
        nodes: ["mainnet-url", "alt-mainnet-url"],
    },
};

export default nodeInfo;
