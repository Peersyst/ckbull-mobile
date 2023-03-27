import styled from "@peersyst/react-native-styled";
import ActivityCard from "module/activity/core/ActivityCard/ActivityCard";
import { TransactionRequestRootProps } from "module/activity/component/display/TransactionRequest/TransactionRequest.types";
import { CompleteTransactionRequestDto } from "module/api/service";

export const TransactionRequestRoot = styled(ActivityCard)<TransactionRequestRootProps>(({ theme, status }) => {
    const canHandle = status === "signed" || status === "expired";
    const handleStatusColor = (status: CompleteTransactionRequestDto["status"]): string | undefined => {
        switch (status) {
            case "signed":
                return theme.palette.green[200];
            case "expired":
                return theme.palette.red;
            default:
                return undefined;
        }
    };

    const action = "add";
    const isPrimary = action === "add";

    const amountStyle = {
        color: isPrimary ? theme.palette.green[200] : theme.palette.text,
    };

    return canHandle
        ? {
              description: {
                  color: handleStatusColor(status),
              },
              amount: amountStyle,
          }
        : {
              amount: amountStyle,
          };
});
