import { StatusBar } from "@peersyst/react-native-components";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import useGetRouteTitle from "module/common/hook/useGetRouteTitle";
import { MainStackParamsList } from "stack-navigator";
import Navbar from "../Navbar/Navbar";
import { NavbarHeaderRoot } from "./NavbarHeader.styles";

const NavbarHeader = ({ navigation, route }: NativeStackHeaderProps) => {
    const routeName = route.name as keyof MainStackParamsList;
    const title = useGetRouteTitle(routeName);

    return (
        <NavbarHeaderRoot>
            <Navbar title={title} back onBack={navigation.goBack} style={{ paddingVertical: 0 }} />
            <StatusBar />
        </NavbarHeaderRoot>
    );
};

export default NavbarHeader;
