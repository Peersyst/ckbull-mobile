import { useLogoPageFlex } from "module/common/component/layout/LogoPage/LogoPageContext";
import { TabPanel, Tabs, useTabs } from "@peersyst/react-native-components";
import { useState } from "react";
import { AuthScreens } from "module/auth/AuthNavigatorGroup";
import SetWalletPinScreen from "module/wallet/screen/SetWalletPinScreen";
import WalletAdvisesScreen from "module/wallet/screen/WalletAdvisesScreen";
import WalletMnemonicScreen from "module/wallet/screen/WalletMnemonicScreen";
import PickWalletMnemonicScreen from "module/wallet/screen/PickWalletMnemonicScreen/PickWalletMnemonicScreen";
import CreateWalletSuccessScreen from "module/wallet/screen/CreateWalletSuccessScreen";
import { useBackHandler } from "@react-native-community/hooks";
import CardNavigatorModal from "module/common/component/navigation/CardNavigatorModal/CardNavigatorModal";
import { useResetRecoilState } from "recoil";
import createWalletState from "module/wallet/state/CreateWalletState";
import { useTranslate } from "module/common/hook/useTranslate";
import LightThemeProvider from "module/common/component/util/ThemeProvider/LightThemeProvider";
import DarkThemeProvider from "module/common/component/util/ThemeProvider/DarkThemeProvider";
import SetWalletNameScreen from "../screen/SetWalletNameScreen";

export enum CreateWalletScreens {
    SET_WALLET_NAME,
    WALLET_ADVISES,
    WALLET_MNEMONIC,
    PICK_WALLET_MNEMONIC,
    SET_WALLET_PIN,
    CREATE_WALLET_SUCCESS,
}

const CreateWalletNavigatorGroup = () => {
    const translate = useTranslate();
    const [activeTab, setActiveTab] = useState(0);
    const setTab = useTabs()[1];
    const [showModal, setShowModal] = useState(true);
    const [showPin, setShowPin] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    useLogoPageFlex(showSuccess ? 1 : 0.4);
    useBackHandler(() => {
        handleBack();
        return true;
    });
    const resetCreateWalletState = useResetRecoilState(createWalletState);

    const handleBack = () => {
        if (activeTab === CreateWalletScreens.SET_WALLET_NAME) {
            setShowModal(false);
        } else if (activeTab >= 0) setActiveTab((t) => t - 1);
    };

    const handleTabChange = (t: number) => {
        if (t === CreateWalletScreens.SET_WALLET_NAME) {
            setShowPin(false);
            setShowModal(true);
            setActiveTab(t);
        } else if (t === CreateWalletScreens.SET_WALLET_PIN) {
            setShowPin(true);
            setShowModal(false);
        } else if (t === CreateWalletScreens.WALLET_ADVISES || t === CreateWalletScreens.PICK_WALLET_MNEMONIC) {
            setShowPin(false);
            setShowModal(true);
            setActiveTab(t);
        } else if (t === CreateWalletScreens.CREATE_WALLET_SUCCESS) {
            setShowPin(false);
            setShowModal(false);
            setShowSuccess(true);
            setActiveTab(t);
        } else setActiveTab(t);
    };

    const handleCardExit = () => {
        if (showPin) setActiveTab(CreateWalletScreens.SET_WALLET_PIN);
        else if (showSuccess) setActiveTab(CreateWalletScreens.CREATE_WALLET_SUCCESS);
        else {
            resetCreateWalletState();
            setTab(AuthScreens.AUTH_SWITCH);
        }
    };

    return (
        <Tabs index={activeTab} onIndexChange={handleTabChange}>
            <LightThemeProvider>
                <CardNavigatorModal
                    onClose={() => setShowModal(false)}
                    open={showModal}
                    onExited={handleCardExit}
                    navbar={{ back: true, title: translate("create_wallet"), onBack: handleBack, steps: { index: activeTab, length: 4 } }}
                    renderBackdrop={false}
                >
                    <TabPanel index={CreateWalletScreens.SET_WALLET_NAME}>
                        <SetWalletNameScreen
                            onSubmit={() => handleTabChange(CreateWalletScreens.SET_WALLET_PIN)}
                            submitText={translate("set_pin")}
                        />
                    </TabPanel>
                    <TabPanel index={CreateWalletScreens.WALLET_ADVISES}>
                        <WalletAdvisesScreen
                            onNextScreen={() => handleTabChange(CreateWalletScreens.WALLET_MNEMONIC)}
                            nextScreenText={translate("generate_mnemonic")}
                        />
                    </TabPanel>
                    <TabPanel index={CreateWalletScreens.WALLET_MNEMONIC}>
                        <WalletMnemonicScreen onNextScreen={() => handleTabChange(CreateWalletScreens.PICK_WALLET_MNEMONIC)} />
                    </TabPanel>
                    <TabPanel index={CreateWalletScreens.PICK_WALLET_MNEMONIC}>
                        <PickWalletMnemonicScreen onSubmit={() => handleTabChange(CreateWalletScreens.CREATE_WALLET_SUCCESS)} />
                    </TabPanel>
                </CardNavigatorModal>
            </LightThemeProvider>
            <DarkThemeProvider>
                <TabPanel index={CreateWalletScreens.SET_WALLET_PIN}>
                    <SetWalletPinScreen
                        onSuccess={() => handleTabChange(CreateWalletScreens.WALLET_ADVISES)}
                        onCancel={() => handleTabChange(CreateWalletScreens.SET_WALLET_NAME)}
                    />
                </TabPanel>
                <TabPanel index={CreateWalletScreens.CREATE_WALLET_SUCCESS}>
                    <CreateWalletSuccessScreen />
                </TabPanel>
            </DarkThemeProvider>
        </Tabs>
    );
};

export default CreateWalletNavigatorGroup;
