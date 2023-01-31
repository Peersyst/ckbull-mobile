import { DepositIcon, WithdrawalIcon } from "icons";
import { Row, Skeleton, useModal } from "@peersyst/react-native-components";
import DepositModal from "../../DepositModal/DepositModal";
import WithdrawModal from "../../WithdrawModal/WithdrawModal";
import Button from "module/common/component/input/Button/Button";

export interface DAOCardButtonsProps {
    loading?: boolean;
}

const DAOCardButtons = ({ loading = false }: DAOCardButtonsProps): JSX.Element => {
    const { showModal } = useModal();

    return (
        <Row justifyContent="flex-end" gap={12}>
            <Skeleton loading={loading} shape="circular">
                <Button size="md" variant="outlined" onPress={() => showModal(WithdrawModal)} circular>
                    <WithdrawalIcon style={{ fontSize: 24 }} />
                </Button>
            </Skeleton>
            <Skeleton loading={loading} shape="circular">
                <Button size="md" variant="secondary" onPress={() => showModal(DepositModal)} circular>
                    <DepositIcon style={{ fontSize: 24 }} />
                </Button>
            </Skeleton>
        </Row>
    );
};

export default DAOCardButtons;
