import { SignInRequestsService } from "module/api/service";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import { useMutation, useQueryClient } from "react-query";
import Queries from "../../../query/queries";
import { useToast } from "@peersyst/react-native-components";
import { useTranslate } from "module/common/hook/useTranslate";

export default function useDisconnectDApp() {
    const { serviceInstance, network, index: usedIndex } = useServiceInstance();
    const queryClient = useQueryClient();
    const { showToast } = useToast();
    const translate = useTranslate();

    return useMutation(
        (dAppId: number) =>
            SignInRequestsService.disconnect({
                dAppId,
                accountMetadata: {
                    address: serviceInstance?.getAddress(),
                    network,
                },
            }),
        {
            onSuccess: async () => {
                await queryClient.invalidateQueries([Queries.SIGNER_APP_GET_CONNECTED_DAPPS, usedIndex, network]);
                await queryClient.invalidateQueries([Queries.SIGNER_APP_GET_PENDING_TRANSACTIONS, usedIndex, network]);
                showToast(translate("dAppDisconnected"), { type: "success" });
            },
        },
    );
}
