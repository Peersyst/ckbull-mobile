import styled from "@peersyst/react-native-styled";
import Button from "module/common/component/input/Button/Button";
import { BUTTON_SIZES } from "module/common/component/input/Button/Button.styles";

export const IconButtonRoot = styled(Button)(() => ({
    lg: {
        width: BUTTON_SIZES.lg,
        fontSize: 28,
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
    md: {
        width: BUTTON_SIZES.md,
        fontSize: 24,
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
    sm: {
        width: BUTTON_SIZES.sm,
        fontSize: 20,
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
}));
