import { SignInRequestDto } from "module/api/service";
import { PartialDappDtoMock } from "./partial-dapp-dto.mock";
import { AccountMetadataDtoMock } from "./account-metadata-dto.mock";

export class SignInRequestDtoMock implements SignInRequestDto {
    id: number;
    signInToken: string;
    status: "pending" | "signed" | "declined" | "request_expired" | "session_expired";
    createdAt: string;
    expiresAt: string;
    sessionExpiresAt: string;
    metadata: AccountMetadataDtoMock;
    app: PartialDappDtoMock;

    constructor() {
        this.id = 0;
        this.signInToken = "signInToken";
        this.status = "pending";
        this.createdAt = "";
        this.expiresAt = "";
        this.sessionExpiresAt = "";
        this.metadata = new AccountMetadataDtoMock();
        this.app = new PartialDappDtoMock();
    }
}
