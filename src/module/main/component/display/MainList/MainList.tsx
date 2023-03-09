import { List } from "@peersyst/react-native-components";
import { ListProps } from "@peersyst/react-native-components";
import useCkbSync from "module/wallet/hook/useCkbSync";

export type MainListProps<T> = Omit<ListProps<T>, "ItemSeparatorComponent" | "style">;

function MainList<T>({ loading, onRefresh, ...rest }: MainListProps<T>): JSX.Element {
    const { synchronizing, synchronize } = useCkbSync();
    const handleRefresh = async () => {
        await synchronize();
        onRefresh?.();
    };

    return (
        <List contentContainerStyle={{ paddingHorizontal: "6%" }} loading={synchronizing || loading} onRefresh={handleRefresh} {...rest} />
    );
}

export default MainList;
