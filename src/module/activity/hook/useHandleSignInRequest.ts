import useSignSignInRequest from "module/activity/queries/useSignSignInRequest";
import useRejectSignInRequest from "module/activity/queries/useRejectSignInRequest";
import { useEffect, useState } from "react";
import { SignedSignInRequest } from "module/api/service";

interface UseHandleSignInRequestReturn {
    sign: (request: SignedSignInRequest) => void;
    decline: () => void;
    loading: boolean;
}

export interface UseHandleSignInRequestOptions {
    onSuccess?: () => void;
    onError?: () => void;
}

interface UseHandleSignInRequestProps {
    signInToken: string;
    options: UseHandleSignInRequestOptions;
}

export default function useHandleSignInRequest({ signInToken, options }: UseHandleSignInRequestProps): UseHandleSignInRequestReturn {
    const [loading, setLoading] = useState(false);

    const { mutate: signRequest, isLoading: isSigning } = useSignSignInRequest(signInToken, options);
    const { mutate: declineRequest, isLoading: isDeclining } = useRejectSignInRequest(signInToken, options);

    useEffect(() => {
        setLoading(isSigning || isDeclining);
    }, [isSigning, isDeclining]);

    return {
        sign: signRequest,
        decline: declineRequest,
        loading,
    };
}
