import useGetPendingTransactions from "module/activity/queries/useGetPendingTransactions";
import { useMemo } from "react";
import { TransactionRequestDto } from "module/activity/dto/dtos";
import useFormatDate from "module/common/hook/useFormatDate";
import { SectionListData } from "react-native";

interface ParsedPendingTransaction {
    title: string;
    data: TransactionRequestDto[];
}

export default function () {
    const { data: pendingTransactions, ...queryRest } = useGetPendingTransactions();
    const formatDate = useFormatDate();

    return useMemo(() => {
        const timestampsMap: Record<string, TransactionRequestDto[]> = {};
        pendingTransactions?.map((transaction) => {
            const { createdAt } = transaction;
            const formattedDate = formatDate(createdAt);
            if (!timestampsMap[formattedDate]) {
                timestampsMap[formattedDate] = [transaction];
            } else {
                timestampsMap[formattedDate].push(transaction);
            }
        });
        const timestamps = Object.keys(timestampsMap);
        const parsedPendingTransactions: SectionListData<TransactionRequestDto, ParsedPendingTransaction>[] = timestamps.map(
            (timestamp) => {
                return { title: timestamp, data: timestampsMap[timestamp] };
            },
        );

        return { parsedPendingTransactions, ...queryRest };
    }, [pendingTransactions]);
}
