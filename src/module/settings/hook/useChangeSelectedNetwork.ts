import settingsState, { NetworkType } from "module/settings/state/SettingsState";
import { useSetRecoilState } from "recoil";

export default function (): (network: NetworkType) => void {
    const setSettingsState = useSetRecoilState(settingsState);
    return (network) => setSettingsState((state) => ({ ...state, network }));
}
