import styled from "@peersyst/react-native-styled";
import { darken } from "@peersyst/react-utils";
import Button from "module/common/component/input/Button/Button";

export const MainButtonRoot = styled(Button)(({ theme }) => {
    return {
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
            primary: {
                backgroundGradient: {
                    colors: [
                        darken(theme.palette.gradient.greenDarkGreen[0], 0.15),
                        darken(theme.palette.gradient.greenDarkGreen[1], 0.15),
                    ],
                    start: { x: 0, y: 0 },
                    end: { x: 1, y: 1 },
                },
            },
        },
    };
});
