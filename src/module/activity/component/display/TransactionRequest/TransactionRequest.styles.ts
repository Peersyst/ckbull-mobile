import styled from "@peersyst/react-native-styled";
import ActivityCard from "module/activity/core/ActivityCard/ActivityCard";
import { TransactionRequestRootProps } from "module/activity/component/display/TransactionRequest/TransactionRequest.types";
import { TransactionRequestDto } from "module/activity/dto/dtos";

export const TransactionRequestRoot = styled(ActivityCard)<TransactionRequestRootProps>(({ theme, status }) => {
    const canHandle = status === "signed" || status === "expired";
    const handleStatusColor = (status: TransactionRequestDto["status"]): string | undefined => {
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
