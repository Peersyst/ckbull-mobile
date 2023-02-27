import { useTranslate } from "module/common/hook/useTranslate";
import DAOCompletedWithdrawalsList from "module/dao/component/core/DAOCompletedWithdrawalsList/DAOCompletedWithdrawalsList";
import DAODepositsList from "module/dao/component/core/DAODepositsList/DAODepositsList";
import AddWallet from "module/wallet/component/core/AddWallet/AddWallet";
import useWalletState from "module/wallet/hook/useWalletState";
import { ReactElement, useMemo } from "react";

const getDAOTabItem = (Component: ReactElement, isEmptyWallet: boolean) => {
    return isEmptyWallet ? <AddWallet /> : Component;
};

export function useGetDAOTabs() {
    const {
        state: { selectedWallet = 0, wallets },
    } = useWalletState();
    const isEmptyWallet = selectedWallet >= wallets.length;
    const translate = useTranslate();

    return useMemo(() => {
        return [
            {
                title: translate("deposits"),
                item: getDAOTabItem(<DAODepositsList />, isEmptyWallet),
            },
            {
                title: translate("withdrawals"),
                item: getDAOTabItem(<DAOCompletedWithdrawalsList />, isEmptyWallet),
            },
        ];
    }, [isEmptyWallet]);
}
