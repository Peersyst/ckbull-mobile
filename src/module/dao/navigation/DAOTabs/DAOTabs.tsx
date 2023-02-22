import MainTabs from "../../../main/component/navigation/MainTabs/MainTabs";
import { TabItem } from "module/common/component/navigation/BaseTabs/BaseTabs.types";
import { useGetDAOTabs } from "./hooks/useGetDAOTabs";

const DAOTabs = (): JSX.Element => {
    const DAOTabsItems: TabItem[] = useGetDAOTabs();

    return <MainTabs tabs={DAOTabsItems} />;
};

export default DAOTabs;
