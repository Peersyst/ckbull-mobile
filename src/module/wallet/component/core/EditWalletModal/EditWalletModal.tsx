import { Col, createModal, ExposedBackdropProps, useToast } from "@peersyst/react-native-components";
import useEditWallet from "module/wallet/hook/useEditWallet";
import { EditWalletModalRoot } from "module/wallet/component/core/EditWalletModal/EditWalletModal.styles";
import TextField from "module/common/component/input/TextField/TextField";
import ColorPicker from "module/wallet/component/input/ColorPicker/ColorPicker";
import { useTheme } from "@peersyst/react-native-styled";
import { useTransition } from "react";
import { WalletStorage } from "module/wallet/WalletStorage";
import { useTranslate } from "module/common/hook/useTranslate";
import useSelectedWallet from "module/wallet/hook/useSelectedWallet";
import ModalHeader from "module/common/component/navigation/ModalHeader/ModalHeader";
import Button from "module/common/component/input/Button/Button";

const EditWalletModal = createModal<ExposedBackdropProps>(({ closable = true, close, ...backdropProps }): JSX.Element => {
    const translate = useTranslate();
    const { showToast } = useToast();
    const [, startTransition] = useTransition();

    const {
        palette: { wallet: walletColors },
    } = useTheme();

    const { name, colorIndex, index } = useSelectedWallet();
    const {
        setName,
        setColorIndex,
        reset,
        initialState: { name: initialName, colorIndex: initialColorIndex },
    } = useEditWallet(index);

    const handleColorPicked = (color: string): void => {
        setColorIndex(walletColors.findIndex((c) => c === color));
    };

    const handleClose = async (save: boolean) => {
        close();

        if (save) {
            if (name !== initialName || colorIndex !== initialColorIndex) {
                startTransition(() => {
                    WalletStorage.editWallet(index, { name, colorIndex });
                });
                showToast(translate("wallet_edited"), { type: "success" });
            }
        } else
            startTransition(() => {
                reset();
            });
    };

    return (
        <EditWalletModalRoot
            backdropOpacity={0.2}
            closable={name !== "" && closable}
            closeOnBackdropTap={false}
            onClose={() => handleClose(false)}
            {...backdropProps}
        >
            {{
                header: <ModalHeader title={translate("edit_wallet")} dismissal="close" onDismiss={() => handleClose(false)} />,
                body: (
                    <Col flex={1} justifyContent="space-between">
                        <Col gap={24}>
                            <TextField
                                size="lg"
                                value={name}
                                onChange={setName}
                                placeholder={translate("wallet_name")}
                                label={translate("wallet_name")}
                            />
                            <ColorPicker value={walletColors[colorIndex]} onChange={handleColorPicked} label={translate("wallet_color")} />
                        </Col>
                        <Button size="lg" fullWidth disabled={name === ""} onPress={() => handleClose(true)}>
                            {translate("save")}
                        </Button>
                    </Col>
                ),
            }}
        </EditWalletModalRoot>
    );
});

export default EditWalletModal;
