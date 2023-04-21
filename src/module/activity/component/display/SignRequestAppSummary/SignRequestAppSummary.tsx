import { Col, Typography } from "@peersyst/react-native-components";
import { DAppImage } from "module/activity/component/display/SignRequestAppSummary/SignRequestAppSummary.styles";
import config from "config/config";
import WalletSelector from "module/wallet/component/input/WalletSelector/WalletSelector";
import { useTranslate } from "module/common/hook/useTranslate";
import { PartialDappDto } from "module/api/service";
import { ViewStyle } from "react-native";

interface SignInRequestSummaryProps {
    app: PartialDappDto;
    requestTitle: string;
    loading?: boolean;
    onWalletChange?: (walletId: number) => void;
    selectedWallet?: number;
    style?: ViewStyle;
}

export default function SignInRequestSummaryProps({
    requestTitle,
    app: { name, description, image },
    loading = false,
    selectedWallet,
    onWalletChange,
    style,
}: SignInRequestSummaryProps): JSX.Element {
    const translate = useTranslate();

    return (
        <Col gap={24} flex={1} style={style}>
            <Col gap={24} alignItems="center">
                <Typography variant="body3Strong" textAlign="center">
                    {requestTitle}
                </Typography>
                <DAppImage source={{ uri: image || config.defaultDAppImage }} />
                <Col alignItems="center">
                    <Typography variant="body3Strong" textAlign="center" numberOfLines={1}>
                        {name}
                    </Typography>
                    <Typography variant="body3Light" textAlign="center" light numberOfLines={2}>
                        {description}
                    </Typography>
                </Col>
            </Col>
            {selectedWallet !== undefined && onWalletChange && (
                <WalletSelector
                    label={translate("signWith")}
                    required
                    name="signer"
                    disabled={loading}
                    onChange={onWalletChange}
                    value={selectedWallet}
                />
            )}
        </Col>
    );
}
