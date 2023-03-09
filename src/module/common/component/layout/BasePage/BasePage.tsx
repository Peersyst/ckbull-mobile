import { BasePageProps } from "module/common/component/layout/BasePage/BasePage.types";
import { BasePageContent, BasePageRoot } from "./BasePage.styles";
import { StatusBar } from "@peersyst/react-native-components";

const BasePage = ({ children, header = true, style }: BasePageProps): JSX.Element => {
    return (
        <>
            <BasePageRoot style={style}>
                <BasePageContent header={header}>{children}</BasePageContent>
            </BasePageRoot>
            <StatusBar appearance="dark" />
        </>
    );
};

export default BasePage;
