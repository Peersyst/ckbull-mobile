/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SignInRequestDto } from './SignInRequestDto';
import type { TransactionDto } from './TransactionDto';
export type CompleteTransactionRequestDto = {
    id: number;
    transactionToken: string;
    status: 'pending' | 'signed' | 'expired' | 'declined';
    transaction: TransactionDto;
    createdAt: string;
    expiresAt: string;
    signInRequest: SignInRequestDto;
};

