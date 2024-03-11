import { Col } from "@peersyst/react-native-components";
import { FullTransaction } from "module/common/service/CkbSdkService.types";
import { TransactionType } from "ckb-peersyst-sdk";
import { useTranslate } from "module/common/hook/useTranslate";
import TransactionCellDetails from "./TransactionCellsDetails";

export interface TransactionTypeDetailsProps {
    transaction: FullTransaction;
}

const TransactionTypeDetails = ({ transaction: { type, outputs, inputs } }: TransactionTypeDetailsProps): JSX.Element => {
    const translate = useTranslate();
    if (type === TransactionType.SEND_NATIVE_TOKEN || type === TransactionType.RECEIVE_NATIVE_TOKEN)
        return (
            <Col gap={10}>
                <TransactionCellDetails title={translate("senders")} data={inputs} />
                <TransactionCellDetails title={translate("receiver")} data={outputs[0] ? [outputs[0]] : []} />
            </Col>
        );
    else return <></>;
};

export default TransactionTypeDetails;
