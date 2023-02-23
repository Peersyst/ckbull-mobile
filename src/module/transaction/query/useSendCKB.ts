import useSendTransaction, { CKBSendMethodsNames } from "./useSendTransaction";

const useSendCKB = (senderIndex: number) => useSendTransaction(senderIndex, CKBSendMethodsNames.sendTransaction);

export default useSendCKB;
