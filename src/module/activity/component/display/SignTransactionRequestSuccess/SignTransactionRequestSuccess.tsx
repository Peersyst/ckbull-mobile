import { Col, Typography, useConfig } from "@peersyst/react-native-components";
import DarkThemeProvider from "module/common/component/util/ThemeProvider/DarkThemeProvider";
import { useTranslate } from "module/common/hook/useTranslate";
import { SignSuccessButton, TransactionHash } from "./SignTransactionRequestSuccess.styles";
import useCopyToClipboard from "module/common/hook/useCopyToClipboard";
import { CopyIcon, ExternalLinkIcon } from "icons";
import { capitalize } from "@peersyst/react-utils";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import { Linking } from "react-native";

interface SignTransactionRequestSuccessProps {
    transactionHash: string;
}

export default function SignTransactionRequestSuccess({ transactionHash }: SignTransactionRequestSuccessProps): JSX.Element {
    const translate = useTranslate();
    const copyToClipboard = useCopyToClipboard();

    const handleCopy = () => copyToClipboard(transactionHash);

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
                    <SignSuccessButton leftIcon={<CopyIcon />} variant="glass" fullWidth onPress={handleCopy}>
                        {capitalize(translate("copy"))}
                    </SignSuccessButton>
                    <SignSuccessButton leftIcon={<ExternalLinkIcon />} variant="glass" fullWidth onPress={handleExplorer}>
                        {translate("seeInExplorer")}
                    </SignSuccessButton>
                </Col>
            </Col>
        </DarkThemeProvider>
    );
}
