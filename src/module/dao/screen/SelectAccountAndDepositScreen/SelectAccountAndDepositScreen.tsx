import { Col, Form, useSetTab, Suspense } from "@peersyst/react-native-components";
import WalletSelector from "module/wallet/component/input/WalletSelector/WalletSelector";
import { WithdrawForm, WithdrawScreens, WithdrawSummary } from "module/dao/component/core/WithdrawModal/WithdrawModal";
import useGetDAOUnlockableAmounts from "module/dao/query/useGetDAOUnlockableAmounts";
import { Dispatch, SetStateAction, useState } from "react";
import useWalletState from "module/wallet/hook/useWalletState";
import { useRecoilValue } from "recoil";
import settingsState from "module/settings/state/SettingsState";
import DepositsSelector from "module/dao/component/input/DepositsSelector/DepositsSelector";
import CenteredLoader from "module/common/component/feedback/CenteredLoader/CenteredLoader";
import useGetBalance from "module/wallet/query/useGetBalance";
import WithdrawFooter from "./WithdrawFooter";
import { useTranslate } from "module/common/hook/useTranslate";
import { Wallet } from "module/wallet/state/WalletState";
import { convertShannonsToCKB } from "module/wallet/utils/convertShannonsToCKB";

interface WithdrawSelectAccountScreenProps {
    setWithdrawInfo: Dispatch<SetStateAction<WithdrawSummary>>;
}

function getDefaultSelectedWallet(wallets: Wallet[], defaultSelectedWallet?: number) {
    //Check if the user has a previous selectedWallet
    return defaultSelectedWallet !== undefined
        ? //Check that the selected wallet is not the CreateWallet
          defaultSelectedWallet === wallets.length
            ? defaultSelectedWallet - 1
            : defaultSelectedWallet
        : 0;
}

const SelectAccountAndDepositScreen = ({ setWithdrawInfo }: WithdrawSelectAccountScreenProps) => {
    //Hooks
    const translate = useTranslate();
    const setTab = useSetTab();
    const { fee: feeInShannons } = useRecoilValue(settingsState);
    const feeInCKB = convertShannonsToCKB(feeInShannons);
    const {
        state: { selectedWallet: defaultSelectedWallet, wallets },
    } = useWalletState();
    const finalSelectedWallet = getDefaultSelectedWallet(wallets, defaultSelectedWallet);

    const [selectedWallet, setSelectedWallet] = useState<number>(finalSelectedWallet);
    const [selectedDeposit, setSelectedDeposit] = useState<number>(0);

    const { data: unlockableDeposits = [], isLoading: depositsIsLoading } = useGetDAOUnlockableAmounts(selectedWallet);
    const { isLoading: balanceLoading } = useGetBalance(selectedWallet);

    const handleSubmit = (withdrawInfo: WithdrawForm) => {
        setWithdrawInfo({ ...withdrawInfo, feeRate: feeInShannons });
        setTab(WithdrawScreens.CONFIRMATION);
    };

    const isLoading = depositsIsLoading || balanceLoading;

    return (
        <Col style={{ minHeight: 300 }} flex={1}>
            <Suspense isLoading={depositsIsLoading || balanceLoading} fallback={<CenteredLoader />}>
                <Form onSubmit={handleSubmit}>
                    <Col gap={20}>
                        <WalletSelector
                            minAmount={feeInCKB}
                            label={translate("select_a_wallet") + ":"}
                            onChange={(index) => setSelectedWallet(index as number)}
                            required
                            name="receiverIndex"
                            value={selectedWallet}
                        />
                        <DepositsSelector
                            label={`${translate("select_deposit")}:`}
                            onChange={(deposit) => setSelectedDeposit(deposit)}
                            value={selectedDeposit}
                            name="depositIndex"
                            deposits={unlockableDeposits}
                            required
                            defaultValue={0}
                        />
                        <WithdrawFooter unlockableDeposits={unlockableDeposits} selectedDeposit={selectedDeposit} />
                    </Col>
                </Form>
            </Suspense>
        </Col>
    );
};

export default SelectAccountAndDepositScreen;
