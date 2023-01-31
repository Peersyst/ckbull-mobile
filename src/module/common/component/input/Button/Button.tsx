import { ButtonProps } from "./Button.types";
import { ButtonBase, ButtonGradient, ButtonRoot } from "./Button.styles";
import { useTheme } from "@peersyst/react-native-styled";
import { Fragment } from "react";

const Button = ({ variant, disabled, children, ...rest }: ButtonProps): JSX.Element => {
    const { palette } = useTheme();

    return (
        <ButtonBase {...rest}>
            {children}
            {variant === "primary" && !disabled && (
                <ButtonGradient
                    colors={[palette.green[200], palette.green[800]]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                        borderRadius: 1000,
                    }}
                />
            )}
        </ButtonBase>
    );
};

export default Button;
