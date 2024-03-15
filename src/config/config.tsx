import { CreateConfig, createConfig } from "@peersyst/react-native-components";
import lightTheme from "./theme/lightTheme";
import prodConfig from "./config.prod.json";
import devConfig from "./config.dev.json";
import stagingConfig from "./config.staging.json";
import baseConfig from "./config.base.json";
import { CkbAddressValidator } from "config/validators/CkbAddressValidator";
import { ChevronDownIcon, ToTheRightIcon } from "icons";
import darkTheme from "config/theme/darkTheme";
import Button from "module/common/component/input/Button/Button";
import { MinAmountValidator } from "./validators/MinAmountValidator";
import { MinAmountFromDecimalsValidator } from "./validators/MinAmountFromDecimalsValidator";
import { MaxAmountValidator } from "./validators/MaxAmountValidator";

export const envConfigs: Record<string, CreateConfig> = {
    test: { ...baseConfig, ...devConfig },
    development: { ...baseConfig, ...devConfig },
    production: { ...baseConfig, ...prodConfig },
    staging: { ...baseConfig, ...stagingConfig },
};

const enviroment = process.env;
const envKey = enviroment.CONFIG_ENV || enviroment.NODE_ENV!;

if (!(envKey in envConfigs)) throw new Error(`${envKey} is not a valid env config`);

const envConfig = envConfigs[envKey];

const config = createConfig({
    ...envConfig,
    components: {
        BlockchainAddress: {
            blockchainLinks: {
                mainnetAddress: envConfig.mainnetExplorerLink + "address/",
                mainnetTx: envConfig.mainnetExplorerLink + "transaction/",
                testnetAddress: envConfig.testnetExplorerLink + "address/",
                testnetTx: envConfig.testnetExplorerLink + "transaction/",
            },
        },
        Button: {
            defaultProps: {
                variant: "primary",
                size: "lg",
            },
        },
        Dialog: {
            defaultProps: {
                buttonsLayout: {
                    direction: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 20,
                },
            },
            actions: {
                variant: "filled",
                component: Button,
                fullWidth: true,
            },
        },
        Label: {
            defaultProps: {
                variant: "body2Light",
            },
        },
        FormControlLabel: {
            defaultProps: {
                variant: "body3Regular",
            },
        },
        Modal: {
            defaultProps: {
                showCloseButton: false,
            },
        },
        Select: {
            defaultProps: {
                icon: <ChevronDownIcon />,
            },
        },
        SwipeButton: {
            defaultProps: {
                thumbContent: <ToTheRightIcon />,
            },
        },
        Switch: {
            defaultProps: {
                LabelProps: {
                    alignment: "space-between",
                },
            },
        },
        TextInput: {
            defaultProps: {
                errorElement: false,
            },
        },
    },
    themes: {
        default: lightTheme,
        light: lightTheme,
        dark: darkTheme,
    },
    validators: {
        address: CkbAddressValidator,
        minAmount: MinAmountValidator,
        minAmountFromDecimals: MinAmountFromDecimalsValidator,
        maxAmount: MaxAmountValidator,
    },
});

export default config;
