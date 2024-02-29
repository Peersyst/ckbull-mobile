import styled from "@peersyst/react-native-styled";
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
    };
});
