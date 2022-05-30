import styled from "@peersyst/react-native-styled";
import GlassModal from "module/common/component/feedback/GlassModal/GlassModal";
import { Col, List } from "react-native-components";
import { NODE_OPTION_HEIGHT } from "module/settings/components/core/ChangeNodeModal/NodeOption/NodeOption.styles";

export const NODES_LIST_HEIGHT_RATIO = 0.75;

export const ChangeNodeModalRoot = styled(GlassModal)(({ dimensions: { height } }) => ({
    minHeight: height * 0.8,
}));

export const NodesListWrapper = styled(Col, { justifyContent: "space-between" })(
    ({ dimensions: { height }, safeAreaInsets: { bottom } }) => {
        const computedHeight = height * NODES_LIST_HEIGHT_RATIO;
        return {
            marginHorizontal: -20,
            maxHeight: computedHeight,
            minHeight: computedHeight,
            paddingBottom: bottom || 20,
        };
    },
);

export const NodesList = styled(List)(({ dimensions: { height }, safeAreaInsets: { bottom } }) => {
    const computedHeight = height * NODES_LIST_HEIGHT_RATIO - (NODE_OPTION_HEIGHT + (bottom || 20));
    return {
        maxHeight: computedHeight,
        minHeight: computedHeight,
    };
});
