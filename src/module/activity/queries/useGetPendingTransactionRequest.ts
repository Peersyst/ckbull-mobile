import { QueryResult } from "query-utils";
import { TransactionRequestType } from "module/activity/component/display/TransactionRequest/TransactionRequest.types";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import { useQuery } from "react-query";
import Queries from "../../../query/queries";
import { TransactionType } from "module/sdk";

export default function (): QueryResult<TransactionRequestType[]> {
    const mockRequest: TransactionRequestType = {
        transactionToken: "0",
        status: "pending",
        transaction: { amount: 4234, type: TransactionType.RECEIVE_TOKEN },
        expiresAt: 234234,
        app: { title: "Figma" },
        token: "token",
    };
    const mockData: TransactionRequestType[] = [mockRequest, mockRequest, mockRequest];
    const { index: usedIndex, network, queryEnabled } = useServiceInstance();
    const getMockTransactionRequest = () => {
        return mockData;
    };

    return useQuery([Queries.GET_PENDING_TRANSACTION_REQUEST, usedIndex, network], getMockTransactionRequest, {
        enabled: queryEnabled,
    });
}
