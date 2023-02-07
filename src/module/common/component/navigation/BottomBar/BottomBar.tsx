import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useTranslate } from "module/common/hook/useTranslate";
import { AccountIcon, DaoIcon, PinIcon, QrIcon } from "icons";
import { MainBottomScreens } from "module/main/component/navigation/MainBottomNavigatorGroup/MainBottomNavigatorGroup";
import { BottomBarRoot } from "./BottomBar.styles";
import BottomBarItem from "./BottomBarItem/BottomBarItem";
import { ActivityIcon } from "module/common/icons/ActivityIcon";
import MainButton from "../../input/MainButton/MainButton";
import { MainStackParamsList } from "stack-navigator";

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
                Icon={<DaoIcon />}
            />
            <BottomBarItem
                onPress={() => handleNavigation(MainBottomScreens.HOME)}
                isActive={activeTab === MainBottomScreens.HOME}
                label={translate("account")}
                Icon={<AccountIcon />}
            />
            <MainButton label={translate("scan")} icon={<QrIcon />} style={{ marginTop: -15 }} />
            <BottomBarItem
                onPress={() => handleNavigation(MainBottomScreens.ACTIVITY)}
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
