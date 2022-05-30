import { createModal, Divider, ExposedBackdropProps, useToast } from "react-native-components";
import { ChangeNodeModalRoot, NodesList, NodesListWrapper } from "module/settings/components/core/ChangeNodeModal/ChangeNodeModal.styles";
import { translate } from "locale";
import useSelectedNetwork from "module/settings/hook/useSelectedNetwork";
import NodeOption from "module/settings/components/core/ChangeNodeModal/NodeOption/NodeOption";
import AddNodeButton from "module/settings/components/input/AddNodeButton/AddNodeButton";
import { useState } from "react";
import useNodeInfo from "module/settings/hook/useNodeInfo";
import { serviceInstancesMap } from "module/wallet/state/WalletState";
import { SettingsStorage } from "module/settings/SettingsStorage";

const ChangeNodeModal = createModal((props: ExposedBackdropProps) => {
    const network = useSelectedNetwork();
    const [networkNode, { setSelectedNode: setNode }] = useNodeInfo();
    const nodes = networkNode.nodes || [];
    const [selectedNode, setSelectedNode] = useState(networkNode.selected);
    const { showToast } = useToast();

    const handleNodeSelection = (node: string) => {
        setSelectedNode(node);
    };

    const handleNodeChange = async () => {
        if (selectedNode !== networkNode.selected) {
            await SettingsStorage.setSelectedNode(network, selectedNode);
            setNode(selectedNode);
            for (let i = 0; i < serviceInstancesMap.size; i++) {
                serviceInstancesMap.get(i)![network].changeNode(selectedNode);
            }
            const nodeText = (() => {
                if (selectedNode === "default") return translate("default_node").toLowerCase();
                else return selectedNode.length > 30 ? selectedNode.substr(0, 30) + "..." : selectedNode;
            })();
            showToast(translate("node_changed", { network, node: nodeText }), { type: "success" });
        }
    };

    return (
        <ChangeNodeModalRoot title={translate("change_node", { network: translate(network) })} onSave={handleNodeChange} {...props}>
            <NodesListWrapper>
                <AddNodeButton onNodeAdded={handleNodeSelection} />
                <Divider />
                <NodesList
                    data={[...nodes, "default"]}
                    renderItem={({ item: node }) => (
                        <NodeOption
                            node={node}
                            selected={node === selectedNode}
                            onSelected={handleNodeSelection}
                            erasable={node !== "default"}
                        />
                    )}
                    keyExtractor={(item, i) => item + i}
                />
            </NodesListWrapper>
        </ChangeNodeModalRoot>
    );
});

export default ChangeNodeModal;
