import { StatusBarProps } from "./StatusBar.types";
import { useTheme } from "@peersyst/react-native-styled";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

const StatusBar = ({ appearance: appearanceProp, ...rest }: StatusBarProps): JSX.Element => {
    const {
        palette: { mode, background },
    } = useTheme();

    const appearance = appearanceProp || mode;

    return <ExpoStatusBar style={appearance === "dark" ? "light" : "dark"} backgroundColor={background} {...rest} />;
};

export default StatusBar;
