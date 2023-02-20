import { FullTransaction } from "module/common/service/CkbSdkService.types";
import { Typography, TypographyProps } from "@peersyst/react-native-components";
import { useGetTxLabel } from "./hooks/useGetTxLabel";

export interface TransactionLabelProps extends Omit<TypographyProps, "children"> {
    transaction: FullTransaction;
}

const TransactionLabel = ({ transaction, ...typographyProps }: TransactionLabelProps): JSX.Element => {
    const getTxLabel = useGetTxLabel();
    return <Typography {...typographyProps}>{getTxLabel(transaction)}</Typography>;
};

export default TransactionLabel;
