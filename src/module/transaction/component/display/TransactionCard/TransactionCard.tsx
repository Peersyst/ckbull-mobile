import { Col, Row, Typography, useModal } from "@peersyst/react-native-components";
import TransactionAmount from "module/transaction/component/display/TransactionAmount/TransactionAmount";
import TransactionLabel from "module/transaction/component/display/TransactionLabel/TransactionLabel";
import TransactionDetailsModal from "../../core/TransactionDetailsModal/TransactionDetailsModal";
import { TransactionStatus as TransactionStatusEnum, TransactionType } from "ckb-peersyst-sdk";
import TransactionStatusIndicator from "module/transaction/component/display/TransactionStatusIndicator/TransactionStatusIndicator";
import TransactionStatus from "../TransactionStatus/TransactionStatus";
import { useRecoilValue } from "recoil";
import settingsState from "module/settings/state/SettingsState";
import { useGetTokenPrice } from "module/token/query/useGetTokenPrice";
import { TransactionCardProps } from "./TransactionCard.types";
import { TouchableWithoutFeedback } from "react-native";
import TransactionIcon from "../TransactionIcon/TransactionIcon";
import Balance from "module/wallet/component/display/Balance/Balance";
import MainListCard from "module/main/component/display/MainListCard/MainListCard";
import useFormatDate from "module/common/hook/useFormatDate";

const TransactionCard = ({ transaction }: TransactionCardProps): JSX.Element => {
    const { showModal } = useModal();
    const { fiat } = useRecoilValue(settingsState);
    const { data: tokenValue } = useGetTokenPrice(fiat, "nervos-network");
    const { timestamp, amount, type, token = "token", status } = transaction;
    const showAmount = type !== TransactionType.SEND_NFT && type !== TransactionType.RECEIVE_NFT;
    const formatDate = useFormatDate();
    const formattedDate = formatDate(timestamp);
    return (
        <TouchableWithoutFeedback onPress={() => showModal(TransactionDetailsModal, { transaction })}>
            <MainListCard gap="4%" alignItems="center">
                <TransactionIcon type={type} />
                <Col flex={1}>
                    <Row justifyContent="space-between">
                        <TransactionLabel variant="body3Regular" transaction={transaction} numberOfLines={1} style={{ flex: 1 }} />
                        {showAmount && (
                            <TransactionAmount
                                variant="body3Regular"
                                type={type}
                                amount={amount}
                                units={token}
                                style={{ maxWidth: "50%" }}
                            />
                        )}
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
                            showAmount &&
                            tokenValue && (
                                <Balance
                                    options={{ maximumFractionDigits: 2, minimumFractionDigits: 2 }}
                                    action="round"
                                    light
                                    balance={tokenValue * amount}
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
