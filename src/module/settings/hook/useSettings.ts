import { useRecoilValue } from "recoil";
import settingsState, { SettingsState } from "../state/SettingsState";

export function useSettings(): SettingsState {
    return useRecoilValue(settingsState);
}
