import { QueryResult } from "query-utils";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import { useQuery } from "react-query";
import Queries from "../../../query/queries";
import { TransactionType } from "module/sdk";
import { TransactionRequestDto } from "module/activity/dto/dtos";
import { SectionListData } from "react-native";

export interface PendingTransactionRequests {
    title: number;
}

export default function (): QueryResult<readonly SectionListData<TransactionRequestDto, PendingTransactionRequests>[]> {
    const mockRequest: TransactionRequestDto = {
        transactionToken: "0",
        status: "pending",
        transaction: { amount: 4234, type: TransactionType.RECEIVE_TOKEN },
        expiresAt: 234234,
        createdAt: 23423,
        app: { title: "Figma" },
        token: "token",
    };

    const mockData: readonly SectionListData<TransactionRequestDto, PendingTransactionRequests>[] = [
        {
            title: 1675694773000,
            data: [mockRequest, mockRequest],
        },
        {
            title: 1575694773000,
            data: [mockRequest, mockRequest, mockRequest],
        },
    ];

    const { index: usedIndex, network, queryEnabled } = useServiceInstance();
    const getMockTransactionRequest = () => {
        return mockData;
    };

    return useQuery([Queries.GET_PENDING_TRANSACTION_REQUEST, usedIndex, network], getMockTransactionRequest, {
        enabled: queryEnabled,
    });
}
