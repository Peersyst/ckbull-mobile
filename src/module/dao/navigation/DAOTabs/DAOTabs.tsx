import MainTabs from "../../../main/component/navigation/MainTabs/MainTabs";
import DAOCompletedWithdrawalsList from "module/dao/component/core/DAOCompletedWithdrawalsList/DAOCompletedWithdrawalsList";
import DAODepositsList from "module/dao/component/core/DAODepositsList/DAODepositsList";
import { useTranslate } from "module/common/hook/useTranslate";
import { TabItem } from "module/common/component/navigation/BaseTabs/BaseTabs.types";
import ConnectedSiteList from "module/activity/component/display/ConnectedSiteList/ConnectedSiteList";

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
        {
            title: "Connected Sites",
            item: <ConnectedSiteList />,
        },
    ];
    return <MainTabs tabs={DAOTabs} />;
};

export default DAOTabs;
