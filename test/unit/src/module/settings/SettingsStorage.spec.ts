import { BaseStorageService } from "module/common/service/BaseStorageService";
import { SuccessApiCall } from "test-utils";
import { SettingsStorage } from "module/settings/SettingsStorage";
import { FeeRate } from "module/sdk";
import nodeInfo from "mocks/node-info";
import { NodeInfo } from "module/settings/state/SettingsState";
import settings from "mocks/settings";

describe("SettingsStorage tests", () => {
    let setStorage: jest.SpyInstance<Promise<void>, [value: any]>;

    beforeEach(() => {
        setStorage = jest.spyOn(BaseStorageService.prototype, "set").mockReturnValue(SuccessApiCall(undefined));
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe("locale", () => {
        test("Returns undefined", async () => {
            jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(undefined));
            expect(await SettingsStorage.getLocale()).toBeUndefined();
        });
        test("Returns stored locale", async () => {
            jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall({ locale: "en" }));
            expect(await SettingsStorage.getLocale()).toBe("en");
        });
    });

    describe("fiat", () => {
        test("Returns undefined", async () => {
            jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(undefined));
            expect(await SettingsStorage.getFiat()).toBeUndefined();
        });
        test("Returns stored fiat", async () => {
            jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall({ fiat: "usd" }));
            expect(await SettingsStorage.getFiat()).toBe("usd");
        });
    });

    describe("network", () => {
        test("Returns undefined", async () => {
            jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(undefined));
            expect(await SettingsStorage.getNetwork()).toBeUndefined();
        });
        test("Returns stored network", async () => {
            jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall({ network: "testnet" }));
            expect(await SettingsStorage.getNetwork()).toBe("testnet");
        });
    });

    describe("fee", () => {
        test("Returns undefined", async () => {
            jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(undefined));
            expect(await SettingsStorage.getFee()).toBeUndefined();
        });
        test("Returns stored fee", async () => {
            jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall({ fee: FeeRate.SLOW }));
            expect(await SettingsStorage.getFee()).toBe(FeeRate.SLOW);
        });
    });

    describe("node info", () => {
        describe("getNodeInfo", () => {
            test("Returns default info", async () => {
                jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(undefined));
                expect(await SettingsStorage.getNodeInfo("testnet")).toEqual({ selected: "default" });
            });
            test("Returns stored testnet node info", async () => {
                jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(nodeInfo));
                expect(await SettingsStorage.getNodeInfo("testnet")).toEqual(nodeInfo.testnetNode);
            });
            test("Returns stored mainnet node info", async () => {
                jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(nodeInfo));
                expect(await SettingsStorage.getNodeInfo("mainnet")).toEqual(nodeInfo.mainnetNode);
            });
        });

        describe("getSelectedNode", () => {
            test("Returns default", async () => {
                jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(undefined));
                expect(await SettingsStorage.getSelectedNode("testnet")).toEqual("default");
            });
            test("Returns stored testnet selected node", async () => {
                jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(nodeInfo));
                expect(await SettingsStorage.getSelectedNode("testnet")).toBe(nodeInfo.testnetNode.selected);
            });
            test("Returns stored mainnet selected node", async () => {
                jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(nodeInfo));
                expect(await SettingsStorage.getSelectedNode("mainnet")).toBe(nodeInfo.mainnetNode.selected);
            });
        });

        describe("getNodes", () => {
            test("Returns undefined", async () => {
                jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(undefined));
                expect(await SettingsStorage.getNodes("testnet")).toBeUndefined();
            });
            test("Returns stored testnet nodes", async () => {
                jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(nodeInfo));
                expect(await SettingsStorage.getNodes("testnet")).toBe(nodeInfo.testnetNode.nodes);
            });
            test("Returns stored mainnet nodes", async () => {
                jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(nodeInfo));
                expect(await SettingsStorage.getNodes("mainnet")).toBe(nodeInfo.mainnetNode.nodes);
            });
        });

        describe("setNodeInfo", () => {
            const newTestnetNodeInfo: NodeInfo = { ...nodeInfo.testnetNode, selected: nodeInfo.testnetNode.nodes![1] };
            const newMainnetNodeInfo: NodeInfo = { ...nodeInfo.mainnetNode, selected: nodeInfo.mainnetNode.nodes![1] };
            test("Does not set data", async () => {
                jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(undefined));
                await SettingsStorage.setNodeInfo("testnet", newTestnetNodeInfo);
                expect(setStorage).not.toHaveBeenCalled();
            });
            test("Sets testnet node info", async () => {
                jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(nodeInfo));
                await SettingsStorage.setNodeInfo("testnet", newTestnetNodeInfo);
                expect(setStorage).toHaveBeenCalledWith(expect.objectContaining({ testnetNode: newTestnetNodeInfo }));
            });
            test("Sets mainnet node info", async () => {
                jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(nodeInfo));
                await SettingsStorage.setNodeInfo("mainnet", newMainnetNodeInfo);
                expect(setStorage).toHaveBeenCalledWith(expect.objectContaining({ mainnetNode: newMainnetNodeInfo }));
            });
        });

        describe("setSelectedNode", () => {
            let setNodeInfo: jest.SpyInstance;
            beforeEach(() => {
                setNodeInfo = jest.spyOn(SettingsStorage, "setNodeInfo").mockReturnValue(SuccessApiCall(undefined));
            });

            const newTestnetNodeInfo: NodeInfo = { ...nodeInfo.testnetNode, selected: nodeInfo.testnetNode.nodes![1] };
            const newMainnetNodeInfo: NodeInfo = { ...nodeInfo.mainnetNode, selected: nodeInfo.mainnetNode.nodes![1] };

            test("Does not set selected node when node does not exist", async () => {
                jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(nodeInfo));
                await SettingsStorage.setSelectedNode("testnet", "wrong-node");
                expect(setNodeInfo).not.toHaveBeenCalled();
            });
            test("Sets testnet selected node", async () => {
                jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(nodeInfo));
                await SettingsStorage.setSelectedNode("testnet", newTestnetNodeInfo.selected);
                expect(setNodeInfo).toHaveBeenCalledWith("testnet", newTestnetNodeInfo);
            });
            test("Sets mainnet selected node", async () => {
                jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(nodeInfo));
                await SettingsStorage.setSelectedNode("mainnet", newMainnetNodeInfo.selected);
                expect(setNodeInfo).toHaveBeenCalledWith("mainnet", newMainnetNodeInfo);
            });
            test("Sets default node", async () => {
                jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(nodeInfo));
                await SettingsStorage.setSelectedNode("testnet", "default");
                expect(setNodeInfo).toHaveBeenCalledWith("testnet", { ...nodeInfo.testnetNode, selected: "default" });
            });
        });

        describe("addNode", () => {
            let setNodeInfo: jest.SpyInstance;
            beforeEach(() => {
                setNodeInfo = jest.spyOn(SettingsStorage, "setNodeInfo").mockReturnValue(SuccessApiCall(undefined));
            });

            const newTestnetNodeInfo: NodeInfo = { ...nodeInfo.testnetNode, nodes: [...nodeInfo.testnetNode.nodes!, "new-testnet-node"] };
            const newMainnetNodeInfo: NodeInfo = { ...nodeInfo.mainnetNode, nodes: [...nodeInfo.mainnetNode.nodes!, "new-mainnet-node"] };

            test("Does not add node if it already exists", async () => {
                jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(nodeInfo));
                await SettingsStorage.addNode("testnet", nodeInfo.testnetNode.nodes![0]);
                expect(setNodeInfo).not.toHaveBeenCalled();
            });
            test("Adds a new testnet node", async () => {
                jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(nodeInfo));
                await SettingsStorage.addNode("testnet", newTestnetNodeInfo.nodes![2]);
                expect(setNodeInfo).toHaveBeenCalledWith("testnet", newTestnetNodeInfo);
            });
            test("Adds a new mainnet node", async () => {
                jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(nodeInfo));
                await SettingsStorage.addNode("mainnet", newMainnetNodeInfo.nodes![2]);
                expect(setNodeInfo).toHaveBeenCalledWith("mainnet", newMainnetNodeInfo);
            });
        });

        describe("removeNode", () => {
            let setNodeInfo: jest.SpyInstance;
            beforeEach(() => {
                setNodeInfo = jest.spyOn(SettingsStorage, "setNodeInfo").mockReturnValue(SuccessApiCall(undefined));
            });

            const newTestnetNodeInfo: NodeInfo = { ...nodeInfo.testnetNode, nodes: nodeInfo.testnetNode.nodes!.slice(0, -1) };
            const newMainnetNodeInfo: NodeInfo = { ...nodeInfo.mainnetNode, nodes: nodeInfo.mainnetNode.nodes!.slice(0, -1) };

            test("Does nothing if there are no nodes", async () => {
                jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(undefined));
                await SettingsStorage.removeNode("testnet", nodeInfo.testnetNode.nodes![1]);
                expect(setNodeInfo).toHaveBeenCalledWith("testnet", { selected: "default", nodes: [] });
            });
            test("Removes testnet node", async () => {
                jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(nodeInfo));
                await SettingsStorage.removeNode("testnet", nodeInfo.testnetNode.nodes![1]);
                expect(setNodeInfo).toHaveBeenCalledWith("testnet", newTestnetNodeInfo);
            });
            test("Adds a new mainnet node", async () => {
                jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(nodeInfo));
                await SettingsStorage.removeNode("mainnet", nodeInfo.mainnetNode.nodes![1]);
                expect(setNodeInfo).toHaveBeenCalledWith("mainnet", newMainnetNodeInfo);
            });
        });
    });

    describe("getAllSettings", () => {
        test("Returns undefined", async () => {
            jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(undefined));
            expect(await SettingsStorage.getAllSettings()).toBeUndefined();
        });
        test("Returns stored settings", async () => {
            jest.spyOn(BaseStorageService.prototype, "get").mockReturnValue(SuccessApiCall(settings));
            expect(await SettingsStorage.getAllSettings()).toEqual(settings);
        });
    });
});
