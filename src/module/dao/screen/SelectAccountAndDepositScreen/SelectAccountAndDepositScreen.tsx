import { Col, Form, useSetTab } from "react-native-components";
import FormGroup from "module/common/component/input/FormGroup/FormGroup";
import { translate } from "locale";
import WalletSelector from "module/wallet/component/input/WalletSelector/WalletSelector";
import { WithdrawForm, WithdrawScreens, WithdrawSummary } from "module/dao/component/core/WithdrawModal/WithdrawModal";
import useGetDAOUnlockableAmounts from "module/dao/query/useGetDAOUnlockableAmounts";
import { ErrorMessageText, WithdrawSelectorCard } from "./SelectAccountAndDepositScreen.styles";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import useWalletState from "module/wallet/hook/useWalletState";
import ControlledSuspense from "module/common/component/base/feedback/ControlledSuspense/ControlledSuspense";
import { useRecoilValue } from "recoil";
import settingsState from "module/settings/state/SettingsState";
import DepositsSelector from "module/dao/component/input/DepositsSelector/DepositsSelector";
import CenteredLoader from "module/common/component/feedback/CenteredLoader/CenteredLoader";
import useGetBalance from "module/wallet/query/useGetBalance";
import { convertMiniToCKB } from "module/wallet/utils/convertMiniToCKB";
import WithdrawButton from "./WithdrawButton";

interface WithdrawSelectAccountScreenProps {
    setWithdrawInfo: Dispatch<SetStateAction<WithdrawSummary>>;
}

const SelectAccountAndDepositScreen = ({ setWithdrawInfo }: WithdrawSelectAccountScreenProps) => {
    //Hooks
    const setTab = useSetTab();
    const { fee } = useRecoilValue(settingsState);
    const {
        state: { selectedWallet: defaultSelectedWallet, wallets },
    } = useWalletState();
    const finalSelectedWallet =
        //Check if the user has a previous selectedWallet
        defaultSelectedWallet !== undefined
            ? //Check that the selected wallet is not the CreateWallet
              defaultSelectedWallet === wallets.length
                ? defaultSelectedWallet - 1
                : defaultSelectedWallet
            : 0;
    const [selectedWallet, setSelectedWallet] = useState<number>(finalSelectedWallet);
    const [selectedDeposit, setSelectedDeposit] = useState<number>(0);
    const [isFirstTime, setIsFirstTime] = useState<boolean>(true);
    const { data: unlockableDeposits = [], isLoading: depositsIsLoading } = useGetDAOUnlockableAmounts(selectedWallet);
    const { data: { freeBalance } = {}, isLoading: balanceLoading } = useGetBalance(selectedWallet);
    const [errMsg, setErrMsg] = useState<string>();

    useEffect(() => {
        if (isFirstTime && !depositsIsLoading) {
            setIsFirstTime(false);
        }
    }, [depositsIsLoading]);

    useEffect(() => {
        if (freeBalance === undefined) return;
        if (freeBalance < convertMiniToCKB(fee)) {
            setErrMsg(
                translate("not_enough_balance_for_fees") +
                    ".\n" +
                    translate("transaction_fee", { fee: convertMiniToCKB(fee).toString() || "-" }),
            );
        } else setErrMsg(undefined);
    }, [selectedWallet]);

    //Functions
    const handleSubmit = (withdrawInfo: WithdrawForm) => {
        setWithdrawInfo({ ...withdrawInfo, feeRate: fee });
        setTab(WithdrawScreens.CONFIRMATION);
    };

    return (
        <ControlledSuspense isLoading={(isFirstTime && depositsIsLoading) || balanceLoading} fallback={<CenteredLoader color="black" />}>
            <Form onSubmit={handleSubmit}>
                <Col>
                    <Col gap={20}>
                        <WithdrawSelectorCard style={{ marginTop: 5 }}>
                            <FormGroup label={translate("select_a_wallet") + ":"}>
                                <WalletSelector
                                    onChange={(index) => setSelectedWallet(index as number)}
                                    required
                                    name="receiverIndex"
                                    value={selectedWallet}
                                />
                            </FormGroup>
                        </WithdrawSelectorCard>
                        <WithdrawSelectorCard>
                            <FormGroup label={`${translate("select_deposit")}:`} style={{ height: 80 }}>
                                <ControlledSuspense isLoading={depositsIsLoading} activityIndicatorSize={"large"}>
                                    <DepositsSelector
                                        onChange={(deposit) => setSelectedDeposit(deposit as number)}
                                        value={selectedDeposit}
                                        name="depositIndex"
                                        deposits={unlockableDeposits}
                                        required
                                        defaultValue={0}
                                    />
                                </ControlledSuspense>
                            </FormGroup>
                        </WithdrawSelectorCard>
                        <WithdrawButton
                            unlockableDeposits={unlockableDeposits}
                            buttonLoading={balanceLoading || depositsIsLoading}
                            selectedDeposit={selectedDeposit}
                            errMsg={errMsg}
                        />
                        {errMsg && (
                            <ErrorMessageText variant="body2" fontWeight="bold" textAlign="center">
                                {errMsg}
                            </ErrorMessageText>
                        )}
                    </Col>
                </Col>
            </Form>
        </ControlledSuspense>
    );
};

export default SelectAccountAndDepositScreen;
