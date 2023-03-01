import EmptyListComponent from "module/common/component/display/EmptyListComponent/EmptyListComponent";
import { useTranslate } from "module/common/hook/useTranslate";

export interface EmptyDepositsComponentProps {
    loading?: boolean;
}

const EmptyDepositsComponent = ({ loading }: EmptyDepositsComponentProps) => {
    const translate = useTranslate();
    const translateError = useTranslate("error");
    return (
        <EmptyListComponent
            title={loading ? translate("loading_deposits") : translateError("no_deposits")}
            text={loading ? undefined : translate("start_creating_deposits")}
        />
    );
};

export default EmptyDepositsComponent;
