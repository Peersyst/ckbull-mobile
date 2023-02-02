import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { PinIcon, ScanIcon, WalletIcon } from "icons";
import { MainBottomScreens } from "module/main/component/navigation/MainBottomNavigatorGroup/MainBottomNavigatorGroup";
import { MainStackParamsList } from "stack-navigator";
import { BottomBarRoot } from "./BottomBar.styles";
import BottomBarItem from "./BottomBarItem/BottomBarItem";
import { useTranslate } from "module/common/hook/useTranslate";
import { DaoBottomIcon } from "module/common/icons/DaoBottomIcon";
import { ActivityIcon } from "module/common/icons/ActivityIcon";
import MainButton from "../../input/MainButton/MainButton";

type BottomBarProps = Pick<BottomTabBarProps, "state" | "navigation">;

const BottomBar = ({ state, navigation }: BottomBarProps): JSX.Element => {
    const translate = useTranslate();
    const activeTab = state.routeNames[state.index];
    const handleNavigation = (link: keyof MainStackParamsList) => {
        if (activeTab !== link) {
            navigation.navigate(link);
        }
    };
    return (
        <BottomBarRoot>
            <BottomBarItem
                onPress={() => handleNavigation(MainBottomScreens.DAO)}
                isActive={activeTab === MainBottomScreens.DAO}
                label={translate("DAO")}
                Icon={<DaoBottomIcon />}
            />
            <BottomBarItem
                onPress={() => handleNavigation(MainBottomScreens.HOME)}
                isActive={activeTab === MainBottomScreens.ACCOUNT}
                label={translate("account")}
                Icon={<WalletIcon />}
            />
            <MainButton
                onPress={() => handleNavigation(MainBottomScreens.HOME)}
                label={translate("wallet")}
                icon={<ScanIcon style={{ color: "white" }} />}
                style={{ marginTop: -15 }}
            ></MainButton>
            <BottomBarItem
                onPress={() => handleNavigation(MainBottomScreens.HOME)}
                isActive={activeTab === MainBottomScreens.ACTIVITY}
                label={translate("activity")}
                Icon={<ActivityIcon />}
            />
            <BottomBarItem
                onPress={() => handleNavigation(MainBottomScreens.NEWS)}
                isActive={activeTab === MainBottomScreens.NEWS}
                label={translate("news")}
                Icon={<PinIcon />}
            />
        </BottomBarRoot>
    );
};

export default BottomBar;
