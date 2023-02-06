import MainTabs from "module/main/component/navigation/MainTabs/MainTabs";
import { TabItem } from "module/common/component/navigation/BaseTabs/BaseTabs.types";
import { useTranslate } from "module/common/hook/useTranslate";
import ConnectedSiteList from "module/activity/component/display/ConnectedSiteList/ConnectedSiteList";
import PendingList from "module/activity/component/display/PendingList/PendingList";
import SignedTransactionsList from "module/activity/component/display/SignedTransactionsList/SignedTransactionsList";

const ActivityTabs = (): JSX.Element => {
    const translate = useTranslate();
    const activityTabs: TabItem[] = [
        {
            title: translate("pending"),
            item: <PendingList />,
        },
        {
            title: translate("signed"),
            item: <SignedTransactionsList />,
        },
        {
            title: translate("connected_sites"),
            item: <ConnectedSiteList />,
        },
    ];

    return <MainTabs tabs={activityTabs} />;
};

export default ActivityTabs;
