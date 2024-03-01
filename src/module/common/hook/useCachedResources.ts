import { FontAwesome } from "@expo/vector-icons";
import { DrukTextWide_Heavy, AktivGrotesk_Medium, AktivGrotesk_Regular, AktivGrotesk_Bold } from "../../../asset/fonts";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { i18nexInitializationPromise } from "locale";

export default function useCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = useState(false);

    // Load any resources or data that we need prior to rendering the app
    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync();

                // Load fonts
                await Promise.all([
                    Font.loadAsync({
                        ...FontAwesome.font,
                        DrukTextWide_Heavy,
                        AktivGrotesk_Regular,
                        AktivGrotesk_Medium,
                        AktivGrotesk_Bold,
                    }),
                    i18nexInitializationPromise,
                ]);
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                // eslint-disable-next-line no-console
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    return isLoadingComplete;
}
