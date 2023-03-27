import { createBackdrop } from "@peersyst/react-native-components";
import TransactionRequestScreen from "module/activity/screen/TransactionRequestScreen/TransactionRequestScreen";
import CardSelectModal, { CardSelectModalProps } from "module/common/component/feedback/CardSelectModal/CardSelectModal";

export type TransactionRequestModalProps = Omit<CardSelectModalProps, "children" | "title" | "dismissal">;

const TransactionRequestModal = createBackdrop(({...modalProps}: TransactionRequestModalProps): JSX.Element => {

    return (
        <CardSelectModal title="Transaction request" dismissal="close" style={{ height: "95%"}} {...modalProps}>
            <TransactionRequestScreen />
        </CardSelectModal>
    )
})

export default TransactionRequestModal;