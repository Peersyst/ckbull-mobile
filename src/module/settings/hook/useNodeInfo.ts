import settingsState, { NodeInfo } from "module/settings/state/SettingsState";
import { useRecoilState } from "recoil";
import useSelectedNetwork from "module/settings/hook/useSelectedNetwork";

export interface UseNodeInfoSetters {
    setNodeInfo: (nodeInfo: Partial<NodeInfo>) => void;
    setSelectedNode: (node: string) => void;
    addNode: (node: string) => void;
    removeNode: (node: string) => void;
}

export type UseNodeInfoResult = [NodeInfo, UseNodeInfoSetters];

const useNodeInfo = function (): UseNodeInfoResult {
    const network = useSelectedNetwork();
    const [{ mainnetNode, testnetNode }, setState] = useRecoilState(settingsState);

    const isTestnet = network === "testnet";
    const networkNode = isTestnet ? testnetNode : mainnetNode;
    const networkNodes = networkNode.nodes || [];
    const networkType = isTestnet ? "testnetNode" : "mainnetNode";

    const setNodeInfo = (nodeInfo: Partial<NodeInfo>) => {
        setState((state) => ({ ...state, [networkType]: { ...networkNode, ...nodeInfo } }));
    };

    const setSelectedNode = (node: string) => {
        if (node !== "default" && !networkNode.nodes?.find((n) => n === node)) return;
        setState((state) => ({ ...state, [networkType]: { ...networkNode, selected: node } }));
    };

    const addNode = (node: string) => {
        if (networkNodes.find((n) => n === node)) return;
        setState((state) => ({ ...state, [networkType]: { ...networkNode, nodes: [...networkNodes, node] } }));
    };

    const removeNode = (node: string) => {
        setState((state) => ({ ...state, [networkType]: { ...networkNode, nodes: networkNodes.filter((n) => n !== node) } }));
    };

    return [networkNode, { setNodeInfo, setSelectedNode, addNode, removeNode }];
};

export const useNodeInfoState = (): NodeInfo => {
    return useNodeInfo()[0];
};

export const useSetNodeInfo = (): UseNodeInfoSetters => {
    return useNodeInfo()[1];
};

export default useNodeInfo;
