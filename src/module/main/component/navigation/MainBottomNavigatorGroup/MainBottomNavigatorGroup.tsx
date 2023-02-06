import BottomBar from "module/common/component/navigation/BottomBar/BottomBar";
import HomeScreen from "module/home/screen/HomeScreen";
import DAOScreen from "module/dao/screen/DAOScreen";
import NewsScreen from "module/news/screen/NewsScreen";
import Header from "module/common/component/navigation/Header/Header";
import { BottomTab } from "stack-navigator";

export enum MainBottomScreens {
    HOME = "Home",
    DAO = "DAO",
    NEWS = "News",
    ACTIVITY = "Activity",
}

const MainBottomNavigatorGroup = () => (
    <BottomTab.Navigator
        initialRouteName={MainBottomScreens.HOME}
        tabBar={(props) => <BottomBar {...props} />}
        screenOptions={{ header: (props) => <Header {...props} /> }}
        sceneContainerStyle={{ backgroundColor: "transparent" }}
        backBehavior="history"
    >
        <BottomTab.Screen name={MainBottomScreens.HOME} component={HomeScreen} />
        <BottomTab.Screen name={MainBottomScreens.DAO} component={DAOScreen} />
        <BottomTab.Screen name={MainBottomScreens.NEWS} component={NewsScreen} />
    </BottomTab.Navigator>
);

export default MainBottomNavigatorGroup;
