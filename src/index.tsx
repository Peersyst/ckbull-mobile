import Providers from "./Providers";
import Navigator from "./navigator/Navigator";
import { useLoad } from "module/common/query/useLoad";
import LogoPage from "module/common/component/layout/LogoPage/LogoPage";
import { StatusBar, Suspense } from "@peersyst/react-native-components";
import { useRecoilValue } from "recoil";
import settingsState from "module/settings/state/SettingsState";
import { Platform, UIManager } from "react-native";
/**
 * URL polyfill
 * @see https://github.com/facebook/react-native/blob/1e9f63fe277c42d812ef007ced7eff1688602b62/Libraries/Blob/URL.js#L131-L133
 * @see https://github.com/facebook/react-native/issues/23922#issuecomment-648096619
 */
import "react-native-url-polyfill/auto";

if (typeof BigInt === "undefined") global.BigInt = require("big-integer");

if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

const App = (): JSX.Element => {
    const loading = useLoad();
    const { loading: loadingSettings = false } = useRecoilValue(settingsState);

    return (
        <>
            <Suspense fallback={<LogoPage />} isLoading={loading || loadingSettings}>
                <Navigator />
            </Suspense>
            <StatusBar appearance="dark" />
        </>
    );
};

export default function Root(): JSX.Element {
    return (
        <Providers>
            <App />
        </Providers>
    );
}
