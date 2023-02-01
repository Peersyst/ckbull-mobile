import { image_background } from "images";
import { ViewProps } from "react-native";
import { ImageBackgroundPageRoot } from "./ImageBackgroundPage.styles";

const ImageBackgroundPage = ({ children, ...rest }: ViewProps): JSX.Element => {
    return (
        <ImageBackgroundPageRoot source={image_background} resizeMode="cover" {...rest}>
            {children}
        </ImageBackgroundPageRoot>
    );
};

export default ImageBackgroundPage;
