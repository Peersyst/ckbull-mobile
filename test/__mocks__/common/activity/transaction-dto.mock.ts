import { TransactionDto } from "module/api/service";

const inputOrOutputContent = {
    data: "0x",
    cell_output: {
        lock: {
            args: "0xc1dcd2f276d4821d71464a485a1ab26220c05f26",
            code_hash: "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8",
            hash_type: "type",
        },
        capacity: "0x1718c7e00",
    },
};

const mockedTransaction = {
    inputs: [inputOrOutputContent],
    outputs: [inputOrOutputContent],
};

export const mockedAddress = "ckt1qzda0cr08m85hc8jlnfp3zer7xulejywt49kt2rr0vthywaa50xwsqwpmnf0yak5sgwhz3j2fpdp4vnzyrq97fsthdl97";

export class TransactionDtoMock implements TransactionDto {
    transactionHash: string;
    id: number;
    transaction: object;

    constructor() {
        this.transactionHash = "";
        this.id = 0;
        this.transaction = mockedTransaction;
    }
}
