import { translate } from "locale";
import WalletsBackupModal from "module/wallet/component/core/WalletsBackupModal/WalletsBackupModal";
import SettingsMenuItem from "module/settings/components/navigation/SettingsMenuItem/SettingsMenuItem";
import { useModal } from "@peersyst/react-native-components";

const WalletsBackup = () => {
    const { showModal } = useModal();
    return <SettingsMenuItem text={translate("back_up_your_wallets")} onPress={() => showModal(WalletsBackupModal)} />;
};

export default WalletsBackup;
