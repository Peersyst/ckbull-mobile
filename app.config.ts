import { ExpoConfig, ConfigContext } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
    ...config,
    name: "CKBull",
    slug: "CKBull",
    owner: "peersyst",
    version: "1.1.5",
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
        infoPlist: {
            NSCameraUsageDescription: "This app uses camera for QR code scanning.",
            NSFaceIDUsageDescription: "This app uses biometrics to provide a higher level of security",
        },
        splash: { image: "./assets/images/splash.png", resizeMode: "cover", backgroundColor: "#141414" },
    },
    extra: {
        eas: {
            projectId: "b1dac2fd-013a-4e87-a82e-de40c714f416",
        },
    },
    get android(): ExpoConfig["android"] {
        return {
            package: "com.peersyst.ckbull",
            adaptiveIcon: {
                foregroundImage: "./assets/images/adaptive-icon.png",
                backgroundColor: "#141414",
            },
            versionCode: Number((this.version || "").replace(/\./g, "") + process.env.BUILD_NUMBER) || 0,
            softwareKeyboardLayoutMode: "resize",
            splash: {
                image: "./assets/images/splash.png",
                resizeMode: "cover",
                backgroundColor: "#141414",
            },
        };
    },
    web: {
        favicon: "./assets/images/favicon.png",
    },
    extra: {
        eas: {
            projectId: "b1dac2fd-013a-4e87-a82e-de40c714f416",
        },
    },
});
