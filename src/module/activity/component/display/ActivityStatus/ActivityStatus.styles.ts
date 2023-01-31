import styled from "@peersyst/react-native-styled";
import Typography from "module/common/component/display/Typography/Typography";
import { ActivityTypographyProps } from "module/activity/component/display/ActivityCard/ActivityCard.types";

export const ActivityStatusLabel = styled(Typography)<ActivityTypographyProps>(({ theme, statusColor }) => ({
    color: statusColor || theme.palette.text,
    lineHeight: 20,
}));

export const ActivityTypography = styled(Typography)(() => ({
    lineHeight: 20,
}));
