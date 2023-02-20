import { useControlled } from "@peersyst/react-hooks";
import { TextFieldProps } from "@peersyst/react-native-components";
import { config } from "config";
import { useTranslate } from "module/common/hook/useTranslate";
import { BalanceOperations } from "module/common/utils/BalanceOperations/BalanceOperations";
import useGetBalance from "../query/useGetBalance";
import { Wallet } from "../state/WalletState";
import useWalletState from "./useWalletState";

export interface UseWalletSelectParams {
    defaultValue?: number;
    value?: number;
    onChange?: (value: number) => void;
    minAmount?: number | string | bigint;
}

export interface UseWalletSelectResult {
    wallets: Wallet[];
    selectedWallet: Wallet | undefined;
    selectedIndex: number | undefined;
    setWalletIndex: (i: number) => void;
    error: TextFieldProps["error"];
    hideError: boolean;
    isLoading: boolean;
}

export function useWalletSelect({
    defaultValue,
    value: valueParam,
    onChange: onChangeParam,
    minAmount,
}: UseWalletSelectParams = {}): UseWalletSelectResult {
    const {
        state: { wallets, selectedWallet: defaultAccount = 0 },
    } = useWalletState();
    const translateError = useTranslate("error");

    //Variables and functions for the useControlled hook
    const [selectedIndex, setSelectedIndex] = useControlled(
        (defaultValue as number) ?? defaultAccount,
        valueParam as number,
        onChangeParam,
    );
    const handleItemChange = (i: unknown) => {
        setSelectedIndex(i as number);
    };
    const selectedWallet = selectedIndex !== undefined ? wallets[selectedIndex] : undefined;

    //Get the balance from the selected wallet
    const { data: { freeBalance } = {}, isLoading } = useGetBalance(selectedIndex);
    const hasBalance = freeBalance !== undefined && BalanceOperations.gt(freeBalance, (minAmount ?? 0).toString());

    const validateError = minAmount !== undefined;
    const error: TextFieldProps["error"] = [
        !hasBalance,
        translateError("invalid_account_without_balance", { minAmount: minAmount, units: config.tokenName }),
    ];

    return {
        selectedWallet,
        selectedIndex,
        setWalletIndex: handleItemChange,
        error: validateError ? error : undefined,
        isLoading,
        hideError: isLoading,
        wallets,
    };
}
