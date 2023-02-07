import { SettingsIcon } from "icons";
import { HeaderRoot, HeaderSettingsButton } from "./Header.styles";
import { Row, Typography } from "@peersyst/react-native-components";
import { MainScreens } from "../MainNavigatorGroup/MainScreens";
import DarkThemeProvider from "module/common/component/util/ThemeProvider/DarkThemeProvider";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import useGetHeaderTitle from "./hooks/useGetHeaderTitle";
import { MainStackParamsList } from "stack-navigator";

const Header = ({ navigation, route }: BottomTabHeaderProps): JSX.Element => {
    const routeName = route.name as keyof MainStackParamsList;
    const title = useGetHeaderTitle(routeName);

    return (
        <HeaderRoot>
            <DarkThemeProvider>
                <Row alignItems="center" justifyContent="center" flex={1}>
                    <Typography variant="body1Regular">{title}</Typography>
                    <Row style={{ position: "absolute", right: 0 }}>
                        <HeaderSettingsButton onPress={() => navigation.navigate(MainScreens.SETTINGS)}>
                            <SettingsIcon />
                        </HeaderSettingsButton>
                    </Row>
                </Row>
            </DarkThemeProvider>
        </HeaderRoot>
    );
};

export default Header;
