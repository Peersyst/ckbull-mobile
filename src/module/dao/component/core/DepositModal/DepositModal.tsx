import { createBackdrop, ExposedBackdropProps, TabPanel, Tabs } from "@peersyst/react-native-components";
import { useState } from "react";
import CardNavigatorModal from "module/common/component/navigation/CardNavigatorModal/CardNavigatorModal";
import { useResetRecoilState } from "recoil";
import sendState from "module/transaction/state/SendState";
import DepositSelectAccountScreen from "module/dao/screen/DepositSelectAccountScreen/DepositSelectAccountScreen";
import DepositConfirmationScreen from "module/dao/screen/DepositConfirmationScreen/DepositConfirmationScreen";
import { useTranslate } from "module/common/hook/useTranslate";
import DepositSetAmountScreen from "module/dao/screen/DepositSetAmountScreen/DepositSetAmountScreen";

export enum DepositScreens {
    SELECT_ACCOUNT,
    AMOUNT_AND_MESSAGE,
    CONFIRMATION,
}

const DepositModal = createBackdrop(({ onExited, ...rest }: ExposedBackdropProps) => {
    const [activeIndex, setActiveIndex] = useState(DepositScreens.SELECT_ACCOUNT);
    const resetSendState = useResetRecoilState(sendState);
    const translate = useTranslate();
    const handleExited = () => {
        onExited?.();
        resetSendState();
    };

    function handleBack() {
        setActiveIndex((oldIndex) => oldIndex - 1);
    }

    return (
        <CardNavigatorModal
            navbar={{
                steps: { length: 3, index: activeIndex },
                back: true,
                title: translate("deposit"),
                onBack: activeIndex > 0 ? handleBack : undefined,
            }}
            onExited={handleExited}
            {...rest}
        >
            <Tabs index={activeIndex} onIndexChange={setActiveIndex}>
                <TabPanel index={DepositScreens.SELECT_ACCOUNT}>
                    <DepositSelectAccountScreen />
                </TabPanel>
                <TabPanel index={DepositScreens.AMOUNT_AND_MESSAGE}>
                    <DepositSetAmountScreen />
                </TabPanel>
                <TabPanel index={DepositScreens.CONFIRMATION}>
                    <DepositConfirmationScreen />
                </TabPanel>
            </Tabs>
        </CardNavigatorModal>
    );
});

export default DepositModal;
