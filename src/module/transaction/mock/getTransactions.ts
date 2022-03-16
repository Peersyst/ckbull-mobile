import { Transaction } from "@peersyst/ckb-peersyst-sdk";
import { transactions } from "module/transaction/mock/transaction";

//eslint-disable-next-line @typescript-eslint/no-unused-vars
const getTransactions = (address: string): Promise<Transaction[]> =>
    new Promise((resolve) => setTimeout(() => resolve(transactions), 2000));

export default getTransactions;
