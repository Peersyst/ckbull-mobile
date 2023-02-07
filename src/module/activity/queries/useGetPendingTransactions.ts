import { QueryResult } from "query-utils";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import { useQuery } from "react-query";
import Queries from "../../../query/queries";
import { TransactionType } from "module/sdk";
import { TransactionRequestDto } from "module/activity/dto/dtos";

export default function (): QueryResult<TransactionRequestDto[]> {
    const mockRequest: TransactionRequestDto = {
        transactionToken: "0",
        status: "pending",
        transaction: { amount: 4234, type: TransactionType.RECEIVE_TOKEN },
        expiresAt: 1675759479000,
        createdAt: 1675759478000,
        app: { title: "Figma" },
        token: "token",
    };

    const mockRequest2: TransactionRequestDto = {
        transactionToken: "0",
        status: "pending",
        transaction: { amount: 4234, type: TransactionType.RECEIVE_TOKEN },
        expiresAt: 1175759479000,
        createdAt: 1175759478000,
        app: { title: "Figma" },
        token: "token",
    };

    const mockData: TransactionRequestDto[] = [
        mockRequest,
        mockRequest2,
        mockRequest2,
        mockRequest,
        mockRequest,
        mockRequest2,
        mockRequest2,
    ];

    const { index: usedIndex, network, queryEnabled } = useServiceInstance();
    const getMockTransactionRequest = () => {
        return mockData;
    };

    return useQuery([Queries.SIGNER_APP_GET_PENDING_TRANSACTIONS, usedIndex, network], getMockTransactionRequest, {
        enabled: queryEnabled,
    });
}
