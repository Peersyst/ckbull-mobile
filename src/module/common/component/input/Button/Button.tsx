import { ButtonProps } from "./Button.types";
import { ButtonBase, ButtonGradient, ButtonRoot } from "./Button.styles";
import { useTheme } from "@peersyst/react-native-styled";

const Button = ({
    style: { backgroundColor: backgroundColorStyle, secondaryBackgroundColor: secondaryBackgroundColorStyle } = {},
    ...rest
}: ButtonProps): JSX.Element => {
    const { variant, disabled } = rest;
    const { palette } = useTheme();

    const backgroundColor = backgroundColorStyle || palette.green[200];
    const secondaryBackgroundColor = secondaryBackgroundColorStyle || palette.green[800];

    return (
        <ButtonRoot {...rest}>
            <ButtonBase {...rest} />
            {variant === "primary" && !disabled && (
                <ButtonGradient
                    colors={[backgroundColor, secondaryBackgroundColor]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                        borderRadius: 1000,
                    }}
                />
            )}
        </ButtonRoot>
    );
};

export default Button;
