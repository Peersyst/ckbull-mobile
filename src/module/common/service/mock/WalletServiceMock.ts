import { CKBBalance, Transaction, Nft } from "module/common/service/mock/CkbServiceMock.types";
import { transactions } from "module/transaction/mock/transaction";
import { nfts } from "module/nft/mock/nft";
import { TokenAmount } from "module/token/types";
import { tokens } from "module/token/mock/token";

export class WalletServiceMock {
    async getCKBBalance(): Promise<CKBBalance> {
        const totalBalance = await new Promise<bigint>((resolve) =>
            setTimeout(() => resolve(BigInt(Math.trunc(Math.random() * 1234))), 2000),
        );
        return {
            totalBalance,
            occupiedBalance: totalBalance / BigInt(5),
            freeBalance: (BigInt(4) * totalBalance) / BigInt(5),
        };
    }

    async getTransactions(): Promise<Transaction[]> {
        return new Promise((resolve) => setTimeout(() => resolve(transactions), 2000));
    }

    async getNftsBalance(): Promise<Nft[]> {
        return new Promise((resolve) => setTimeout(() => resolve(nfts), 2000));
    }

    async getTokensBalance(): Promise<TokenAmount[]> {
        return new Promise((resolve) => setTimeout(() => resolve(tokens), 2000));
    }
}