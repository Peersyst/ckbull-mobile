import styled from "@peersyst/react-native-styled";
import { Paper } from "@peersyst/react-native-components";
import { CheckIcon } from "icons";

export interface ColorSampleRootProps {
    color: string;
}

export const ColorSampleRoot = styled(Paper, { elevation: 0 })<ColorSampleRootProps>(
    ({ color, dimensions: { width }, theme: { palette } }) => ({
        backgroundColor: color,
        height: width * 0.1,
        width: width * 0.1,
        maxWidth: 38,
        maxHeight: 38,
        borderWidth: 1,
        borderRadius: 100,
        borderStyle: "solid",
        borderColor: palette.component.input.borderColor,
        shadowOpacity: 0.8,
        alignItems: "center",
        justifyContent: "center",
    }),
);

export const ActiveIcon = styled(CheckIcon)(() => ({
    fontSize: 18,
    color: "white",
}));
