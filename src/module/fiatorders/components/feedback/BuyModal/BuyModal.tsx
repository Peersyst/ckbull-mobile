import { createBackdrop } from "@peersyst/react-native-components";
import { FiatOrderModalProps } from "../FiatOrderModal/FiatOrderModal.types";
import FiatOrderModal from "../FiatOrderModal/FiatOrderModal";
import { useTranslate } from "module/common/hook/useTranslate";
import BuyWithTransak from "../../core/BuyWithTransak/BuyWithTransak";
import BuySuccess from "../BuySuccess/BuySuccess";

export type BuyModalProps = Omit<FiatOrderModalProps, "order" | "success" | "title">;

const BuyModal = createBackdrop<BuyModalProps>((props) => {
    const translate = useTranslate();
    return <FiatOrderModal title={translate("buyCKB")} order={<BuyWithTransak />} success={<BuySuccess />} {...props} />;
});

export default BuyModal;
