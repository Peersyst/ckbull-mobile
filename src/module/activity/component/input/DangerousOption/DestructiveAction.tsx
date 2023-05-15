import { TypographyProps } from "@peersyst/react-native-components";
import { DestructiveActionRoot } from "./DestructiveAction.styles";
import { Loosen } from "@peersyst/react-types";

export interface DestructiveActionProps extends Omit<Loosen<TypographyProps, "variant">, "children"> {
    label: string;
}

export default function DestructiveAction({ label, variant = "body3Regular", ...rest }: DestructiveActionProps): JSX.Element {
    return (
        <DestructiveActionRoot variant={variant} {...rest}>
            {label}
        </DestructiveActionRoot>
    );
}
