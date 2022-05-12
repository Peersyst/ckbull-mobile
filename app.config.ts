import { ExpoConfig, ConfigContext } from "@expo/config";
import "dotenv/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
    ...config,
    name: "CKBull",
    slug: "CKBull",
    owner: "peersyst",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/ckbull-icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
        image: "./assets/images/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff",
    },
    updates: {
        fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
        supportsTablet: false,
        bundleIdentifier: "com.peersyst.ckbull",
        buildNumber: process.env.BUILD_NUMBER || "0",
        config: {
            usesNonExemptEncryption: false,
        },
        icon: "./assets/images/adaptive-icon.png",
    },
    android: {
        package: "com.peersyst.ckbull",
        adaptiveIcon: {
            foregroundImage: "./assets/images/adaptive-icon.png",
            backgroundColor: "#ffffff",
        },
        versionCode: Number(process.env.BUILD_NUMBER) || 0,
        softwareKeyboardLayoutMode: "pan",
    },
    web: {
        favicon: "./assets/images/favicon.png",
    },
});
