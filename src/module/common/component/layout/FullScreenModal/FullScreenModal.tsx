import Navbar from "../../navigation/Navbar/Navbar";
import Toolbar from "../Toolbar/Toolbar";
import { FullScreenModalProps } from "./FullScreenModal.types";
import { Backdrop } from "@peersyst/react-native-components";
import DarkThemeProvider from "module/common/component/util/ThemeProvider/DarkThemeProvider";
import ImageBackgroundPage from "../ImageBackgroundPage/ImageBackgroundPage";

const FullScreenModal = ({ children, title, back, closable = true, ...rest }: FullScreenModalProps): JSX.Element => {
    const navbarProps = { title, back };
    return (
        <Backdrop closable={closable} {...rest}>
            {(_open, setOpen) => (
                <DarkThemeProvider>
                    <ImageBackgroundPage>
                        <Toolbar>
                            {Object.entries(navbarProps).length > 0 && <Navbar onBack={() => setOpen(false)} {...navbarProps} />}
                        </Toolbar>
                        {children}
                    </ImageBackgroundPage>
                </DarkThemeProvider>
            )}
        </Backdrop>
    );
};
export default FullScreenModal;
