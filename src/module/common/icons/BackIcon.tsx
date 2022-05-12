import { SvgIcon, SvgIconProps } from "react-native-components";
import { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

export function BackIcon(props: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon
            // @ts-ignore
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
            {...{ testID: "BackIcon" }}
        >
            <G clipPath="url(#clip0_5_24)">
                <Path
                    d="M15.7241 23.4711L5.5289 13.2759C5.3613 13.1084 5.22835 12.9095 5.13764 12.6905C5.04693 12.4716 5.00024 12.237 5.00024 12C5.00024 11.763 5.04693 11.5284 5.13764 11.3095C5.22835 11.0905 5.3613 10.8916 5.5289 10.7241L15.7241 0.528899C16.0625 0.190615 16.5214 0.000611753 16.9999 0.000686668C17.4784 0.000761582 17.9372 0.190909 18.2755 0.529298C18.6138 0.867688 18.8038 1.3266 18.8037 1.80508C18.8036 2.28356 18.6135 2.74241 18.2751 3.0807L9.3558 12L18.2759 20.9201C18.6066 21.2599 18.7903 21.7163 18.787 22.1905C18.7838 22.6647 18.594 23.1186 18.2587 23.4539C17.9234 23.7892 17.4695 23.979 16.9953 23.9822C16.5211 23.9855 16.0647 23.8018 15.7249 23.4711"
                    fillOpacity="0.94"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_5_24">
                    <Rect width="13.804" height="24" transform="translate(5)" />
                </ClipPath>
            </Defs>
        </SvgIcon>
    );
}
