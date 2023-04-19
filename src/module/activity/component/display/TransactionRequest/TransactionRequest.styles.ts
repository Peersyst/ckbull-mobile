import styled from "@peersyst/react-native-styled";
import ActivityCard from "module/activity/core/ActivityCard/ActivityCard";
import { TransactionRequestRootProps } from "module/activity/component/display/TransactionRequest/TransactionRequest.types";

export const TransactionRequestRoot = styled(ActivityCard)<TransactionRequestRootProps>(({ theme }) => {
    // TODO: Add action styles when Transaction implementation done
    const action = "add";
    const isPrimary = action === "add";

    const amountStyle = {
        color: isPrimary ? theme.palette.green[200] : theme.palette.text,
    };

    return {
        amount: amountStyle,
    };
});
