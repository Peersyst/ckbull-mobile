import { TransactionType } from "ckb-peersyst-sdk";
import { ReceiveIcon, SendIcon } from "icons";
import { JSXElementConstructor } from "react";

interface TxIcon {
    Icon: JSXElementConstructor<any>;
    active: boolean;
}

export const TX_ICON: Partial<Record<TransactionType, TxIcon>> = {
    [TransactionType.SEND_NATIVE_TOKEN]: {
        Icon: SendIcon,
        active: false,
    },
    [TransactionType.RECEIVE_NATIVE_TOKEN]: {
        Icon: ReceiveIcon,
        active: true,
    },
    [TransactionType.DEPOSIT_DAO]: {
        Icon: SendIcon,
        active: false,
    },
    [TransactionType.UNLOCK_DAO]: {
        Icon: ReceiveIcon,
        active: false,
    },
    [TransactionType.WITHDRAW_DAO]: {
        Icon: ReceiveIcon,
        active: true,
    },
};
