import TransactionsList from "module/transaction/component/core/TransactionsList/TransactionsList";
import TokensList from "module/token/component/core/TokensList/TokensList";
import NftsList from "module/nft/component/core/NftsList/NftsList";
import { BaseTabItemType } from "module/main/component/navigation/MainTabs/MainTabs.types";
import { useTranslate } from "module/common/hook/useTranslate";
import FloatingTabs from "module/home/component/navigation/FloatingTabs/FloatingTabs";

const HomeTabs = (): JSX.Element => {
    const translate = useTranslate();
    const HomeTabs: BaseTabItemType[] = [
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
    ];
    return <FloatingTabs tabs={HomeTabs} />;
};

export default HomeTabs;
