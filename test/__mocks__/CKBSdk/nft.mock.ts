import BaseMock from "mocks/common/base.mock";
import { Nft, NftScript } from "ckb-peersyst-sdk";

export interface NftTokenMetadata {
    description: string;
}

export class NftTokenMetadataMock extends BaseMock {
    description: string;
    constructor({ description }: Partial<NftTokenMetadata> = {}) {
        super();
        this.description = description || "description";
    }
}

export class NftTokenMock extends BaseMock implements Nft {
    tokenId: string;
    data: any;
    nftName: string;
    tokenUri: string;
    rawData: string;
    script: NftScript;
    constructor({ tokenId, data, nftName, tokenUri, rawData, script }: Partial<Nft> = {}) {
        super();
        this.tokenId = tokenId || "tokenId";
        this.data = data || new NftTokenMetadataMock();
        this.nftName = nftName || "nftName";
        this.tokenUri = tokenUri || "tokenUri";
        this.rawData = rawData || "rawData";
        this.script = script || { args: "args", codeHash: "codeHash", hashType: "data" };
    }
}

export interface NftTokensMockParmas {
    nfts: NftTokenMock[];
    length: number;
}

export class NftTokensMock extends BaseMock {
    nfts: NftTokenMock[];
    constructor({ length = 1, nfts }: Partial<NftTokensMockParmas> = {}) {
        super();
        this.nfts = nfts || new Array(length).fill(0).map(() => new NftTokenMock());
    }
}
