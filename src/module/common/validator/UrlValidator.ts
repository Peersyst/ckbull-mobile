import { BaseValidator } from "react-native-components";
import { translate } from "locale";

export class UrlValidator extends BaseValidator {
    constructor(message?: string) {
        super(message || translate("invalid_url"));
    }

    validate(value: string): boolean {
        return !!value.match(/https?:\/\/[a-zA-Z0-9-]+\.[^\s]{2,}/);
    }
}
