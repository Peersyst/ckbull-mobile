import BaseMainScreen, { BaseMainScreenProps } from "module/main/component/layout/BaseMainScreen/BaseMainScreen";
import { SecondaryScreenScrollView } from "module/common/component/layout/BaseSecondaryScreen/BaseSecondaryScreen.styles";

export type BaseSecondaryScreenProps = Omit<BaseMainScreenProps, "onBack">;

const BaseSecondaryScreen = ({ children }: BaseSecondaryScreenProps): JSX.Element => {
    return (
        <BaseMainScreen>
            <SecondaryScreenScrollView showsVerticalScrollIndicator={false}>{children}</SecondaryScreenScrollView>
        </BaseMainScreen>
    );
};

export default BaseSecondaryScreen;
