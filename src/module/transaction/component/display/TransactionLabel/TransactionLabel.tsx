import { useTranslate } from "module/common/hook/useTranslate";
import { FullTransaction } from "module/common/service/CkbSdkService.types";
import { TX_LABEL } from "./utils/txLabel";
import { Typography, TypographyProps } from "@peersyst/react-native-components";

export interface TransactionLabelProps extends Omit<TypographyProps, "children"> {
    type: FullTransaction["type"];
    accountId?: string;
}

const TransactionLabel = ({ type, accountId, ...typographyProps }: TransactionLabelProps): JSX.Element => {
    const translate = useTranslate();

    return (
        <Typography {...typographyProps}>
            {translate(TX_LABEL[type])}
            {accountId && ` (${accountId})`}
        </Typography>
    );
};

export default TransactionLabel;
