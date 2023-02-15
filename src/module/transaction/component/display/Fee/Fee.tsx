import { Typography, TypographyProps } from "@peersyst/react-native-components";
import { config } from "config";
import { TypographyVariant } from "config/theme/typography";
import { useTranslate } from "module/common/hook/useTranslate";
import { BNToNumber } from "module/common/utils/BalanceOperations/utils/BNtoNumber";
import settingsState from "module/settings/state/SettingsState";
import Balance from "module/wallet/component/display/Balance/Balance";
import { useRecoilState, useRecoilValue } from "recoil";

export interface FeeProps extends Omit<TypographyProps, "variant"> {
    typographyVariant: TypographyVariant;
    fee?: string;
}

const Fee = ({ typographyVariant, fee: feeProp, ...rest }: FeeProps) => {
    const translate = useTranslate();
    const { fee } = useRecoilValue(settingsState);

    const finalFee = (feeProp ?? BNToNumber(fee.toString(), config.defaultDecimals)).toString();
    const feeDecimals = finalFee.split(".")[1]?.length;

    return (
        <Typography variant={`${typographyVariant}Light`} light textAlign="center" {...rest}>
            {translate("transaction_fee_label")}
            {" · "}
            <Balance
                balance={finalFee}
                variant={`${typographyVariant}Regular`}
                units="token"
                color="gray.700"
                options={{
                    ...(feeDecimals !== undefined && {
                        maximumFractionDigits: feeDecimals,
                        minimumFractionDigits: feeDecimals,
                    }),
                }}
                {...rest}
            />
        </Typography>
    );
};

export default Fee;
