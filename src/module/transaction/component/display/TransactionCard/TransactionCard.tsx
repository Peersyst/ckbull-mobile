import { Col, Row, Typography, useModal } from "@peersyst/react-native-components";
import TransactionAmount from "module/transaction/component/display/TransactionAmount/TransactionAmount";
import TransactionLabel from "module/transaction/component/display/TransactionLabel/TransactionLabel";
import TransactionDetailsModal from "../../core/TransactionDetailsModal/TransactionDetailsModal";
import { TransactionStatus as TransactionStatusEnum, TransactionType } from "ckb-peersyst-sdk";
import TransactionStatusIndicator from "module/transaction/component/display/TransactionStatusIndicator/TransactionStatusIndicator";
import TransactionStatus from "../TransactionStatus/TransactionStatus";
import { useRecoilValue } from "recoil";
import settingsState from "module/settings/state/SettingsState";
import { TransactionCardProps } from "./TransactionCard.types";
import { TouchableWithoutFeedback } from "react-native";
import TransactionIcon from "../TransactionIcon/TransactionIcon";
import Balance from "module/wallet/component/display/Balance/Balance";
import MainListCard from "module/main/component/display/MainListCard/MainListCard";
import useFormatDate from "module/common/hook/useFormatDate";
import useCkbConversion from "module/common/hook/useCkbConversion";

const TransactionCard = ({ transaction }: TransactionCardProps): JSX.Element => {
    const { showModal } = useModal();
    const { fiat } = useRecoilValue(settingsState);
    const { convertBalance } = useCkbConversion();
    const { timestamp, amount, type, status } = transaction;
    const showFiat = type === TransactionType.SEND_NATIVE_TOKEN || type === TransactionType.RECEIVE_NATIVE_TOKEN;
    const formatDate = useFormatDate();
    const formattedDate = formatDate(timestamp);
    const amountInFiat = convertBalance(amount.toString());

    return (
        <TouchableWithoutFeedback onPress={() => showModal(TransactionDetailsModal, { transaction })}>
            <MainListCard gap="4%" alignItems="center">
                <TransactionIcon type={type} />
                <Col flex={1}>
                    <Row justifyContent="space-between">
                        <TransactionLabel variant="body3Regular" transaction={transaction} numberOfLines={1} style={{ flex: 1 }} />
                        <TransactionAmount variant="body3Regular" transaction={transaction} style={{ maxWidth: "50%" }} />
                    </Row>
                    <Row justifyContent="space-between" alignItems="center">
                        {timestamp ? (
                            <Typography variant="body3Light" light>
                                {formattedDate}
                            </Typography>
                        ) : (
                            <TransactionStatus variant="body3Light" status={status} />
                        )}
                        {status !== TransactionStatusEnum.COMMITTED ? (
                            <TransactionStatusIndicator status={status} />
                        ) : (
                            showFiat && (
                                <Balance
                                    options={{ maximumFractionDigits: 2, minimumFractionDigits: 2 }}
                                    action="round"
                                    light
                                    balance={amountInFiat}
                                    units={fiat}
                                    variant="body3Light"
                                />
                            )
                        )}
                    </Row>
                </Col>
            </MainListCard>
        </TouchableWithoutFeedback>
    );
};

export default TransactionCard;
