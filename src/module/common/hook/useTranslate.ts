import { FallbackNs, useTranslation, UseTranslationOptions, UseTranslationResponse } from "react-i18next";
import { FlatNamespace, KeyPrefix } from "i18next";
import { $Tuple } from "react-i18next/helpers";

export function useTranslate<
    N extends FlatNamespace | $Tuple<FlatNamespace> | undefined = undefined,
    TKPrefix extends KeyPrefix<FallbackNs<N>> = undefined,
>(ns?: N | Readonly<N>, options?: UseTranslationOptions<TKPrefix>): UseTranslationResponse<FallbackNs<N>, TKPrefix>["t"] {
    return useTranslation<N, TKPrefix>(ns, options).t;
}
