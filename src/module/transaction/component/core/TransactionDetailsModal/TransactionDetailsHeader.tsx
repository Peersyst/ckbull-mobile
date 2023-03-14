import TransactionIcon from "module/transaction/component/display/TransactionIcon/TransactionIcon";
import { Col, Typography } from "@peersyst/react-native-components";
import TransactionLabel from "module/transaction/component/display/TransactionLabel/TransactionLabel";
import TransactionAmount from "module/transaction/component/display/TransactionAmount/TransactionAmount";
import { FullTransaction } from "module/common/service/CkbSdkService.types";
import useFormatDate from "module/common/hook/useFormatDate";

export interface TransactionDetailsHeaderProps {
    transaction: FullTransaction;
}

const TransactionDetailsHeader = ({ transaction }: TransactionDetailsHeaderProps): JSX.Element => {
    const { type, timestamp } = transaction;
    const formatDate = useFormatDate();
    const formattedDate = formatDate(timestamp);

    return (
        <Col alignItems="center" gap={10}>
            <TransactionIcon type={type} />
            <Col gap={5} alignItems="center">
                <TransactionLabel variant="body1Strong" transaction={transaction} numberOfLines={2} textAlign="center" />
                <TransactionAmount variant="body1Strong" transaction={transaction} />
                {timestamp && <Typography variant="body4Regular">{formattedDate}</Typography>}
            </Col>
        </Col>
    );
};

export default TransactionDetailsHeader;
