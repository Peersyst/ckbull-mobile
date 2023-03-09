import { Col, Form, useSetTab } from "@peersyst/react-native-components";
import WalletSelector from "module/wallet/component/input/WalletSelector/WalletSelector";
import { WithdrawForm, WithdrawScreens, WithdrawSummary } from "module/dao/component/core/WithdrawModal/WithdrawModal";
import useGetDAOUnlockableAmounts from "module/dao/query/useGetDAOUnlockableAmounts";
import { Dispatch, SetStateAction, useState } from "react";
import useWalletState from "module/wallet/hook/useWalletState";
import { useRecoilValue } from "recoil";
import settingsState from "module/settings/state/SettingsState";
import DepositsSelector from "module/dao/component/input/DepositsSelector/DepositsSelector";
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

    const { data: unlockableDeposits = [], isLoading } = useGetDAOUnlockableAmounts(selectedWallet);

    const handleSubmit = (withdrawInfo: WithdrawForm) => {
        setWithdrawInfo({ ...withdrawInfo });
        setTab(WithdrawScreens.CONFIRMATION);
    };

    const hasDeposits = unlockableDeposits.length > 0;
    const unlockableDeposit = unlockableDeposits[selectedDeposit];

    return (
        <Form onSubmit={handleSubmit} style={{ flex: 1 }}>
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
                    loading={isLoading}
                    label={`${translate("select_deposit")}:`}
                    onChange={(deposit) => setSelectedDeposit(deposit)}
                    value={selectedDeposit}
                    name="depositIndex"
                    deposits={unlockableDeposits}
                    required
                    defaultValue={0}
                />
                <WithdrawFooter unlockableDeposit={unlockableDeposit} hasDeposits={hasDeposits} />
            </Col>
        </Form>
    );
};

export default SelectAccountAndDepositScreen;
