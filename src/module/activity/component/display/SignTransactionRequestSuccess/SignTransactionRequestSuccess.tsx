import { Col, Typography, useConfig } from "@peersyst/react-native-components";
import DarkThemeProvider from "module/common/component/util/ThemeProvider/DarkThemeProvider";
import { useTranslate } from "module/common/hook/useTranslate";
import { ExternalLinkIcon } from "icons";
import { capitalize } from "@peersyst/react-utils";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import { Linking } from "react-native";
import Button from "module/common/component/input/Button/Button";
import CopyButton from "module/common/component/feedback/CopyButton/CopyButton";
import { TransactionHash } from "./SignTransactionRequestSuccess.styles";

interface SignTransactionRequestSuccessProps {
    transactionHash: string;
}

export default function SignTransactionRequestSuccess({ transactionHash }: SignTransactionRequestSuccessProps): JSX.Element {
    const translate = useTranslate();

    const { network } = useServiceInstance();

    const explorerUrl = useConfig(network === "mainnet" ? "mainnetExplorerLink" : "testnetExplorerLink");

    const handleExplorer = () => {
        const url = `${explorerUrl}transaction/${transactionHash}`;

        Linking.openURL(url);
    };

    return (
        <DarkThemeProvider>
            <Col gap={32} justifyContent="center">
                <Col alignItems="center" gap={32} justifyContent="center">
                    <Col justifyContent="center" gap={4}>
                        <Typography variant="body2Strong" textAlign="center">
                            {capitalize(translate("transaction"))}
                        </Typography>
                        <TransactionHash variant="body3Strong" address={transactionHash} type="tx" />
                    </Col>
                </Col>
                <Col gap={12}>
                    <CopyButton copyText={transactionHash} variant="glass" fullWidth rounded={false} />
                    <Button leftIcon={<ExternalLinkIcon />} variant="glass" fullWidth onPress={handleExplorer} rounded={false}>
                        {translate("seeInExplorer")}
                    </Button>
                </Col>
            </Col>
        </DarkThemeProvider>
    );
}
