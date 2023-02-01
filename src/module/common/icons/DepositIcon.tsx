import { SvgIcon, SvgIconProps } from "@peersyst/react-native-components";
import { Path } from "react-native-svg";

export function DepositIcon(props: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon
            // @ts-ignore
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
            {...{ testID: "DepositIcon" }}
        >
            <Path d="M14.5 19.5V17.5L7.91 17.5L19.5 5.91L18.09 4.5L6.5 16.09L6.5 9.5H4.5L4.5 19.5L14.5 19.5Z" />
        </SvgIcon>
    );
}
