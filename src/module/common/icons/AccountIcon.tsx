import { SvgIcon, SvgIconProps } from "@peersyst/react-native-components";
import { Path } from "react-native-svg";

export function AccountIcon(props: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon
            // @ts-ignore
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
            {...{ testID: "AccountIcon" }}
        >
            <Path d="M22 6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6ZM20 8H4L4 6L20 6V8ZM4 11H20V18L4 18L4 11Z" />
        </SvgIcon>
    );
}
