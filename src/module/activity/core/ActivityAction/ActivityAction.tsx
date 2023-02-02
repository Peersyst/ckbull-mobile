import { ActivityActionKind } from "module/activity/core/ActivityAction/ActivityAction.types";
import { Pressable } from "react-native";
import { ActivityActionList } from "module/activity/core/ActivityAction/ActivityActionList";
import { useTranslate } from "module/common/hook/useTranslate";
import { useTheme } from "@peersyst/react-native-styled";
import { ActivityActionIcon } from "module/activity/core/ActivityAction/ActivityAction.styles";
import { Typography } from "@peersyst/react-native-components";

export interface ActivityActionProps {
    action: ActivityActionKind;
    onAction: () => void;
}

const ActivityAction = ({ action, onAction }: ActivityActionProps): JSX.Element => {
    const { label, Icon } = ActivityActionList[action] || {};
    const translate = useTranslate();

    const theme = useTheme();

    return Icon ? (
        <ActivityActionIcon onPress={onAction}>
            <Icon size={20} />
        </ActivityActionIcon>
    ) : label ? (
        <Pressable accessibilityRole="button" onPress={onAction}>
            <Typography variant="body2Light" style={{ color: theme.palette.red }}>
                {translate(label)}
            </Typography>
        </Pressable>
    ) : (
        <></>
    );
};

export default ActivityAction;
