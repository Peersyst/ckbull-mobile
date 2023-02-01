import { DepositIcon, WithdrawalIcon } from "icons";
import { Row, Skeleton, useModal } from "@peersyst/react-native-components";
import DepositModal from "../../DepositModal/DepositModal";
import WithdrawModal from "../../WithdrawModal/WithdrawModal";
import IconButton from "module/common/component/input/IconButton/IconButton";

export interface DAOCardButtonsProps {
    loading?: boolean;
}

const DAOCardButtons = ({ loading = false }: DAOCardButtonsProps): JSX.Element => {
    const { showModal } = useModal();

    return (
        <Row justifyContent="flex-end" gap={12}>
            <Skeleton loading={loading} shape="circular">
                <IconButton
                    icon={<WithdrawalIcon style={{ fontSize: 24 }} />}
                    size="md"
                    variant="outlined"
                    onPress={() => showModal(WithdrawModal)}
                />
            </Skeleton>
            <Skeleton loading={loading} shape="circular">
                <IconButton
                    icon={<DepositIcon style={{ fontSize: 24 }} />}
                    size="md"
                    variant="secondary"
                    onPress={() => showModal(DepositModal)}
                />
            </Skeleton>
        </Row>
    );
};

export default DAOCardButtons;
