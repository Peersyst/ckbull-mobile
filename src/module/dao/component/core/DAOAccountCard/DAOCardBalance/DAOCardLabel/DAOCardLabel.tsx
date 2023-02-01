import { JSXElementConstructor } from "react";
import { Label, TypographyProps, Typography, Skeleton } from "@peersyst/react-native-components";

export type DAOBalanceRowProps<P extends { variant: TypographyProps["variant"] } = TypographyProps> = Omit<
    P,
    "variant" | "label" | "isLoading" | "Component"
> & {
    label: string;
    loading?: boolean;
    Component?: JSXElementConstructor<P>;
};

function DAOCardLabel<P extends { variant: TypographyProps["variant"] } = TypographyProps>({
    label,
    loading = false,
    Component = Typography,
    ...componentProps
}: DAOBalanceRowProps<P>): JSX.Element {
    return (
        <Label label={label} variant="body3Light" color="overlay.100.72%" placement="left" alignment="space-between">
            <Skeleton loading={loading} width="60%">
                <Component variant="h2Strong" {...(componentProps as any)} />
            </Skeleton>
        </Label>
    );
}

export default DAOCardLabel;
