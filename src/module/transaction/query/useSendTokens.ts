import useSendTransaction, { CKBSendMethodsNames } from "./useSendTransaction";

const useSendTokens = (senderIndex: number) => useSendTransaction(senderIndex, CKBSendMethodsNames.sendToken);

export default useSendTokens;
