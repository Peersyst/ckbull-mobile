import { ActivityActionKind } from "module/activity/core/ActivityAction/ActivityAction.types";
import { Pressable } from "react-native";
import { ActivityActionList } from "module/activity/core/ActivityAction/ActivityActionList";
import Typography from "module/common/component/display/Typography/Typography";
import { useTranslate } from "module/common/hook/useTranslate";
import { useTheme } from "@peersyst/react-native-styled";
import { capitalize } from "@peersyst/react-utils";
import { ActivityActionIcon } from "module/activity/core/ActivityAction/ActivityAction.styles";

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
                {capitalize(translate(label))}
            </Typography>
        </Pressable>
    ) : (
        <></>
    );
};

export default ActivityAction;
