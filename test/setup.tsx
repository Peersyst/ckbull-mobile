import "core-js";

import "@testing-library/jest-native";

import "@testing-library/jest-native/extend-expect";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

// Mock AsyncStorage
jest.mock("@react-native-async-storage/async-storage", () => require("@react-native-async-storage/async-storage/jest/async-storage-mock"));

// Turn off network queries error logging
/* eslint-disable no-console  */
/* eslint-disable @typescript-eslint/no-empty-function */
import { setLogger } from "react-query";
setLogger({
    log: console.log,
    warn: console.warn,
    error: () => {},
});

import "react-native-gesture-handler/jestSetup";
import { BackdropProps } from "@peersyst/react-native-components";

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

jest.mock("@react-navigation/native", () => ({
    __esModule: true,
    ...jest.requireActual("@react-navigation/native"),
}));

jest.mock("expo-localization", () => ({
    ...jest.requireActual("expo-localization"),
    digitGroupingSeparator: ",",
    decimalSeparator: ".",
    getLocales: () => ["en-US"],
    locale: "en-US",
}));

jest.mock("react-native/Libraries/LogBox/LogBox", () => ({
    __esModule: true,
    default: {
        ignoreLogs: jest.fn(),
        ignoreAllLogs: jest.fn(),
    },
}));

jest.mock("react-native-webview", () => {
    return {
        WebView: <></>,
    };
});

jest.mock("@peersyst/react-native-components", () => {
    const MockBackdrop = ({ children, onOpen, onClose, onExited, onEntered }: BackdropProps) => {
        const handleClose = () => {
            onClose?.();
            onExited?.();
        };
        onOpen?.();
        onEntered?.();
        return <>{typeof children === "function" ? children(true, jest.fn(handleClose)) : children}</>;
    };
    return {
        __esModule: true,
        ...jest.requireActual("@peersyst/react-native-components"),
        Backdrop: MockBackdrop,
    };
});

jest.mock("@peersyst/react-native-transak", () => {
    return {
        __esModule: true,
        ...jest.requireActual("@peersyst/react-native-transak"),
        TransakOnRampWebView: () => <></>,
    };
});

jest.mock("@peersyst/react-native-transak", () => {
    return {
        __esModule: true,
        ...jest.requireActual("@peersyst/react-native-transak"),
        TransakOnRampWebView: () => <></>,
    };
});

jest.mock("module/settings/hook/useSelectedNetwork", () => {
    return () => "testnet";
});

// react-native-reanimated mock
(global as any).ReanimatedDataMock = {
    now: () => 0,
};
