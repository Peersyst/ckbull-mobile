import styled from "@peersyst/react-native-styled";
import { LogoColIcon as Icon } from "module/common/icons/LogoColIcon";
import { View } from "react-native";
import { getTextColor } from "utils/getTextColor";
import { LogoColProps, LogoColRootProps } from "./LogoCol";

export const LogoColIcon = styled(Icon)<Omit<LogoColProps, "size">>(({ theme }) => {
    const color = getTextColor(theme);
    return {
        color: color,
    };
});

export const LogoColRoot = styled(View)<LogoColRootProps>(({ size: sizeProps }) => {
    let size;
    size = sizeProps || "100%";
    return {
        width: size,
        height: size,
        alignItems: "center",
        justifyContent: "center",
        maxHeight: 166,
        backgroundColor: "red",
    };
});