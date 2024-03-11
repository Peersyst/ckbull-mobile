import "core-js";

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

/* eslint-enable @typescript-eslint/no-empty-function */
/* eslint-enable no-console */

/*
jest.mock("react-native-reanimated", () => {
    const Reanimated = require("react-native-reanimated/mock");

    // The mock for `call` immediately calls the callback which is incorrect
    // So we override it with a no-op
    Reanimated.default.call = () => undefined;

    return Reanimated;
});*/

import "react-native-gesture-handler/jestSetup";

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

jest.mock("react-native-webview", () => {
    return {
        WebView: <></>,
    };
});

jest.mock("@peersyst/react-native-components", () => {
    return {
        __esModule: true,
        ...jest.requireActual("@peersyst/react-native-components"),
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
