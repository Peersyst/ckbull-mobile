import Balance from "module/wallet/component/display/Balance/Balance";
import { BalanceProps } from "module/wallet/component/display/Balance/Balance.types";
import { FullTransaction } from "module/common/service/CkbSdkService.types";
import transactionTypeToBalanceAction from "./utils/transactionTypeToBalanceAction";
import { BNToNumber } from "module/common/utils/BalanceOperations/utils/BNtoNumber";
import { TransactionType } from "ckb-peersyst-sdk";

export interface TransactionAmountProps extends Omit<BalanceProps, "action" | "balance"> {
    transaction: FullTransaction;
}

const TransactionAmount = ({ transaction, ...rest }: TransactionAmountProps): JSX.Element => {
    const { type, token, amount, tokenAmount, tokenType } = transaction;
    const action = transactionTypeToBalanceAction(type);
    const isPrimary = action === "add";
    const finalAmount = tokenType ? BNToNumber(tokenAmount || 0, tokenType.decimals) : amount;
    const showAmount =
        (type !== TransactionType.SEND_NFT && type !== TransactionType.RECEIVE_NFT) || (tokenType && tokenAmount === undefined);

    return (
        <>
            {showAmount && (
                <Balance action={action} units={token || "token"} balance={finalAmount} color={isPrimary ? "primary" : "text"} {...rest} />
            )}
        </>
    );
};

export default TransactionAmount;
