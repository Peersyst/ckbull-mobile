import { useConfig, useTheme } from "@peersyst/react-native-components";
import { SupportedPaymentMethods, TransakEnviroment, TransakOnRampQueryParams } from "@peersyst/react-native-transak";
import useWalletAddress from "module/wallet/hook/useWalletAddress";
import { Platform } from "react-native";

export default function useTransakOnRampQueryParams(): TransakOnRampQueryParams {
    const address = useWalletAddress();
    const { palette } = useTheme();
    const transakConfig = useConfig("transak");

    return {
        ...transakConfig,
        environment: transakConfig.environment as TransakEnviroment,
        walletAddress: address,
        themeColor: palette.primary.replace("#", ""),
        ...(Platform.OS !== "ios" && { disablePaymentMethods: SupportedPaymentMethods.APPLE_PAY }),
    };
}
