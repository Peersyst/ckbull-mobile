import Typography from "module/common/component/display/Typography/Typography";
import { useTab } from "@peersyst/react-native-components";
import { useTheme } from "@peersyst/react-native-styled";
import { BaseTabRoot } from "module/common/component/navigation/BaseTabs/BaseTab/BaseTab.styles";

export interface BaseTabProps {
    index: number;
    children: string;
    alternative?: boolean;
}

const BaseTab = ({ children, index, alternative = false }: BaseTabProps): JSX.Element => {
    const activeIndex = useTab();
    const active = activeIndex === index;

    const theme = useTheme();
    return (
        <BaseTabRoot index={index}>
            <Typography
                variant="body3Regular"
                textAlign="center"
                light={!active}
                style={active && alternative ? { color: theme.palette.white } : {}}
            >
                {children}
            </Typography>
        </BaseTabRoot>
    );
};

export default BaseTab;
