import { ReactNode } from "react";
import { BaseMainScreenRoot } from "module/main/component/layout/BaseMainScreen/BaseMainScreen.styles";

export interface BaseMainScreenProps {
    children: ReactNode;
}

const BaseMainScreen = ({ children }: BaseMainScreenProps): JSX.Element => {
    return <BaseMainScreenRoot>{children}</BaseMainScreenRoot>;
};

export default BaseMainScreen;
