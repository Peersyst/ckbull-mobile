import BaseMainScreen from "module/main/component/layout/BaseMainScreen/BaseMainScreen";
import ActivityTabs from "module/activity/component/navigation/ActivityTabs/ActivityTabs";
import AccountSlider from "module/home/component/core/AccountSlider";

const ActivityScreen = (): JSX.Element => {
    return (
        <BaseMainScreen>
            <AccountSlider />
            <ActivityTabs />
        </BaseMainScreen>
    );
};

export default ActivityScreen;
