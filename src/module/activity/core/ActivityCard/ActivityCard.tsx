import { Col, Typography } from "@peersyst/react-native-components";
import { ReactElement } from "react";
import { ActivityCardRoot, ActivityDisplay, DefaultActivityAction, Details } from "module/activity/core/ActivityCard/ActivityCard.styles";
import { Pressable, TextStyle, ViewStyle } from "react-native";
import Balance from "module/wallet/component/display/Balance/Balance";
import { BalanceAction } from "module/wallet/component/display/Balance/Balance.types";
import config from "config/config";

interface ActivityCardProps {
    imageUrl: string;
    title: string;
    description: string;
    amount?: number | string;
    amountAction?: BalanceAction;
    details?: string;
    actionElement?: ReactElement;
    onAction?: () => void;
    style?: ViewStyle & { title?: TextStyle; description?: TextStyle; details?: TextStyle; amount?: TextStyle };
}

const ActivityCard = ({
    imageUrl,
    title,
    description,
    details,
    amount,
    amountAction,
    actionElement,
    onAction,
    style: {
        title: titleStyle = {},
        details: detailsStyle = {},
        description: descriptionStyle = {},
        amount: amountStyle = {},
        ...rotStyle
    } = {},
}: ActivityCardProps): JSX.Element => {
    return (
        <ActivityCardRoot style={rotStyle} gap={16}>
            <ActivityDisplay source={{ uri: imageUrl || config.defaultDAppImage }} />
            <Col gap={4} justifyContent="center" flex={1}>
                <Typography variant="body3Regular" style={titleStyle}>
                    {title}
                </Typography>
                <Typography variant="body4Light" style={descriptionStyle} light={!descriptionStyle.color} numberOfLines={2}>
                    {description}
                </Typography>
                {details && (
                    <Details variant="body4Strong" style={detailsStyle}>
                        {details}
                    </Details>
                )}
            </Col>

            {amount && <Balance balance={amount} action={amountAction} variant="body3Strong" units="token" style={amountStyle} />}
            {onAction && (
                <Col justifyContent="center" alignItems="center">
                    <Pressable accessibilityRole="button" onPress={onAction}>
                        {actionElement || <DefaultActivityAction />}
                    </Pressable>
                </Col>
            )}
        </ActivityCardRoot>
    );
};

export default ActivityCard;
