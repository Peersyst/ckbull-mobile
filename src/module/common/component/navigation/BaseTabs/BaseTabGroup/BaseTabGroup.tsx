import { TabGroup } from "@peersyst/react-native-components";
import { ReactElement } from "react";
import { BaseIndicator } from "module/common/component/navigation/BaseTabs/BaseTabGroup/BaseTabGroup.styles";
import { ViewStyle } from "react-native";

interface BaseTabGroupProps {
    children: ReactElement | ReactElement[];
    style?: ViewStyle;
}

const BaseTabGroup = ({ children, ...rest }: BaseTabGroupProps): JSX.Element => {
    return (
        <TabGroup renderIndicator indicator={<BaseIndicator />} {...rest}>
            {children}
        </TabGroup>
    );
};

export default BaseTabGroup;
