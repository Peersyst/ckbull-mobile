import { Col, Typography } from "@peersyst/react-native-components";
import Button from "module/common/component/input/Button/Button";
import { useTranslate } from "module/common/hook/useTranslate";
import { OrderCompletedIcon, OrderCompletedRoot } from "./OrderCompleted.styles";
import { OrderCompletedProps } from "./OrderCompleted.types";

export default function OrderCompleted({ title, onClose }: OrderCompletedProps): JSX.Element {
    const translate = useTranslate();

    return (
        <OrderCompletedRoot>
            <Col flex={1} gap={24} alignItems="center" justifyContent="center">
                <OrderCompletedIcon />
                <Typography variant="title3Regular" textAlign="center">
                    {title}
                </Typography>
                <Typography variant="body3Regular" textAlign="center" light>
                    {translate("orderCompletedText")}
                </Typography>
            </Col>
            <Button variant="primary" fullWidth onPress={onClose}>
                {translate("close")}
            </Button>
        </OrderCompletedRoot>
    );
}
