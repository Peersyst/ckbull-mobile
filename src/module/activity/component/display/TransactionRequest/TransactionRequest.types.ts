import { TransactionRequestDto } from "module/activity/dto/dtos";

export interface TransactionRequestRootProps {
    type: TransactionRequestDto["transaction"]["type"];
    status: TransactionRequestDto["status"];
}
