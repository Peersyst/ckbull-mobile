import { SettingsIcon } from "icons";
import { HeaderRoot, HeaderSettingsButton } from "./Header.styles";
import { Row, StatusBar } from "@peersyst/react-native-components";
import { MainScreens } from "../MainNavigatorGroup/MainScreens";
import DarkThemeProvider from "module/common/component/util/ThemeProvider/DarkThemeProvider";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import LogoRow from "../../display/Logos/LogoRow/LogoRow";

const Header = ({ navigation }: BottomTabHeaderProps): JSX.Element => {
    return (
        <HeaderRoot>
            <DarkThemeProvider>
                <Row alignItems="center" justifyContent="center" flex={1}>
                    <LogoRow />
                    <Row style={{ position: "absolute", right: 0 }}>
                        <HeaderSettingsButton onPress={() => navigation.navigate(MainScreens.SETTINGS)}>
                            <SettingsIcon />
                        </HeaderSettingsButton>
                    </Row>
                </Row>
                <StatusBar />
            </DarkThemeProvider>
        </HeaderRoot>
    );
};

export default Header;
