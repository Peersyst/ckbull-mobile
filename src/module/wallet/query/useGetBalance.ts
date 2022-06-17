import { useQuery } from "react-query";
import { serviceInstancesMap } from "module/wallet/state/WalletState";
import useSelectedWalletIndex from "module/wallet/hook/useSelectedWalletIndex";
import useSelectedNetwork from "module/settings/hook/useSelectedNetwork";

const useGetBalance = (index?: number) => {
    const network = useSelectedNetwork();
    const selectedWallet = useSelectedWalletIndex();
    const usedIndex = index ?? selectedWallet;
    return useQuery(["balance", usedIndex, network], () => serviceInstancesMap.get(usedIndex)?.[network]?.getCKBBalance(), {
        refetchInterval: 10000,
    });
};

export default useGetBalance;
