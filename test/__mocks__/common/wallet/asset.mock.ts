import { AssetType } from "module/wallet/wallet.types";
import { NftTokenMock, TokenAmountMock } from "test-mocks";
import BaseMock from "../base.mock";

export interface AssetMockInterface {
    type: AssetType;
    nft?: NftTokenMock;
    ft?: TokenAmountMock;
}

export class AssetMock extends BaseMock implements AssetMockInterface {
    type: AssetType;
    nft?: NftTokenMock;
    ft?: TokenAmountMock;
    constructor({ type, nft, ft }: Partial<AssetMockInterface> = {}) {
        super();
        this.type = type || AssetType.NATIVE_TOKEN;
        this.nft = nft;
        this.ft = ft;
    }
}
