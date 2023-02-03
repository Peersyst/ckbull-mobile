import styled from "@peersyst/react-native-styled";
import Button from "module/common/component/input/Button/Button";
import { darken } from "@peersyst/react-utils";

export const MainButtonRoot = styled(Button)(({ theme }) => ({
    lg: {
        width: 64,
        height: 64,
        paddingHorizontal: 12,
        paddingVertical: 0,
    },
    variant: {
        primary: {
            gradient: {
                colors: [theme.palette.green[200], theme.palette.violet],
                start: { x: 0, y: 0 },
                end: { x: 1, y: 1 },
            },
        },
    },
    pressed: {
        variant: {
            primary: {
                gradient: {
                    colors: [darken(theme.palette.green[200], 0.15), darken(theme.palette.violet, 0.15)],
                    start: { x: 0, y: 0 },
                    end: { x: 1, y: 1 },
                },
            },
        },
    },
}));
