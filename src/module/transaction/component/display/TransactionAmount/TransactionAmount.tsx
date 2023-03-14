import Balance from "module/wallet/component/display/Balance/Balance";
import { BalanceProps } from "module/wallet/component/display/Balance/Balance.types";
import { FullTransaction } from "module/common/service/CkbSdkService.types";
import transactionTypeToBalanceAction from "./utils/transactionTypeToBalanceAction";

export interface TransactionAmountProps extends Omit<BalanceProps, "action" | "balance"> {
    type: FullTransaction["type"];
    token?: FullTransaction["token"];
    amount: BalanceProps["balance"];
}

const TransactionAmount = ({ type, amount, token, ...rest }: TransactionAmountProps): JSX.Element => {
    const action = transactionTypeToBalanceAction(type);
    const isPrimary = action === "add";
    return (
        <Balance
            action={action}
            units={token?.type.tokenName || "token"}
            balance={amount}
            color={isPrimary ? "primary" : "text"}
            {...rest}
        />
    );
};

export default TransactionAmount;
