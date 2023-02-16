import { BaseValidator } from "@peersyst/react-native-components";
import { TranslateFn } from "@peersyst/react-native-components";
import config from "config/config";
import { BalanceOperations } from "module/common/utils/BalanceOperations/BalanceOperations";

export interface MinAmountValidatorOptions {
    minAmount: string;
    decimals?: string | number;
}

export class MinAmountValidator extends BaseValidator {
    minAmount: string;
    decimals: string;

    constructor(
        message: string | undefined,
        translate: TranslateFn,
        { minAmount, decimals = config.defaultDecimals }: MinAmountValidatorOptions,
    ) {
        super(message || translate("invalid_min_amount", { minAmount }));
        this.minAmount = minAmount;
        this.decimals = decimals.toString();
    }

    validate(value: string): boolean {
        return BalanceOperations.gte(value, this.minAmount, this.decimals);
    }
}
