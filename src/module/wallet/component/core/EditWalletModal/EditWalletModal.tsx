import { Col, createModal, ExposedBackdropProps, useToast } from "react-native-components";
import useWallet from "module/wallet/hook/useWallet";
import useEditWallet from "module/wallet/hook/useEditWallet";
import { EditWalletModalRoot } from "module/wallet/component/core/EditWalletModal/EditWalletModal.styles";
import TextField from "module/common/component/input/TextField/TextField";
import ColorPicker from "module/wallet/component/input/ColorPicker/ColorPicker";
import { useTheme } from "@peersyst/react-native-styled";
import { translate } from "locale";
import { WalletStorage } from "module/wallet/WalletStorage";

export interface EditWalletModalProps extends ExposedBackdropProps {
    index: number;
}

const EditWalletModal = createModal(({ index, closable = true, ...backdropProps }: EditWalletModalProps): JSX.Element => {
    const { name, colorIndex } = useWallet(index);
    const {
        setName,
        setColorIndex,
        reset,
        initialState: { name: initialName, colorIndex: initialColorIndex },
    } = useEditWallet(index);
    const { showToast } = useToast();
    const {
        palette: { wallet: walletColors },
    } = useTheme();

    const handleColorPicked = (color: string): void => {
        setColorIndex(walletColors.findIndex((c) => c === color));
    };

    const save = async () => {
        if (name !== initialName || colorIndex !== initialColorIndex) {
            await WalletStorage.editWallet(index, { name, colorIndex });
            showToast(translate("wallet_edited"), { type: "success" });
        }
    };

    return (
        <EditWalletModalRoot
            title={translate("edit_wallet")}
            onCancel={reset}
            saveEnabled={name !== ""}
            onSave={save}
            backdropOpacity={0.2}
            closable={name !== "" && closable}
            closeOnBackdropTap={false}
            {...backdropProps}
        >
            <Col gap="25%" style={{ marginVertical: 20 }}>
                <TextField
                    size="lg"
                    variant="underlined"
                    value={name}
                    onChange={setName}
                    style={{ input: { textAlign: "center" } }}
                    placeholder={translate("wallet_name")}
                />
                <ColorPicker value={walletColors[colorIndex]} onColorPicked={handleColorPicked} />
            </Col>
        </EditWalletModalRoot>
    );
});

export default EditWalletModal;
