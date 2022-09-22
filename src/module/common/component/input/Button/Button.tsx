import { ButtonProps } from "./Button.types";
import { ButtonRoot } from "./Button.styles";

const Button = ({ appearance = "dark", size = "lg", ...rest }: ButtonProps): JSX.Element => {
    const a = {
        ...rest,
        a: "",
    };
    return <ButtonRoot size={size} appearance={appearance} {...a} />;
};

export default Button;
