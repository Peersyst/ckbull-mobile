import { ActivityIndicator, Animated, LayoutAnimation, View } from "react-native";
import { NodeOptionRoot, DeleteButton, NodeOptionText } from "./NodeOption.styles";
import { RectButton, Swipeable } from "react-native-gesture-handler";
import { DeleteIcon } from "icons";
import useNodeInfo from "module/settings/hook/useNodeInfo";
import { SettingsStorage } from "module/settings/SettingsStorage";
import useSelectedNetwork from "module/settings/hook/useSelectedNetwork";
import { translate } from "locale";
import { useState } from "react";
import { MAINNET_NODE, TESTNET_NODE } from "@env";
import { serviceInstancesMap } from "module/wallet/state/WalletState";

export interface NodeOptionProps {
    node: string;
    selected: boolean;
    onSelected: (node: string) => any;
    erasable?: boolean;
}

const NodeOption = ({ node, selected, onSelected, erasable = true }: NodeOptionProps): JSX.Element => {
    const network = useSelectedNetwork();
    const [{ selected: selectedNode, nodes }, { setNodeInfo }] = useNodeInfo();
    const [loading, setLoading] = useState(false);

    const handleDeletion = async () => {
        setLoading(true);
        if (node === selectedNode) {
            await SettingsStorage.setSelectedNode(network, "default");
            const url = network === "testnet" ? TESTNET_NODE : MAINNET_NODE;
            for (let i = 0; i < serviceInstancesMap.size; i++) {
                serviceInstancesMap.get(i)![network].changeNode(url);
            }
            onSelected("default");
        } else if (selected) {
            onSelected("default");
        }
        await SettingsStorage.removeNode(network, node);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setNodeInfo({ selected: selected ? "default" : selectedNode, nodes: nodes?.filter((n) => n !== node) });
    };

    const renderRightActions = (progress: Animated.AnimatedInterpolation) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [50, 1],
        });
        return (
            <Animated.View
                style={{
                    transform: [{ translateX: trans }],
                    flexDirection: "row",
                }}
            >
                <DeleteButton onPress={handleDeletion} disabled={loading}>
                    {loading ? <ActivityIndicator color="white" /> : <DeleteIcon />}
                </DeleteButton>
            </Animated.View>
        );
    };

    return (
        <View onStartShouldSetResponder={() => true}>
            <Swipeable enabled={erasable} renderRightActions={renderRightActions} overshootRight={false}>
                <RectButton onPress={() => onSelected(node)} enabled={!loading}>
                    <NodeOptionRoot selected={selected}>
                        <NodeOptionText variant="body1" selected={selected}>
                            {node === "default" ? translate("default_node") : node}
                        </NodeOptionText>
                    </NodeOptionRoot>
                </RectButton>
            </Swipeable>
        </View>
    );
};

export default NodeOption;
