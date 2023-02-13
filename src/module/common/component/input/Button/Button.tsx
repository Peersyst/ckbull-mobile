import { ButtonRoot } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps): JSX.Element => {
    return <ButtonRoot {...props} />;
};

export default Button;
