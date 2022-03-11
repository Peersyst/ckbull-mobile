import { TouchableWithoutFeedback } from "react-native";
import { Col, Row, Typography } from "react-native-components";
import { TokenIcon, TokenRoot } from "./Token.styles";
import { TokenAmount } from "../../../types";
import Balance from "module/wallet/component/display/Balance/Balance";
import { translate } from "locale";
import useCkbConversion from "module/common/hook/useCkbConversion";

interface TokenProps {
    token: TokenAmount;
}

const Token = ({ token }: TokenProps): JSX.Element => {
    const { value } = useCkbConversion("usd", token.amount);
    return (
        <TouchableWithoutFeedback>
            <TokenRoot>
                <Row alignItems="center" gap={10}>
                    <TokenIcon source={{ uri: token.type.tokenUri }} />
                    <Typography variant="body1" fontWeight="bold">
                        {token.type.tokenName}
                    </Typography>
                </Row>
                <Col>
                    <Balance balance={token.amount.toString()} smallBalance units={translate("token")} boldUnits variant={"body1"} />
                    <Balance balance={(value).toString()} units={"USD"} variant={"button"} />
                </Col>
            </TokenRoot>
        </TouchableWithoutFeedback>
    );
};

export default Token;
