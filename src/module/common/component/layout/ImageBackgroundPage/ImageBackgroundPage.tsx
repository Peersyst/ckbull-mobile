import { image_background } from "images";
import { ImageBackgroundBase, ImageBackgroundPageRoot } from "./ImageBackgroundPage.styles";
import { ImageBackgroundPageProps } from "./ImageBackgroundPage.types";

const ImageBackgroundPage = ({ children, ...rest }: ImageBackgroundPageProps): JSX.Element => {
    return (
        <ImageBackgroundPageRoot {...rest}>
            <ImageBackgroundBase source={image_background} resizeMode="cover">
                {children}
            </ImageBackgroundBase>
        </ImageBackgroundPageRoot>
    );
};

export default ImageBackgroundPage;
