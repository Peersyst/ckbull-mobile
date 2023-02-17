import { useTranslate } from "module/common/hook/useTranslate";
import { EmptyDepositsComponentRoot } from "./EmptyDepositsComponent.styles";

export interface EmptyDepositsComponentProps {
    loading?: boolean;
}

const EmptyDepositsComponent = ({ loading }: EmptyDepositsComponentProps) => {
    const translate = useTranslate();
    return (
        <EmptyDepositsComponentRoot variant="body2Light">
            {translate(loading ? "loading_deposits" : "no_deposits")}
        </EmptyDepositsComponentRoot>
    );
};

export default EmptyDepositsComponent;
