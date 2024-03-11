import { TabPanel, Tabs } from "@peersyst/react-native-components";
import CardNavigatorModal from "module/common/component/navigation/CardNavigatorModal/CardNavigatorModal";
import LightThemeProvider from "module/common/component/util/ThemeProvider/LightThemeProvider";
import { FiatOrderModalProps, FiatOrderModalTabs } from "./FiatOrderModal.types";
import useFiatOrderModal from "./hook/useFiatOrderModal";

function FiatOrderModal({ title, success, order, ...props }: FiatOrderModalProps): JSX.Element {
    const { tab, setTab, modalProps } = useFiatOrderModal(title);

    return (
        <LightThemeProvider>
            <CardNavigatorModal {...modalProps} {...props}>
                <Tabs index={tab} onIndexChange={setTab}>
                    <TabPanel index={FiatOrderModalTabs.NEW_ORDER}>{order}</TabPanel>
                    <TabPanel index={FiatOrderModalTabs.SUCCESS}>{success}</TabPanel>
                </Tabs>
            </CardNavigatorModal>
        </LightThemeProvider>
    );
}

export default FiatOrderModal;
