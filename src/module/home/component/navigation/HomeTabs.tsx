import TransactionsList from "module/transaction/component/core/TransactionsList/TransactionsList";
import TokensList from "module/token/component/core/TokensList/TokensList";
import NftsList from "module/nft/component/core/NftsList/NftsList";
import { MainTabItemType } from "module/main/component/navigation/MainTabs/MainTabs.types";
import MainTabs from "../../../main/component/navigation/MainTabs/MainTabs";
import { useTranslate } from "module/common/hook/useTranslate";
import ConnectedSite from "module/activity/component/display/ConnectedSite/ConnectedSite";
import { ActivityActionKind } from "module/activity/core/ActivityAction/ActivityAction.types";

const HomeTabs = (): JSX.Element => {
    const translate = useTranslate();
    const HomeTabs: MainTabItemType[] = [
        {
            title: translate("transactions"),
            item: <TransactionsList />,
        },
        {
            title: translate("currencies"),
            item: <TokensList />,
        },
        {
            title: translate("nfts"),
            item: <NftsList />,
        },
        {
            title: "Connected Sites",
            item: <ConnectedSite title="Figma" action={ActivityActionKind.SIGN} onAction={() => undefined} status="failed" />,
        },
    ];
    return <MainTabs tabs={HomeTabs} />;
};

export default HomeTabs;
