import "./polyfills";

import Providers from "./Providers";
import Navigator from "./navigator/Navigator";
import { useLoad } from "module/common/query/useLoad";
import LogoPage from "module/common/component/layout/LogoPage/LogoPage";
import { StatusBar, Suspense } from "@peersyst/react-native-components";
import { useRecoilValue } from "recoil";
import settingsState from "module/settings/state/SettingsState";
import { Platform, UIManager, LogBox } from "react-native";
import useCachedResources from "./module/common/hook/useCachedResources";
import "module/api/OpenApiConfig";

if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

LogBox.ignoreLogs(["Setting a timer"]);
LogBox.ignoreLogs(["Require cycles"]);
LogBox.ignoreLogs(["Require cycle:"]);

const App = (): JSX.Element => {
    const loading = useLoad();
    const cachedResourcesLoaded = useCachedResources();
    const { loading: loadingSettings = false } = useRecoilValue(settingsState);

    return (
        <>
            <Suspense fallback={<LogoPage />} isLoading={loading || loadingSettings || !cachedResourcesLoaded}>
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
