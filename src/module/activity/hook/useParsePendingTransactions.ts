import useFormatDate from "module/common/hook/useFormatDate";
import { TransactionRequestDto } from "../dto/dtos";
import { ParsedPendingTransactions } from "../types";

export default function (): (data: TransactionRequestDto[]) => ParsedPendingTransactions[] {
    const formatDate = useFormatDate();

    return (data: TransactionRequestDto[]): ParsedPendingTransactions[] => {
        const transactionsByTimestamp = data.reduce((prev, transaction) => {
            const formattedDate = formatDate(transaction.createdAt);
            return { ...prev, [formattedDate]: [...(prev[formattedDate] || []), transaction] };
        }, {} as Record<string, TransactionRequestDto[]>);

        return Object.entries(transactionsByTimestamp).map(([title, data]) => ({ title, data }));
    };
}
