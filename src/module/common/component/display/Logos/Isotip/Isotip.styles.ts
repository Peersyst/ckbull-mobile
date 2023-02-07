import styled from "@peersyst/react-native-styled";
import { LogoIcon } from "icons";
import { getTextColor } from "utils/getTextColor";
import { IsotipRootProps, SizeIsotipRelationType } from "./Isotip.types";

export const Isotip = styled(LogoIcon)<IsotipRootProps>(({ theme, size }) => {
    const color = getTextColor(theme);
    const { fontSize } = sizeRelations[size];
    return {
        color: color,
        fontSize: fontSize,
    };
});

export const sizeRelations: SizeIsotipRelationType = {
    xs: {
        fontSize: 37.72,
    },
    sm: {
        fontSize: 48,
    },
    md: {
        fontSize: 70,
    },
    lg: {
        fontSize: 103.61,
    },
    xl: {
        fontSize: 165.43,
    },
};
