import { useModal } from "react-native-components";
import SettingsMenuItem from "module/settings/components/navigation/SettingsMenuItem/SettingsMenuItem";
import { translate } from "locale";
import useSelectedNetwork from "module/settings/hook/useSelectedNetwork";
import ChangeNodeModal from "module/settings/components/core/ChangeNodeModal/ChangeNodeModal";

const ChangeNode = () => {
    const network = useSelectedNetwork();
    const { showModal } = useModal();
    return <SettingsMenuItem text={translate("change_node", { network: translate(network) })} onPress={() => showModal(ChangeNodeModal)} />;
};

export default ChangeNode;
