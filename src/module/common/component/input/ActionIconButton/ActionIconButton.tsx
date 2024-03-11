import { useTheme } from "@peersyst/react-native-components";
import LabeledIconButton from "../LabeledIconButton/LabeledIconButton";
import { ActionIconButtonProps } from "./ActionIconButton.types";

export default function ActionIconButton({ isActive, action, ...rest }: ActionIconButtonProps): JSX.Element {
    const {
        palette: { gray, overlay },
    } = useTheme();
    return (
        <LabeledIconButton
            labelColor={isActive ? gray[0] : overlay[100]["48%"]}
            variant={isActive ? "secondary" : "outlined"}
            onPress={action}
            {...rest}
        />
    );
}
