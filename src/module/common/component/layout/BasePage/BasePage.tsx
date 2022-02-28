import { BasePageProps } from "module/common/component/layout/BasePage/BasePage.types";
import { ThemeProvider, useTheme } from "@peersyst/react-native-styled";
import { theme } from "module/common/style/theme";
import { darkTheme } from "module/common/style/darkTheme";
import Header from "module/common/component/navigation/Header/Header";
import { BasePageContent, BasePageRoot } from "./BasePage.styles";
import { StatusBar } from "react-native-components";

const BasePage = ({ children, appearance: appearanceProp, header = true, showIcons }: BasePageProps): JSX.Element => {
    const {
        palette: { mode },
    } = useTheme();

    const appearance = appearanceProp || mode;

    return (
        <ThemeProvider theme={appearance === "light" ? theme : darkTheme}>
            <BasePageRoot>
                <StatusBar />
                <BasePageContent>
                    {header && <Header showIcons={showIcons} />}
                    {children}
                </BasePageContent>
            </BasePageRoot>
        </ThemeProvider>
    );
};

export default BasePage;
