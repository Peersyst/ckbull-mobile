import EmptyListComponent from "module/common/component/display/EmptyListComponent/EmptyListComponent";
import { useTranslate } from "module/common/hook/useTranslate";

const EmptyCompletedWithdrawalsList = () => {
    const translate = useTranslate();
    const translateError = useTranslate("error");

    return <EmptyListComponent title={translateError("no_withdrawals")} text={translate("withdraw_explanation")} />;
};

export default EmptyCompletedWithdrawalsList;
