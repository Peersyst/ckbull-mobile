import { BaseValidator } from "@peersyst/react-native-components";
import { TranslateFn } from "@peersyst/react-native-components";
import config from "config/config";
import { BalanceOperations } from "module/common/utils/BalanceOperations/BalanceOperations";
import { BNToNumber } from "module/common/utils/BalanceOperations/utils/BNtoNumber";

export interface MinAmountFromDecimalsValidatorOptions {
    decimals?: string | number;
}

export class MinAmountFromDecimalsValidator extends BaseValidator {
    decimals: string;
    minAmount: string;

    constructor(
        message: string | undefined,
        translate: TranslateFn,
        { decimals = config.defaultDecimals }: MinAmountFromDecimalsValidatorOptions = {},
    ) {
        super(message || translate("invalid_number_gte", { n: "1e-" + decimals }));
        this.decimals = decimals.toString();
        this.minAmount = BNToNumber(1, this.decimals);
    }

    validate(value: string): boolean {
        return BalanceOperations.gte(value, this.minAmount, this.decimals);
    }
}
