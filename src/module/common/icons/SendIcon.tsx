import { SvgIcon, SvgIconProps } from "@peersyst/react-native-components";
import { Path } from "react-native-svg";

export function SendIcon(props: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon
            // @ts-ignore
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
            {...{ testID: "SendIcon" }}
        >
            <Path d="M9.5 4.5V6.5L16.09 6.5L4.5 18.09L5.91 19.5L17.5 7.91V14.5H19.5V4.5L9.5 4.5Z" />
        </SvgIcon>
    );
}
