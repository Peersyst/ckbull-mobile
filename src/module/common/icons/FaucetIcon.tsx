import { SvgIcon, SvgIconProps } from "react-native-components";
import { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

export function FaucetIcon(props: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon
            // @ts-ignore
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
            {...{ testID: "FaucetIcon" }}
        >
            <G clipPath="url(#clip0_751_124)">
                <Path d="M16.5 12H14.6902C13.9538 11.37 13.028 10.9186 12 10.6875V8.45813L10.5 8.29969L9 8.45813V10.6875C7.97203 10.9219 7.04625 11.3719 6.30984 12H0.75C0.551088 12 0.360322 12.079 0.21967 12.2197C0.0790176 12.3603 0 12.5511 0 12.75L0 17.25C0 17.4489 0.0790176 17.6397 0.21967 17.7803C0.360322 17.921 0.551088 18 0.75 18H5.09953C6.06469 19.7686 8.10938 21 10.5 21C12.8906 21 14.9353 19.7686 15.9005 18H16.5C16.8978 18 17.2794 18.158 17.5607 18.4393C17.842 18.7206 18 19.1022 18 19.5C18 19.8978 18.158 20.2794 18.4393 20.5607C18.7206 20.842 19.1022 21 19.5 21H22.5C22.8978 21 23.2794 20.842 23.5607 20.5607C23.842 20.2794 24 19.8978 24 19.5C24 17.5109 23.2098 15.6032 21.8033 14.1967C20.3968 12.7902 18.4891 12 16.5 12ZM3.82453 7.49578L10.5 6.79266L17.1755 7.49578C17.617 7.54266 18 7.17656 18 6.70828V5.29172C18 4.82297 17.617 4.45734 17.1755 4.50375L12 5.05031V3.75C12 3.55109 11.921 3.36032 11.7803 3.21967C11.6397 3.07902 11.4489 3 11.25 3H9.75C9.55109 3 9.36032 3.07902 9.21967 3.21967C9.07902 3.36032 9 3.55109 9 3.75V5.05031L3.82453 4.50375C3.38297 4.45734 3 4.82344 3 5.29172V6.70828C3 7.17656 3.38297 7.54266 3.82453 7.49578V7.49578Z" />
            </G>
            <Defs>
                <ClipPath id="clip0_751_124">
                    <Rect width="24" height="24" />
                </ClipPath>
            </Defs>
        </SvgIcon>
    );
}
