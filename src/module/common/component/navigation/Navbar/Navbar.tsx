import { NavbarProps } from "./Navbar.types";
import { NavbarRoot, BackIconRoot } from "./Navbar.styles";
import { BackIcon } from "icons";
import useNavigation from "module/common/hook/useNavigation";
import { Col, Typography } from "@peersyst/react-native-components";
import Steps from "module/common/component/display/Steps/Steps";

const Navbar = ({ back, title, onBack, steps }: NavbarProps): JSX.Element => {
    const navigation = useNavigation();

    const goBack = () => {
        if (navigation.canGoBack()) {
            navigation.goBack();
        }
    };

    return (
        <NavbarRoot>
            {back && (
                <BackIconRoot onPress={onBack || goBack}>
                    <BackIcon size={20} />
                </BackIconRoot>
            )}
            <Col alignItems="center">
                {title && (
                    <Typography style={{ lineHeight: 30 }} variant="body1Light" textTransform="uppercase">
                        {title}
                    </Typography>
                )}
                {steps && <Steps index={steps.index} length={steps.length} />}
            </Col>
        </NavbarRoot>
    );
};

export default Navbar;
