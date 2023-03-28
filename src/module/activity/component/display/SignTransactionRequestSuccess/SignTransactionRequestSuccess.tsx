import { Col, Typography, useConfig } from "@peersyst/react-native-components";
import DarkThemeProvider from "module/common/component/util/ThemeProvider/DarkThemeProvider";
import { useTranslate } from "module/common/hook/useTranslate";
import { TransactionHash, SuccessCopyButton, ExplorerButton } from "./SignTransactionRequestSuccess.styles";
import { ExternalLinkIcon } from "icons";
import { capitalize } from "@peersyst/react-utils";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import { Linking } from "react-native";

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
                        <TransactionHash>{transactionHash}</TransactionHash>
                    </Col>
                </Col>
                <Col gap={12}>
                    <SuccessCopyButton copyText={transactionHash} variant="glass" fullWidth />
                    <ExplorerButton leftIcon={<ExternalLinkIcon />} variant="glass" fullWidth onPress={handleExplorer}>
                        {translate("seeInExplorer")}
                    </ExplorerButton>
                </Col>
            </Col>
        </DarkThemeProvider>
    );
}
