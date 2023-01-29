import { logo } from "images";
import { Image } from "react-native";

export const Logo = (): JSX.Element => {
    return <Image source={logo} style={{ height: 60, width: 60, position: "absolute", zIndex: -1 }}></Image>;
};

export default Logo;
