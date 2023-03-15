import DAOCardBalance from "./DAOCardBalance/DAOCardBalance";
import DAOCardButtons from "./DAOCardButtons/DAOCardButtons";
import useGetDAOBalance from "module/dao/query/useGetDAOBalance";
import useGetDaoInfo from "module/dao/query/useGetDaoInfo";
import useGetBalance from "module/wallet/query/useGetBalance";
import WalletCard, { WalletComponentCardProps } from "module/wallet/component/surface/WalletCard/WalletCard";

const DAOCard = ({ wallet, style }: WalletComponentCardProps) => {
    const { data: daoBalance, isLoading: daoBalanceLoading } = useGetDAOBalance();
    const { data: { estimated_apc = "0.0000" } = {}, isLoading: loadingDao } = useGetDaoInfo();
    const { data: { freeBalance = 0 } = {}, isLoading: balanceLoading } = useGetBalance();

    const loading = daoBalanceLoading || loadingDao || balanceLoading || wallet.synchronizingCells;

    return (
        <WalletCard wallet={wallet} style={style} nameVariant="body2Light">
            {{
                content: (
                    <DAOCardBalance daoBalance={daoBalance} estimatedApc={estimated_apc} freeBalance={freeBalance} loading={loading} />
                ),
                footer: <DAOCardButtons />,
            }}
        </WalletCard>
    );
};

export default DAOCard;
