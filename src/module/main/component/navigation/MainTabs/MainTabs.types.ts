import { ReactElement } from "react";

export type BaseTabItemType = {
    title: string;
    item: ReactElement;
};

export interface MainTabsProps {
    tabs: BaseTabItemType[];
}
