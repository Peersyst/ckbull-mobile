import { NavbarProps } from "./Navbar.types";
import { NavbarRoot, BackIconRoot, ActionIconButtonRoot } from "./Navbar.styles";
import { BackIcon, ChevronUpIcon, CircleErrorIcon } from "icons";
import useNavigation from "module/common/hook/useNavigation";
import { Col, Typography } from "@peersyst/react-native-components";
import Steps from "module/common/component/display/Steps/Steps";

const Navbar = ({ back, action, title, onBack, onAction, steps }: NavbarProps): JSX.Element => {
    const navigation = useNavigation();

    const actionIcons = {
        close: <CircleErrorIcon />,
        hide: <ChevronUpIcon />,
    };

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
            {action && <ActionIconButtonRoot onPress={onAction}>{actionIcons[action]}</ActionIconButtonRoot>}
        </NavbarRoot>
    );
};

export default Navbar;
