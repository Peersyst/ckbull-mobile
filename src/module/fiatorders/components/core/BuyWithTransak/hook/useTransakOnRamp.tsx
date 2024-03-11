import { TransakOnRampWebViewProps } from "@peersyst/react-native-transak";
import useTransakOnRampQueryParams from "./useTransakOnRampQueryParams";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useMemo } from "react";

export default function useTrasakOnRamp(): TransakOnRampWebViewProps {
    const queryParams = useTransakOnRampQueryParams();
    const safeAreInstets = useSafeAreaInsets();

    return useMemo(() => ({ queryParams, style: { paddingBottom: safeAreInstets.bottom } }), [queryParams, safeAreInstets]);
}
