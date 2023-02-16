import { Row, Typography, Suspense } from "@peersyst/react-native-components";
import Balance from "module/wallet/component/display/Balance/Balance";
import useGetBalance from "module/wallet/query/useGetBalance";
import useWallet from "module/wallet/hook/useWallet";
import { config } from "config";
import { serviceInstancesMap } from "module/wallet/state/WalletState";

export interface WalletItemProps {
    index: number;
    units?: string;
}

const WalletItem = ({ index, units = config.tokenName }: WalletItemProps): JSX.Element => {
    const { name } = useWallet(index);
    const { data: { freeBalance = 0 } = {}, isLoading: balanceIsLoading } = useGetBalance(index);

    return (
        <Row alignItems="center" style={{ overflow: "hidden" }}>
            <Typography numberOfLines={1} variant="body2Light" style={{ maxWidth: "100%" }}>
                {name}
            </Typography>
            <Row>
                <Typography variant="body2Light">{" · "}</Typography>
                <Suspense isLoading={balanceIsLoading} activityIndicatorSize="small">
                    <Balance balance={freeBalance} variant="body2Light" light units={units} />
                </Suspense>
            </Row>
        </Row>
    );
};

export default WalletItem;
