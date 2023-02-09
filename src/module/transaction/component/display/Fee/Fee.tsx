import { Typography, TypographyProps } from "@peersyst/react-native-components";
import { config } from "config";
import { TypographyVariant } from "config/theme/typography";
import { useTranslate } from "module/common/hook/useTranslate";
import Balance from "module/wallet/component/display/Balance/Balance";

export interface FeeProps extends Omit<TypographyProps, "variant"> {
    typographyVariant: TypographyVariant;
    fee?: string;
}

const Fee = ({ typographyVariant, fee, ...rest }: FeeProps) => {
    const translate = useTranslate();
    const feeDecimals = fee?.split(".")[1]?.length;
    return (
        <Typography variant={`${typographyVariant}Regular`} light textAlign="center" {...rest}>
            {translate("transaction_fee_label")}
            {" · "}
            <Balance
                balance={fee ?? config.minimumTransactionAmount}
                variant={`${typographyVariant}Strong`}
                units="token"
                light
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
