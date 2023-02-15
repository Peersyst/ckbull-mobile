import BaseMock from "mocks/common/base.mock";
import { TokenAmount } from "module/token/types";

export const token: TokenAmount = {
    type: {
        apiId: "wrapped-bitcoin",
        name: "Wrapped BTC",
        description: "ForceBridge from BSC",
        tokenName: "BTC|bsc",
        decimals: 18,
        imageUri: "https://bitcoin.org/img/icons/opengraph.png?1644775669",
        args: "0x9ea7beb4a36469e00bb30dbac75e93672441b483d519556ba9d1424b9294eae5",
        codeHash: "0x5e7a36a77e68eecc013dfa2fe6a23f3b6c344b04005808694ae6dd45eea4cfd5",
        hashType: "type",
    },
    amount: 20 * 10 ** 18,
};

export class TokenAmountMock extends BaseMock implements TokenAmount {
    type: TokenAmount["type"];
    amount: TokenAmount["amount"];
    constructor({ type, amount }: Partial<TokenAmount> = {}) {
        super();
        this.type = type || token.type;
        this.amount = amount || token.amount;
    }
}
