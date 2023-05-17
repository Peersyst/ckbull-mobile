import MainTabs from "module/main/component/navigation/MainTabs/MainTabs";
import { TabItem } from "module/common/component/navigation/BaseTabs/BaseTabs.types";
import { useTranslate } from "module/common/hook/useTranslate";
import ConnectedDAppList from "module/activity/component/display/ConnectedSiteList/ConnectedDAppList";
import SignedTransactionsList from "module/activity/component/display/SignedTransactionsList/SignedTransactionsList";
import PendingTransactionRequestList from "../../display/PendingTransactionRequestsList/PendingTransactionRequestsList";

const ActivityTabs = (): JSX.Element => {
    const translate = useTranslate();
    const activityTabs: TabItem[] = [
        {
            title: translate("pending"),
            item: <PendingTransactionRequestList />,
        },
        {
            title: translate("signed"),
            item: <SignedTransactionsList />,
        },
        {
            title: translate("connected_sites"),
            item: <ConnectedDAppList />,
        },
    ];

    return <MainTabs tabs={activityTabs} />;
};

export default ActivityTabs;
