import EmptyListComponent from "module/common/component/display/EmptyListComponent/EmptyListComponent";
import { useTranslate } from "module/common/hook/useTranslate";

const EmptyTransactionsList = () => {
    const translate = useTranslate();
    const translateError = useTranslate("error");

    return <EmptyListComponent title={translateError("no_transactions")} text={translate("start_making_transactions")} />;
};

export default EmptyTransactionsList;
