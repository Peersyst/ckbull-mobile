import { Wallet } from "module/wallet/state/WalletState";
import { ReactElement } from "react";
import { WalletCardRoot } from "module/wallet/component/surface/WalletCard/WalletCard.styles";
import { Col, ThemeOverrideProvider, Typography, TypographyProps, useTheme } from "@peersyst/react-native-components";
import { getLuminance } from "@peersyst/react-utils";
import { ViewStyle } from "react-native";

export interface WalletCardProps {
    wallet: Wallet;
    nameVariant?: TypographyProps["variant"];
    children: { content: ReactElement; footer?: ReactElement };
    style?: ViewStyle;
}

export type WalletComponentCardProps = Pick<WalletCardProps, "wallet" | "style">;

const WalletCard = ({
    wallet: { colorIndex, name },
    nameVariant = "title5Light",
    children: { content, footer },
    style,
}: WalletCardProps): JSX.Element => {
    const { palette } = useTheme();
    const walletColor = palette.wallet[colorIndex ? colorIndex : 0];

    return (
        <ThemeOverrideProvider theme={getLuminance(walletColor) > 0.5 ? "light" : "dark"}>
            <WalletCardRoot color={walletColor} justifyContent="space-between" style={style}>
                <Col style={{ width: "100%" }} gap={"2.5%"} justifyContent="center">
                    <Typography variant={nameVariant}>{name}</Typography>
                    {content}
                </Col>
                {footer}
            </WalletCardRoot>
        </ThemeOverrideProvider>
    );
};

export default WalletCard;
