import { ButtonRoot } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button = ({ variant, disabled, children, ...rest }: ButtonProps): JSX.Element => {
    return (
        <ButtonRoot {...rest} disabled={disabled} variant={variant}>
            {children}
        </ButtonRoot>
    );
};

export default Button;
