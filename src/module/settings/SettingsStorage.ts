import { LocaleType } from "locale";
import { BaseStorageService } from "module/common/service/BaseStorageService";
import { defaultSettingsState, FeeType, FiatCurrencyType, NetworkType, NodeInfo, SettingsState } from "./state/SettingsState";
import { deepmerge } from "@peersyst/react-utils";
import { Chain } from "module/common/service/CkbSdkService.types";

export const SettingsStorage = new (class extends BaseStorageService<void, SettingsState> {
    constructor() {
        super("settings");
    }

    async getLocale(): Promise<LocaleType | undefined> {
        const settings = await this.get();
        return settings?.locale;
    }

    async getFiat(): Promise<FiatCurrencyType | undefined> {
        const settings = await this.get();
        return settings?.fiat;
    }

    async getNetwork(): Promise<NetworkType | undefined> {
        const settings = await this.get();
        return settings?.network;
    }

    async getFee(): Promise<FeeType | undefined> {
        const settings = await this.get();
        return settings?.fee;
    }

    async getNodeInfo(chain: Chain): Promise<NodeInfo> {
        const settings = await this.get();
        const chainInfoType = chain === "testnet" ? "testnetNode" : "mainnetNode";
        return settings?.[chainInfoType] || { selected: "default" };
    }

    async getSelectedNode(chain: Chain): Promise<string | undefined> {
        const nodeInfo = await this.getNodeInfo(chain);
        return nodeInfo.selected;
    }

    async getNodes(chain: Chain): Promise<string[] | undefined> {
        const nodeInfo = await this.getNodeInfo(chain);
        return nodeInfo.nodes;
    }

    async setNodeInfo(chain: Chain, nodeInfo: Partial<NodeInfo>): Promise<void> {
        const settings = await this.get();
        if (!settings) return undefined;
        const chainInfoType = chain === "testnet" ? "testnetNode" : "mainnetNode";
        const chainInfo = settings[chainInfoType];
        await this.set({ ...settings, [chainInfoType]: { ...chainInfo, ...nodeInfo } });
    }

    async setSelectedNode(chain: Chain, node: string): Promise<void> {
        const nodeInfo = await this.getNodeInfo(chain);
        if (node !== "default" && !nodeInfo.nodes?.find((n) => n === node)) return;
        await this.setNodeInfo(chain, { ...nodeInfo, selected: node });
    }

    async addNode(chain: Chain, node: string): Promise<void> {
        const nodeInfo = await this.getNodeInfo(chain);
        if (nodeInfo?.nodes?.find((n) => n === node)) return;
        const nodes = nodeInfo.nodes || [];
        await this.setNodeInfo(chain, { ...nodeInfo, nodes: [...nodes, node] });
    }

    async removeNode(chain: Chain, node: string): Promise<void> {
        const nodeInfo = await this.getNodeInfo(chain);
        const nodes = nodeInfo.nodes || [];
        await this.setNodeInfo(chain, { ...nodeInfo, nodes: nodes.filter((n) => n !== node) });
    }

    async getAllSettings(): Promise<SettingsState | null> {
        return await this.get();
    }

    async set(values: Partial<SettingsState>): Promise<void> {
        const storedValues = await this.get();
        await super.set(deepmerge(storedValues || defaultSettingsState, values));
    }
})();
