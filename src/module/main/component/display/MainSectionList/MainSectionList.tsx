import useCkbSync from "module/wallet/hook/useCkbSync";
import { ListSection } from "module/main/component/display/MainSectionList/MainSectionList.styles";
import { SectionList, SectionListProps, Typography } from "@peersyst/react-native-components";

export type MainSectionListProps<T, D = any> = Omit<
    SectionListProps<T, D>,
    "stickySectionHeadersEnabled" | "contentContainerStyle" | "style" | "ItemSeparatorComponent"
>;

function MainSectionList<T, D extends { title: string }>({ loading, onRefresh, ...rest }: MainSectionListProps<T, D>): JSX.Element {
    const { synchronizing, synchronize } = useCkbSync();
    const handleRefresh = async () => {
        await synchronize();
        onRefresh?.();
    };

    const renderSectionHeader: SectionListProps<T, D>["renderSectionHeader"] = ({ section: { title } }): JSX.Element => {
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
}

export default MainSectionList;
