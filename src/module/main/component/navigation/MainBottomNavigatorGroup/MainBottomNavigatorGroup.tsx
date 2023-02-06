import BottomBar from "module/common/component/navigation/BottomBar/BottomBar";
import { BottomTab } from "stack-navigator";
import HomeScreen from "module/home/screen/HomeScreen";
import DAOScreen from "module/dao/screen/DAOScreen";
import NewsScreen from "module/news/screen/NewsScreen";
import BasePage from "module/common/component/layout/BasePage/BasePage";
import ActivityScreen from "module/activity/screen/ActivityScreen";

export enum MainBottomScreens {
    HOME = "Home",
    ACCOUNT = "Account",
    DAO = "DAO",
    NEWS = "News",
    ACTIVITY = "Activity",
}

const MainBottomNavigatorGroup = () => (
    <BasePage>
        <BottomTab.Navigator
            initialRouteName={MainBottomScreens.HOME}
            tabBar={(props) => <BottomBar {...props} />}
            screenOptions={{ headerShown: false }}
            sceneContainerStyle={{ backgroundColor: "transparent" }}
            backBehavior="history"
        >
            <BottomTab.Screen name={MainBottomScreens.HOME} component={HomeScreen} />
            <BottomTab.Screen name={MainBottomScreens.DAO} component={DAOScreen} />
            <BottomTab.Screen name={MainBottomScreens.ACTIVITY} component={ActivityScreen} />
            <BottomTab.Screen name={MainBottomScreens.NEWS} component={NewsScreen} />
        </BottomTab.Navigator>
    </BasePage>
);

export default MainBottomNavigatorGroup;
