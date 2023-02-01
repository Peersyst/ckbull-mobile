import { JSXElementConstructor } from "react";
import { Label, TypographyProps, Typography, Skeleton } from "@peersyst/react-native-components";
import { View } from "react-native";

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
        <Label
            label={label}
            style={{ label: { marginRight: 12 }, alignContent: "stretch" }}
            variant="body3Light"
            color="overlay.100.72%"
            placement="left"
            alignment="space-between"
        >
            <View style={{ flex: 1, alignItems: "flex-end" }}>
                <Skeleton loading={loading}>
                    <Component variant="h2Strong" {...(componentProps as any)} />
                </Skeleton>
            </View>
        </Label>
    );
}

export default DAOCardLabel;
