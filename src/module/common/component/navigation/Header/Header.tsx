import { SettingsIcon } from "icons";
import { HeaderRoot, HeaderSettingsButton } from "./Header.styles";
import { Row, StatusBar, Typography } from "@peersyst/react-native-components";
import { MainScreens } from "../MainNavigatorGroup/MainScreens";
import DarkThemeProvider from "module/common/component/util/ThemeProvider/DarkThemeProvider";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { MainStackParamsList } from "stack-navigator";
import useGetRouteTitle from "module/common/hook/useGetRouteTitle";

const Header = ({ navigation, route }: BottomTabHeaderProps): JSX.Element => {
    const routeName = route.name as keyof MainStackParamsList;
    const title = useGetRouteTitle(routeName);

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
                <StatusBar />
            </DarkThemeProvider>
        </HeaderRoot>
    );
};

export default Header;
