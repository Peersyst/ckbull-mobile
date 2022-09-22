import { Col, ScrollView } from "@peersyst/react-native-components";
import TransactionDetail from "module/transaction/component/core/TransactionDetailsModal/TransactionDetailsBody/TransactionDetail";
import { translate } from "locale";
import TransactionTypeDetails from "module/transaction/component/core/TransactionDetailsModal/TransactionDetailsBody/TransactionTypeDetails";
import { FullTransaction } from "module/common/service/CkbSdkService.types";
import TransactionStatus from "module/transaction/component/display/TransactionStatus/TransactionStatus";
import BlockchainAddress from "module/common/component/display/BlockchainAddress/BlockchainAddress";

export interface TransactionDetailsBodyProps {
    transaction: FullTransaction;
}

const TransactionDetailsBody = ({ transaction }: TransactionDetailsBodyProps): JSX.Element => {
    const { transactionHash, status } = transaction;
    return (
        <ScrollView alwaysBounceVertical={false} style={{ maxHeight: 300 }}>
            <Col gap={10} flex={1}>
                <TransactionTypeDetails transaction={transaction} />
                {/*  {(type === TransactionType.SEND_CKB || type === TransactionType.RECEIVE_CKB) && (
                    <TransactionDetail title={translate("message")}>
                        <Typography variant="body1">Transaction message</Typography>
                    </TransactionDetail>
                )} */}
                <TransactionDetail title={translate("status")}>
                    <TransactionStatus status={status} variant="body1" fontWeight="500" />
                </TransactionDetail>
                <TransactionDetail title={translate("hash")}>
                    <BlockchainAddress address={transactionHash} type="tx" variant="body1" length={8} />
                </TransactionDetail>
            </Col>
        </ScrollView>
    );
};

export default TransactionDetailsBody;
