import { Dialog, ExposedBackdropProps } from "react-native-components";
import { translate } from "locale";
import { NetworkType } from "module/settings/state/SettingsState";
import { useControlled } from "@peersyst/react-hooks";

export interface AltNetworkDialogProps extends ExposedBackdropProps {
    detectedNetwork: NetworkType;
    onNetworkChange: (network: NetworkType) => any;
}

const AltNetworkDialog = ({ open: openProp, onClose, detectedNetwork, onNetworkChange, ...rest }: AltNetworkDialogProps): JSX.Element => {
    const [open, setOpen] = useControlled(true, openProp, openProp ? onClose : undefined);

    const handleNetworkChange = () => {
        onNetworkChange(detectedNetwork);
        setOpen(false);
    };

    return (
        <Dialog
            title={translate("network_detected", { network: translate(detectedNetwork) })}
            message={translate("network_detected_text", { network: translate(detectedNetwork) })}
            buttons={[
                { type: "default", text: translate("cancel") },
                { type: "positive", text: translate("change"), onPress: handleNetworkChange },
            ]}
            open={open}
            onClose={() => setOpen(false)}
            {...rest}
        />
    );
};

export default AltNetworkDialog;
