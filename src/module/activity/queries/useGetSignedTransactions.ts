import { QueryResult } from "query-utils";
import { TransactionStatus, TransactionType } from "module/sdk";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import { useQuery } from "react-query";
import Queries from "../../../query/queries";
import { FullTransaction } from "module/common/service/CkbSdkService.types";

export default function (): QueryResult<FullTransaction[]> {
    const mockTransaction: FullTransaction = {
        status: TransactionStatus.COMMITTED,
        transactionHash: "0x0",
        inputs: [{ address: "0x0000", quantity: 1000 }],
        outputs: [{ address: "0x0001", quantity: 1000 }],
        type: TransactionType.RECEIVE_NATIVE_TOKEN,
        amount: 1000,
    };
    const mockData: FullTransaction[] = [mockTransaction, mockTransaction, mockTransaction];
    const { index: usedIndex, network, queryEnabled } = useServiceInstance();
    const getMockSignedTransactions = () => {
        return mockData;
    };

    return useQuery([Queries.SIGNER_APP_GET_SIGNED_TRANSACTIONS, usedIndex, network], getMockSignedTransactions, {
        enabled: queryEnabled,
    });
}
