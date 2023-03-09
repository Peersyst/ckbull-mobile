import { defaultSettingsState, FeeType, FiatCurrencyType, NetworkType, SettingsState } from "module/settings/state/SettingsState";
import BaseMock from "../base.mock";
import { LocaleType } from "locale";
import * as UseSettings from "module/settings/hook/useSettings";

export class UseSettingsMock extends BaseMock implements SettingsState {
    locale?: LocaleType;
    fiat: FiatCurrencyType;
    network: NetworkType;
    fee: FeeType;
    loading?: boolean;
    biometrics: boolean;

    constructor({ locale, fiat, network, fee, loading, biometrics }: Partial<SettingsState> = {}) {
        super();
        this.locale = locale || defaultSettingsState["locale"];
        this.fiat = fiat || defaultSettingsState["fiat"];
        this.network = network || defaultSettingsState["network"];
        this.fee = fee || defaultSettingsState["fee"];
        this.loading = loading || defaultSettingsState["loading"];
        this.biometrics = biometrics || defaultSettingsState["biometrics"];
        this.mock = jest.spyOn(UseSettings, "useSettings").mockReturnValue(this);
    }
}
