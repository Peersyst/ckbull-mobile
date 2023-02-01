import { DAOCardRoot } from "./DAOAccountCard.styles";
import DAOCardBalance from "./DAOCardBalance/DAOCardBalance";
import DAOCardButtons from "./DAOCardButtons/DAOCardButtons";
import DarkThemeProvider from "module/common/component/util/ThemeProvider/DarkThemeProvider";
import useGetDAOBalance from "module/dao/query/useGetDAOBalance";
import useGetDaoInfo from "module/dao/query/useGetDaoInfo";
import useGetBalance from "module/wallet/query/useGetBalance";

const DAOCard = (): JSX.Element => {
    const { data: daoBalance, isLoading: daoBalanceLoading } = useGetDAOBalance();
    const { data: { estimated_apc = "0" } = {}, isLoading: loadingDao } = useGetDaoInfo();
    const { data: { freeBalance = 0 } = {}, isLoading: balanceLoading } = useGetBalance();

    const loading = daoBalanceLoading || loadingDao || balanceLoading;

    return (
        <DarkThemeProvider>
            <DAOCardRoot>
                <DAOCardBalance daoBalance={daoBalance} estimatedApc={estimated_apc} freeBalance={freeBalance} loading={loading} />
                <DAOCardButtons loading={loading} />
            </DAOCardRoot>
        </DarkThemeProvider>
    );
};

export default DAOCard;
