import BaseMainScreen from "module/main/component/layout/BaseMainScreen/BaseMainScreen";
import ActivityTabs from "module/activity/component/navigation/ActivityTabs/ActivityTabs";

const ActivityScreen = (): JSX.Element => {
    return (
        <BaseMainScreen>
            <ActivityTabs />
        </BaseMainScreen>
    );
};

export default ActivityScreen;
