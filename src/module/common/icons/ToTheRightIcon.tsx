import { SvgIcon, SvgIconProps } from "@peersyst/react-native-components";
import { Path } from "react-native-svg";

export function ToTheRightIcon(props: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon
            // @ts-ignore
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
            {...{ testID: "ToTheRightIcon" }}
        >
            <Path d="M7.66397 1L5 3.585L13.6532 12L5 20.415L7.66397 23L19 12L7.66397 1Z" />
        </SvgIcon>
    );
}
