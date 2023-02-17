import { Col, Form, useSetTab, Suspense } from "@peersyst/react-native-components";
import Button from "module/common/component/input/Button/Button";
import { useRecoilState } from "recoil";
import sendRecoilState, { SendState } from "module/transaction/state/SendState";
import useGetBalance from "module/wallet/query/useGetBalance";
import CenteredLoader from "module/common/component/feedback/CenteredLoader/CenteredLoader";
import { useTranslate } from "module/common/hook/useTranslate";
import { useState } from "react";
import CKBAmountTextField from "module/transaction/component/input/AssetAmountTextField/CKBAmountTextField/CKBAmountTextField";
import { DepositScreens } from "module/dao/component/core/DepositModal/DepositModal";
import Advise from "module/common/component/display/Advise/Advise";
import { config } from "config";

export type DepositSetAmountAndMessageResult = Pick<SendState, "amount">;

export type DepositSetAmountFormKeys = keyof DepositSetAmountAndMessageResult;

export const DEPOSIT_SET_AMOUNT_FORM_KEYS: Partial<Record<DepositSetAmountFormKeys, DepositSetAmountFormKeys>> = {
    amount: "amount",
};

const DepositSetAmountScreen = (): JSX.Element => {
    const [sendState, setSendState] = useRecoilState(sendRecoilState);

    const [amount, setAmount] = useState<string | undefined>(sendState.amount?.toString() ?? undefined);
    const translate = useTranslate();

    const senderWalletIndex = sendState.senderWalletIndex!;
    const { isLoading: balanceIsLoading } = useGetBalance(senderWalletIndex);
    const setTab = useSetTab();

    const handleSubmit = (res: DepositSetAmountAndMessageResult): void => {
        setSendState((oldState) => ({
            ...oldState,
            ...res,
        }));

        setTab(DepositScreens.CONFIRMATION);
    };

    return (
        <Suspense isLoading={balanceIsLoading} fallback={<CenteredLoader color="black" />}>
            <Form onSubmit={handleSubmit}>
                <Col gap="5%">
                    <CKBAmountTextField
                        required
                        minAmount={config.minimumDaoDeposit.toString()}
                        hideError={amount === ""}
                        value={amount}
                        onChange={(amount: string) => setAmount(amount)}
                        label={translate("select_the_amount_to_deposit")}
                        placeholder={translate("enter_amount")}
                        name={DEPOSIT_SET_AMOUNT_FORM_KEYS.amount}
                        index={sendState.senderWalletIndex}
                    />
                    <Advise text={translate("deposit_warning", { dao_min_deposit: config.minimumDaoDeposit, token: config.tokenName })} />
                    <Button variant="primary" type="submit" fullWidth>
                        {translate("next")}
                    </Button>
                </Col>
            </Form>
        </Suspense>
    );
};

export default DepositSetAmountScreen;
