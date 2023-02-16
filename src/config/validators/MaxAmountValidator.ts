import { BaseValidator } from "@peersyst/react-native-components";
import { TranslateFn } from "@peersyst/react-native-components";
import config from "config/config";
import { BalanceOperations } from "module/common/utils/BalanceOperations/BalanceOperations";

export interface MaxAmountValidatorOptions {
    maxAmount: string;
    decimals?: string | number;
}

export class MaxAmountValidator extends BaseValidator {
    maxAmount: string;
    decimals: string;

    constructor(
        message: string | undefined,
        translate: TranslateFn,
        { maxAmount, decimals = config.defaultDecimals }: MaxAmountValidatorOptions,
    ) {
        super(message || translate("invalid_max_amount", { maxAmount }));
        this.maxAmount = maxAmount;
        this.decimals = decimals.toString();
    }

    validate(value: string): boolean {
        return !BalanceOperations.gt(value, this.maxAmount, this.decimals);
    }
}
