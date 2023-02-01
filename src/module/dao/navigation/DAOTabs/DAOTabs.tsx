import MainTabs from "../../../main/component/navigation/MainTabs/MainTabs";
import DAOCompletedWithdrawalsList from "module/dao/component/core/DAOCompletedWithdrawalsList/DAOCompletedWithdrawalsList";
import DAODepositsList from "module/dao/component/core/DAODepositsList/DAODepositsList";
import { useTranslate } from "module/common/hook/useTranslate";
import { TabItem } from "module/common/component/navigation/BaseTabs/BaseTabs.types";

const DAOTabs = (): JSX.Element => {
    const translate = useTranslate();
    const DAOTabs: TabItem[] = [
        {
            title: translate("deposits"),
            item: <DAODepositsList />,
        },
        {
            title: translate("withdrawals"),
            item: <DAOCompletedWithdrawalsList />,
        },
    ];
    return <MainTabs tabs={DAOTabs} />;
};

export default DAOTabs;
