import styled from "@peersyst/react-native-styled";
import ActivityCard from "module/activity/core/ActivityCard/ActivityCard";
import {
    TransactionRequestRootProps,
    TransactionRequestStatusType,
} from "module/activity/component/display/TransactionRequest/TransactionRequest.types";

export const TransactionRequestRoot = styled(ActivityCard)<TransactionRequestRootProps>(({ theme, status }) => {
    const canHandle = status === "signed" || status === "expired";
    const handleStatusColor = (status: TransactionRequestStatusType): string | undefined => {
        switch (status) {
            case "signed":
                return theme.palette.green[200];
            case "expired":
                return theme.palette.red;
            default:
                return undefined;
        }
    };

    return canHandle
        ? {
              description: {
                  color: handleStatusColor(status),
              },
          }
        : {};
});
