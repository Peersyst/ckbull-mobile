import { ReactElement } from "react";

export type MainTabItemType = {
    title: string;
    item: ReactElement;
};

export interface MainTabsProps {
    tabs: MainTabItemType[];
}
