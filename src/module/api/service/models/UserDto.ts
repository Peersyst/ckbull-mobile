/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserDto = {
    id: number;
    name: string;
    email: string;
    type: 'admin' | 'user';
    googleAuth: boolean;
};
