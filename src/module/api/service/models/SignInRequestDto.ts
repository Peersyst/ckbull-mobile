/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountMetadataDto } from './AccountMetadataDto';
import type { PartialDappDto } from './PartialDappDto';
export type SignInRequestDto = {
    id: number;
    signInToken: string;
    status: 'pending' | 'signed' | 'declined' | 'request_expired' | 'session_expired';
    createdAt: string;
    expiresAt: string;
    sessionExpiresAt: string;
    metadata: AccountMetadataDto;
    app: PartialDappDto;
};

