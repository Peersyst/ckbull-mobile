import { Col, Row, Typography } from "@peersyst/react-native-components";
import { TokenIcon } from "./TokenCard.styles";
import Balance from "module/wallet/component/display/Balance/Balance";
import settingsState from "module/settings/state/SettingsState";
import { useGetTokenPrice } from "module/token/query/useGetTokenPrice";
import { useRecoilValue } from "recoil";
import MainListCard from "module/main/component/display/MainListCard/MainListCard";
import { placeholder_image } from "images";
import { TokenAmount } from "module/token/types";
import { BNToNumber } from "module/common/utils/BalanceOperations/utils/BNtoNumber";

export interface TokenCardProps {
    token: TokenAmount;
}

const TokenCard = ({ token: { type, amount } }: TokenCardProps): JSX.Element => {
    const { name, tokenName, imageUri } = type;
    const { fiat } = useRecoilValue(settingsState);
    const { data: tokenValue } = useGetTokenPrice(fiat, type);

    return (
        <MainListCard alignItems="center" justifyContent="space-between">
            <Row alignItems="center" gap={16}>
                <TokenIcon source={imageUri ? { uri: imageUri } : placeholder_image} />
                <Typography variant="body2Regular" numberOfLines={1} style={{ maxWidth: "70%" }}>
                    {name}
                </Typography>
            </Row>
            <Col alignItems="flex-end" justifyContent="center" gap={2}>
                <Balance
                    options={{ maximumFractionDigits: 4 }}
                    balance={BNToNumber(amount, type.decimals)}
                    units={tokenName ? (tokenName === "Unknown Token" ? "?" : tokenName) : ""}
                    variant="body3Regular"
                />
                {tokenValue && <Balance action="round" light balance={tokenValue} units={fiat} variant="body3Light" />}
            </Col>
        </MainListCard>
    );
};

export default TokenCard;
