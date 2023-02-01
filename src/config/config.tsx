import { CreateConfig, createConfig } from "@peersyst/react-native-components";
import lightTheme from "./theme/lightTheme";
import prodConfig from "./config.prod.json";
import devConfig from "./config.dev.json";
import stagingConfig from "./config.staging.json";
import baseConfig from "./config.base.json";
import { CkbAddressValidator } from "config/validators/CkbAddressValidator";
import globalStyles from "config/globalStyles";
import { ChevronDownIcon } from "icons";
import darkTheme from "config/theme/darkTheme";

const envConfigs: Record<string, CreateConfig> = {
    test: { ...baseConfig, ...devConfig },
    development: { ...baseConfig, ...devConfig },
    production: { ...baseConfig, ...prodConfig },
    staging: { ...baseConfig, ...stagingConfig },
};

const environment = process.env;
const envKey = environment.REACT_APP_ENV_CONFIG || environment.NODE_ENV!;

if (!(envKey in envConfigs)) throw new Error(`${envKey} is not a valid env config`);

const envConfig = envConfigs[envKey];

const config = createConfig({
    ...envConfig,
    components: {
        BlockchainAddress: {
            blockchainLinks: {
                mainnetAddress: envConfig.mainnetExplorerApi + "address/",
                mainnetTx: envConfig.mainnetExplorerApi + "transaction/",
                testnetAddress: envConfig.testnetExplorerApi + "address/",
                testnetTx: envConfig.testnetExplorerApi + "transaction/",
            },
        },
        Button: {
            defaultProps: {
                variant: "primary",
                size: "lg",
            },
        },
        Label: {
            defaultProps: {
                variant: "body2Strong",
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
    },
    globalStyles,
});

export default config;
