import styled from "@peersyst/react-native-styled";
import { Select, Typography } from "@peersyst/react-native-components";
import { alpha } from "@peersyst/react-utils";

export const SelectRoot = styled(Select)(({ theme, dimensions }) => ({
    hint: {
        color: theme.palette.component.input.hintColor,
    },
    component: {
        display: {
            borderRadius: theme.borderRadiusSm,
            height: 60,
            backgroundColor: theme.palette.component.input.backgroundColor,
            borderWidth: theme.borderWidth,
            borderStyle: "solid",
            borderColor: theme.palette.component.input.borderColor,
            placeholderColor: theme.palette.component.input.placeholderColor,
            paddingHorizontal: 20,
            icon: {
                color: theme.palette.gray[300],
                fontSize: 20,
            },
            disabled: {
                borderColor: alpha(theme.palette.component.input.borderColor, 0.15),
            },
        },
        menu: {
            position: "absolute",
            bottom: 0,
            maxWidth: dimensions.width,
            width: dimensions.width,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            height: "55%",
            maxHeight: 410,
        },
        item: {
            ...theme.typography.body2Light,
            selected: {
                ...theme.typography.body2Regular,
                backgroundColor: theme.palette.primary,
            },
        },
    },
}));

export const SelectHeader = styled(Typography)(() => ({
    padding: 20,
}));
