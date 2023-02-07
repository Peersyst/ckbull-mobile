import useCkbSync from "module/wallet/hook/useCkbSync";
import { ListSection } from "module/main/component/display/MainSectionList/MainSectionList.styles";
import { SectionList, SectionListProps, Typography } from "@peersyst/react-native-components";

export type MainSectionListProps = Omit<
    SectionListProps,
    "stickySectionHeadersEnabled" | "contentContainerStyle" | "style" | "ItemSeparatorComponent"
>;

const MainSectionList = ({ loading, onRefresh, ...rest }: MainSectionListProps): JSX.Element => {
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
            loading={synchronizing || loading}
            onRefresh={handleRefresh}
            {...rest}
        />
    );
};

export default MainSectionList;
