import { useTranslate } from "module/common/hook/useTranslate";
import NftsList from "module/nft/component/core/NftsList/NftsList";
import TokensList from "module/token/component/core/TokensList/TokensList";
import TransactionsList from "module/transaction/component/core/TransactionsList/TransactionsList";
import AddWallet from "module/wallet/component/core/AddWallet/AddWallet";
import useWalletState from "module/wallet/hook/useWalletState";
import { ReactElement, useMemo } from "react";

const getHomeTabItem = (Component: ReactElement, isEmptyWallet: boolean) => {
    return isEmptyWallet ? <AddWallet /> : Component;
};

export function useGetHomeTabs() {
    const {
        state: { selectedWallet = 0, wallets },
    } = useWalletState();
    const isEmptyWallet = selectedWallet >= wallets.length;
    const translate = useTranslate();

    return useMemo(() => {
        return [
            {
                title: translate("transactions"),
                item: getHomeTabItem(<TransactionsList />, isEmptyWallet),
            },
            {
                title: translate("currencies"),
                item: getHomeTabItem(<TokensList />, isEmptyWallet),
            },
            {
                title: translate("nfts"),
                item: getHomeTabItem(<NftsList />, isEmptyWallet),
            },
        ];
    }, [isEmptyWallet, translate]);
}
