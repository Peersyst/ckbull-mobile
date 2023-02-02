import styled from "@peersyst/react-native-styled";
import { ActivityTypographyProps } from "module/activity/core/ActivityCard/ActivityCard.types";
import { Typography } from "@peersyst/react-native-components";

export const ActivityStatusLabel = styled(Typography)<ActivityTypographyProps>(({ theme, statusColor }) => ({
    color: statusColor || theme.palette.text,
    lineHeight: 20,
}));

export const ActivityTypography = styled(Typography)(() => ({
    lineHeight: 20,
}));
