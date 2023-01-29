import { Backdrop, ExposedBackdropProps } from "@peersyst/react-native-components";
import CardNavigator, { CardNavigatorProps } from "module/common/component/navigation/CardNavigator/CardNavigator";

const CardNavigatorModal = ({
    navbar: { back, action, onBack, onAction, ...restNavProps } = {},
    children,
    style,
    closable = true,
    ...backdropProps
}: ExposedBackdropProps & CardNavigatorProps): JSX.Element => {
    return (
        <Backdrop closable={closable} {...backdropProps}>
            {(_open, setOpen) => (
                <CardNavigator
                    navbar={{
                        back: back && !action && closable,
                        action: !back && closable ? action : undefined,
                        onBack: onBack || (() => setOpen(false)),
                        onAction: onAction || (() => setOpen(false)),
                        ...restNavProps,
                    }}
                    style={style}
                >
                    {children}
                </CardNavigator>
            )}
        </Backdrop>
    );
};

export default CardNavigatorModal;
