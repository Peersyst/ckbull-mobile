import { jsonToTransactionSkeletonInterface } from "module/sdk/utils/parser";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import { TransactionSkeletonType } from "@ckb-lumos/helpers";

export interface ObtainAddressesOptions {
    inputs?: boolean;
    outputs?: boolean;
}

export interface ObtainAddressesReturn {
    inputAddresses?: string[];
    outputAddresses?: string[];
}

export default function useGetAddressesFromTransaction(transaction: any, options: ObtainAddressesOptions): ObtainAddressesReturn {
    const { serviceInstance } = useServiceInstance();

    const obtainOutputAddresses = (transaction: TransactionSkeletonType): string[] => {
        return serviceInstance!.getOutputAddressesFromTransaction({ transaction });
    };

    const obtainInputAddresses = (transaction: TransactionSkeletonType): string[] => {
        return serviceInstance!.getInputAddressesFromTransaction({ transaction });
    };

    const { inputs = false, outputs = false } = options || {};
    const tx = jsonToTransactionSkeletonInterface(transaction);

    return {
        inputAddresses: inputs ? obtainInputAddresses(tx) : undefined,
        outputAddresses: outputs ? obtainOutputAddresses(tx) : undefined,
    };
}
