import BaseMainScreen from "module/main/component/layout/BaseMainScreen/BaseMainScreen";
import ActivityTabs from "module/activity/component/navigation/ActivityTabs/ActivityTabs";
import { View } from "react-native";

const ActivityScreen = (): JSX.Element => {
    return (
        <BaseMainScreen>
            <View style={{ backgroundColor: "gray", height: 60, marginTop: 20, marginBottom: 40 }}></View>
            <ActivityTabs />
        </BaseMainScreen>
    );
};

export default ActivityScreen;
