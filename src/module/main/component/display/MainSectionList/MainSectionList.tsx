import { SectionList, SectionListProps } from "react-native";
import useCkbSync from "module/wallet/hook/useCkbSync";
import { ListSection } from "module/main/component/display/MainSectionList/MainSectionList.styles";
import { Typography } from "@peersyst/react-native-components";

export type MainSectionListProps = Omit<
    SectionListProps<any, any>,
    "stickySectionHeadersEnabled" | "contentContainerStyle" | "style" | "ItemSeparatorComponent"
>;

const MainSectionList = ({ refreshing, onRefresh, ...rest }: MainSectionListProps): JSX.Element => {
    const { synchronizing, synchronize } = useCkbSync();
    const handleRefresh = async () => {
        await synchronize();
        onRefresh?.();
    };

    const renderSectionHeader = ({ section: { title } }: any): JSX.Element => {
        return (
            <ListSection>
                <Typography variant="body3Strong">{title}</Typography>
            </ListSection>
        );
    };

    return (
        <SectionList
            renderSectionHeader={renderSectionHeader}
            stickySectionHeadersEnabled={false}
            contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 12 }}
            refreshing={synchronizing || refreshing}
            onRefresh={handleRefresh}
            {...rest}
        />
    );
};

export default MainSectionList;
