import { Col } from "@peersyst/react-native-components";
import { useTranslate } from "module/common/hook/useTranslate";
import DAOCardLabel from "module/dao/component/core/DAOAccountCard/DAOCardBalance/DAOCardLabel/DAOCardLabel";
import { DAOBalance } from "module/sdk";
import FiatCKBBalance from "module/wallet/component/display/FiatCKBBalance/FiatCKBBalance";

export interface DAOCardBalanceProps {
    daoBalance: DAOBalance | undefined;
    estimatedApc: string | undefined;
    freeBalance: number | undefined;
    loading?: boolean;
}

const DAOCardBalance = ({ daoBalance, estimatedApc = "0", freeBalance = 0, loading = false }: DAOCardBalanceProps): JSX.Element => {
    const translate = useTranslate();
    const fiatCKBBalanceCommonProps: Partial<DAOCardLabelProps> = {
        Component: FiatCKBBalance,
        textAlign: "right",
        loading,
    };

    return (
        <Col gap="3.25%">
            <DAOCardLabel label={translate("available")} balance={freeBalance} {...fiatCKBBalanceCommonProps} />
            <DAOCardLabel label={translate("locked")} balance={daoBalance?.daoDeposit || 0} {...fiatCKBBalanceCommonProps} />
            <DAOCardLabel loading={loading} label={translate("estimated_apc")}>{`${estimatedApc}%`}</DAOCardLabel>
        </Col>
    );
};

export default DAOCardBalance;
