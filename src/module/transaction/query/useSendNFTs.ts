import useSendTransaction, { CKBSendMethodsNames } from "./useSendTransaction";

const useSendNFT = (senderIndex: number) => useSendTransaction(senderIndex, CKBSendMethodsNames.sendNft);

export default useSendNFT;
