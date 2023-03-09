import FloatingTabs from "module/home/component/navigation/FloatingTabs/FloatingTabs";
import { TabItem } from "module/common/component/navigation/BaseTabs/BaseTabs.types";
import { useGetHomeTabs } from "./hooks/useGetHomeTabs";

const HomeTabs = (): JSX.Element => {
    const HomeTabsItems: TabItem[] = useGetHomeTabs();
    return <FloatingTabs tabs={HomeTabsItems} />;
};

export default HomeTabs;
