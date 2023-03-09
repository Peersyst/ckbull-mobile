import { useMutation, UseMutationResult } from "react-query";
import {
    DepositInDAOParams,
    SendTransactionParams,
    TransferNftParams,
    TransferTokensParams,
    WithdrawOrUnlockParams,
} from "module/common/service/CkbSdkService.types";
import useAddUncommittedTransaction from "module/transaction/query/useAddUncommitedTransaction";
import { WalletStorage } from "module/wallet/WalletStorage";
import useServiceInstance from "module/wallet/hook/useServiceInstance";

export enum CKBSendMethodsNames {
    sendNft = "sendNft",
    sendToken = "sendToken",
    sendTransaction = "sendTransaction",
    withdrawOrUnlock = "withdrawOrUnlock",
    depositInDAO = "depositInDAO",
}

export interface CKBSendMethods {
    sendNft: TransferNftParams;
    sendToken: TransferTokensParams;
    sendTransaction: SendTransactionParams;
    withdrawOrUnlock: WithdrawOrUnlockParams;
    depositInDAO: DepositInDAOParams;
}

export type RemoveMnemonicType<T> = T extends { mnemonic: string[] } ? Omit<T, "mnemonic"> : T;

export type CKBSendArgs<MN extends CKBSendMethodsNames> = RemoveMnemonicType<CKBSendMethods[MN]>;

function useSendTransaction<MN extends CKBSendMethodsNames>(
    senderIndex: number,
    functionName: MN,
): UseMutationResult<void, unknown, RemoveMnemonicType<CKBSendMethods[MN]>, unknown> {
    const { serviceInstance, network } = useServiceInstance(senderIndex);
    const addUncommittedTransaction = useAddUncommittedTransaction();

    return useMutation(async (params: CKBSendArgs<MN>) => {
        const mnemonic = await WalletStorage.getMnemonic(senderIndex!);
        // @ts-ignore We ensure that the params are correct with the CKBSendArgs[MN] type
        const hash = await serviceInstance?.[functionName]({ ...params, mnemonic: mnemonic! } as any);
        if (hash) await addUncommittedTransaction(senderIndex, network, hash);
    });
}

export default useSendTransaction;
