import { SvgIcon, SvgIconProps } from "@peersyst/react-native-components";
import { Path } from "react-native-svg";

export function ActivityIcon(props: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon
            // @ts-ignore
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
            {...{ testID: "ActivityIcon" }}
        >
            <Path
                d="M9.5 11.5C10.0523 11.5 10.5 11.0523 10.5 10.5C10.5 9.94772 10.0523 9.5 9.5 9.5C8.94772 9.5 8.5 9.94772 8.5 10.5C8.5 11.0523 8.94772 11.5 9.5 11.5Z"
                fillOpacity="0.4"
            />
            <Path
                d="M11.5 10.5C11.5 9.94772 11.9477 9.5 12.5 9.5H15.5C16.0523 9.5 16.5 9.94772 16.5 10.5C16.5 11.0523 16.0523 11.5 15.5 11.5H12.5C11.9477 11.5 11.5 11.0523 11.5 10.5Z"
                fillOpacity="0.4"
            />
            <Path
                d="M12.5 12.5C11.9477 12.5 11.5 12.9477 11.5 13.5C11.5 14.0523 11.9477 14.5 12.5 14.5H15.5C16.0523 14.5 16.5 14.0523 16.5 13.5C16.5 12.9477 16.0523 12.5 15.5 12.5H12.5Z"
                fillOpacity="0.4"
            />
            <Path
                d="M12.5 15.5C11.9477 15.5 11.5 15.9477 11.5 16.5C11.5 17.0523 11.9477 17.5 12.5 17.5H15.5C16.0523 17.5 16.5 17.0523 16.5 16.5C16.5 15.9477 16.0523 15.5 15.5 15.5H12.5Z"
                fillOpacity="0.4"
            />
            <Path
                d="M10.5 13.5C10.5 14.0523 10.0523 14.5 9.5 14.5C8.94772 14.5 8.5 14.0523 8.5 13.5C8.5 12.9477 8.94772 12.5 9.5 12.5C10.0523 12.5 10.5 12.9477 10.5 13.5Z"
                fillOpacity="0.4"
            />
            <Path
                d="M9.5 17.5C10.0523 17.5 10.5 17.0523 10.5 16.5C10.5 15.9477 10.0523 15.5 9.5 15.5C8.94772 15.5 8.5 15.9477 8.5 16.5C8.5 17.0523 8.94772 17.5 9.5 17.5Z"
                fillOpacity="0.4"
            />
            <Path
                d="M9.5 2C8.94772 2 8.5 2.44772 8.5 3H6.5C5.39543 3 4.5 3.89543 4.5 5V20C4.5 21.1046 5.39543 22 6.5 22H18.5C19.6046 22 20.5 21.1046 20.5 20V5C20.5 3.89543 19.6046 3 18.5 3H16.5C16.5 2.44772 16.0523 2 15.5 2H9.5ZM16.5 5H18.5V20H6.5V5H8.5V6C8.5 6.55228 8.94772 7 9.5 7H15.5C16.0523 7 16.5 6.55228 16.5 6V5ZM10.5 5V4H14.5V5H10.5Z"
                fillOpacity="0.4"
            />
        </SvgIcon>
    );
}
