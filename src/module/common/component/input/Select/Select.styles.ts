import styled from "@peersyst/react-native-styled";
import { Select, Typography } from "@peersyst/react-native-components";

export const SelectRoot = styled(Select)(({ theme }) => ({
    component: {
        display: {
            borderRadius: theme.borderRadiusSm,
            height: 60,
            backgroundColor: theme.palette.background,
            borderWidth: theme.borderWidth,
            borderStyle: "solid",
            borderColor: theme.palette.component.input.borderColor,
            placeholderColor: theme.palette.component.input.placeholderColor,
            paddingHorizontal: 20,
            icon: {
                color: theme.palette.gray[300],
                fontSize: 20,
            },
        },
    },
}));

export const SelectHeader = styled(Typography)(() => ({
    padding: 20,
}));
