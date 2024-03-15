import useFormatDate from "module/common/hook/useFormatDate";
import { ParsedPendingTransactions } from "../types";
import { CompleteTransactionRequestDto } from "module/api/service";

export default function (): (data: CompleteTransactionRequestDto[]) => ParsedPendingTransactions[] {
    const formatDate = useFormatDate();

    return (data: CompleteTransactionRequestDto[]): ParsedPendingTransactions[] => {
        const transactionsByTimestamp = data.reduce(
            (prev, transaction) => {
                const formattedDate = formatDate(transaction.createdAt);
                return { ...prev, [formattedDate]: [...(prev[formattedDate] || []), transaction] };
            },
            {} as Record<string, CompleteTransactionRequestDto[]>,
        );

        return Object.entries(transactionsByTimestamp).map(([title, data]) => ({ title, data }));
    };
}
