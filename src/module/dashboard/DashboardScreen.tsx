import { SafeAreaView } from "react-native";
import { translate } from "locale";
import { Col, TextField, TextArea, Form } from "react-native-components";
import { Text, View } from "react-native";
import { useLogin } from "module/auth/query/useLogin";
import { ArrowIcon } from "icons";
import { useAuth } from "module/auth/hook/useAuth";
import styled from "@peersyst/react-native-styled";
import { lighten } from "@peersyst/react-utils";
import LogoAnimation from "module/common/component/display/LogoAnimation/LogoAnimation";

const CustomText = styled(Text)(({ theme }) => ({ color: theme.palette.text }));
const Spacer = styled(View)(() => ({ height: 20 }));

const CustomView = styled(View)(({ theme }) => ({
    backgroundColor: lighten(theme.palette.gold, 0.5),
    height: 40,
    alignItems: "center",
    justifyContent: "center",
}));

const DashboardScreen = (): JSX.Element => {
    const login = useLogin();
    const {
        state: { token, isLogged },
        logout,
    } = useAuth();
    return (
        <SafeAreaView style={{ backgroundColor: "#000000", width: "100%", height: "100%" }}>
            <LogoAnimation />
        </SafeAreaView>
    );
};

export default DashboardScreen;
