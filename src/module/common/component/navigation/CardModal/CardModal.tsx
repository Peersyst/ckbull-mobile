import { ReactNode, useState } from "react";
import { Keyboard, LayoutChangeEvent, ViewStyle } from "react-native";
import { CardModalBodyWrapper, CardModalContent, CardModalWrapper } from "./CardModal.styles";
import { Backdrop, ExposedBackdropProps } from "@peersyst/react-native-components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDimensions } from "@react-native-community/hooks";

export interface CardModalChildren {
    header: ReactNode;
    body: ReactNode;
}

export interface CardModalProps extends ExposedBackdropProps {
    children: ((open: boolean, setOpen: (value: boolean) => unknown) => CardModalChildren) | CardModalChildren;
    style?: ViewStyle;
}

const CardModal = ({ children, style, open, closable = true, onClose, ...backdropProps }: CardModalProps): JSX.Element => {
    const [keyboardPaddingEnabled, setKeyboardPaddingEnabled] = useState(false);
    const {
        screen: { height },
    } = useDimensions();

    const handleLayout = (e: LayoutChangeEvent) => {
        setKeyboardPaddingEnabled(e.nativeEvent.layout.height < height * 0.65);
    };

    const handleOnClose = () => {
        Keyboard.dismiss();
        onClose?.();
    };

    return (
        <Backdrop closable={closable} onClose={handleOnClose} open={open} {...backdropProps}>
            {(open, setOpen) => {
                const { header, body } = typeof children === "function" ? children(open, setOpen) : children;
                return (
                    <CardModalContent style={style} enabled={keyboardPaddingEnabled} behavior="padding">
                        <CardModalWrapper onLayout={handleLayout}>
                            {header}
                            <KeyboardAwareScrollView
                                style={{ flex: 1 }}
                                keyboardShouldPersistTaps="handled"
                                enableOnAndroid={true}
                                alwaysBounceVertical={false}
                                enableAutomaticScroll={!keyboardPaddingEnabled}
                            >
                                <CardModalBodyWrapper flex={1} justifyContent="flex-end">
                                    {body}
                                </CardModalBodyWrapper>
                            </KeyboardAwareScrollView>
                        </CardModalWrapper>
                    </CardModalContent>
                );
            }}
        </Backdrop>
    );
};

export default CardModal;
