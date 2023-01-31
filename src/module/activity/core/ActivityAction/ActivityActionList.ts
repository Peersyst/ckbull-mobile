import { ActivityAction, ActivityActionKind } from "module/activity/core/ActivityAction/ActivityAction.types";
import { ChevronRightIcon } from "icons";

export const ActivityActionList: ActivityAction = {
    [ActivityActionKind.DISCONNECT]: {
        label: "disconnect",
    },
    [ActivityActionKind.SIGN]: {
        Icon: ChevronRightIcon,
    },
};
