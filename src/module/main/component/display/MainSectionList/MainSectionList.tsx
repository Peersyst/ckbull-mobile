import { SectionList, SectionListProps } from "react-native";
import useCkbSync from "module/wallet/hook/useCkbSync";

export type MainSectionListProps = Omit<SectionListProps<any>, "stickySectionHeadersEnabled" | "contentContainerStyle">;

const MainSectionList = ({ refreshing, onRefresh, ...rest }: SectionListProps<any>): JSX.Element => {
    const { synchronizing, synchronize } = useCkbSync();
    const handleRefresh = async () => {
        await synchronize();
        onRefresh?.();
    };

    return (
        <SectionList
            stickySectionHeadersEnabled={false}
            contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 12 }}
            refreshing={synchronizing || refreshing}
            onRefresh={handleRefresh}
            {...rest}
        />
    );
};

export default MainSectionList;
