import { Typography } from "@peersyst/react-native-components";
import { ReactNode } from "react";
import { SummaryFieldRoot } from "./SummaryField.styles";

export interface SummaryFieldProps {
    label: string;
    children: string | ReactNode;
}

const SummaryField = ({ label, children }: SummaryFieldProps): JSX.Element => {
    return (
        <SummaryFieldRoot variant="body2Regular" label={label}>
            {typeof children === "string" ? (
                <Typography testID="infoText" variant="body2Regular" numberOfLines={2}>
                    {children}
                </Typography>
            ) : (
                children
            )}
        </SummaryFieldRoot>
    );
};

export default SummaryField;
