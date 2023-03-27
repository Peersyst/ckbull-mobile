import { AccountMetadataDto } from "module/api/service";

export class AccountMetadataDtoMock implements AccountMetadataDto {
    address: string;
    network: "mainnet" | "testnet";

    constructor({ address = "address", network = "mainnet" }: Partial<AccountMetadataDto> = {}) {
        this.address = address;
        this.network = network;
    }
}
