import { RippleNumberProps } from "./RippleNumber.types";
import { RippleNumberRoot, TextNumber } from "./RippleNumber.styles";
import RippleAnimCircle from "../../display/RippleAnimCircle/RippleAnimCircle";
import { theme } from "module/common/style/theme";

const RippleNumer = ({ number }: RippleNumberProps) => {

    return (
        <RippleNumberRoot>
            <RippleAnimCircle 
            duration={600}
            size={70}
            color2={theme.palette.lightGray} />
            <TextNumber>{number}</TextNumber>
        </RippleNumberRoot>
    );
};

export default RippleNumer;
