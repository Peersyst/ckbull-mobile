import { Col, Form, Paper, Typography, useSetTab } from "@peersyst/react-native-components";
import Button from "module/common/component/input/Button/Button";
import sendRecoilState from "module/transaction/state/SendState";
import { SendScreens } from "module/transaction/component/core/SendModal/SendModal";
import { useRecoilState } from "recoil";
import WalletSelector from "module/wallet/component/input/WalletSelector/WalletSelector";
import useUncommittedTransaction from "module/transaction/hook/useUncommittedTransaction";
import useWalletState from "module/wallet/hook/useWalletState";
import { useTranslate } from "module/common/hook/useTranslate";

export interface DepositForm {
    sender: number;
}

const DepositSelectAccountScreen = () => {
    const {
        state: { selectedWallet: defaultSelectedWallet, wallets },
    } = useWalletState();
    const translate = useTranslate();
    const finalSelectedWallet =
        //Check if the user has a previous selectedWallet
        defaultSelectedWallet !== undefined
            ? //Check that the selected wallet is not the CreateWallet
              defaultSelectedWallet === wallets.length
                ? defaultSelectedWallet - 1
                : defaultSelectedWallet
            : 0;
    const [sendState, setSendState] = useRecoilState(sendRecoilState);
    const setTab = useSetTab();
    const handleSubmit = ({ sender }: DepositForm) => {
        setSendState((oldState) => ({ ...oldState, senderWalletIndex: sender }));
        setTab(SendScreens.AMOUNT_AND_MESSAGE);
    };
    const uncommittedTransaction = useUncommittedTransaction();

    return (
        <Form onSubmit={handleSubmit}>
            <Col>
                <Col gap={40}>
                    <WalletSelector
                        label={translate("select_a_wallet") + ":"}
                        required
                        name="sender"
                        defaultValue={sendState.senderWalletIndex ?? finalSelectedWallet}
                    />
                    <Col gap={8}>
                        <Button
                            type="submit"
                            variant="primary"
                            fullWidth
                            disabled={uncommittedTransaction}
                            loading={uncommittedTransaction}
                        >
                            {translate("next")}
                        </Button>
                        {uncommittedTransaction && (
                            <Typography variant="body2" textAlign="center">
                                {translate("pending_transaction_text")}
                            </Typography>
                        )}
                    </Col>
                </Col>
            </Col>
        </Form>
    );
};

export default DepositSelectAccountScreen;
