import { ReactElement } from "react";

export type TabItem = {
    title: string;
    item: ReactElement;
};

export interface TabsComponentProps {
    tabs: TabItem[];
}
