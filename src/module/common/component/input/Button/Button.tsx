import { ButtonProps } from "./Button.types";
import { ButtonBase, ButtonGradient } from "./Button.styles";
import { useTheme } from "@peersyst/react-native-styled";
import { View } from "react-native";

const Button = ({ variant, disabled, ...rest }: ButtonProps): JSX.Element => {
    const { palette } = useTheme();
    const showGradient = variant === "primary" && !disabled;
    return (
        <View>
            <ButtonBase {...rest} disabled={disabled} variant={variant} />
            {showGradient && (
                <ButtonGradient
                    colors={[palette.green[200], palette.green[800]]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                        borderRadius: 1000,
                    }}
                />
            )}
        </View>
    );
};

export default Button;
