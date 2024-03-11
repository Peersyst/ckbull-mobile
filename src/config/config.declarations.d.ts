import "@peersyst/react-native-components";
import { Validator } from "@peersyst/react-native-components";
import { NetworkType } from "module/settings/state/SettingsState";
import { TFunction } from "react-i18next";
import { MaxAmountValidatorOptions } from "./validators/MaxAmountValidator";
import { MinAmountFromDecimalsValidatorOptions } from "./validators/MinAmountFromDecimalsValidator";
import { MinAmountValidatorOptions } from "./validators/MinAmountValidator";
import { TransakOnRampQueryParams } from "@peersyst/react-native-transak";

export interface TransakConfig extends Omit<TransakOnRampQueryParams, "environment"> {
    environment: string;
    enableTransak: boolean;
}

declare module "@peersyst/react-native-components" {
    export interface ConfigTypes {
        TranslateFn: TFunction<"error">;
    }

    export interface Config {
        minimumTransactionAmount: number;
        minimumDaoDeposit: number;
        mainnetExplorerLink: string;
        testnetExplorerLink: string;
        ckbTestnetUrl: string;
        indexerTestnetUrl: string;
        ckbMainnetUrl: string;
        indexerMainnetUrl: string;
        faucetUrl: string;
        testnetExplorerApi: string;
        mainnetExplorerApi: string;
        enableMainnet: boolean;
        tokenName: string;
        newsRSSUrl: string;
        defaultDecimals: number;
        miniUnits: string;
        enableSignerApp: boolean;
        /* signerUrl: url of CKBull Developer Console, if you're running this in a local envirorment add your IP as host. p.e. http://192.168.1.2:3001 */
        signerUrl: string;
        defaultDAppImage: string;
        transak: TransakConfig;
    }

    export interface CreateConfig {
        minimumTransactionAmount: number;
        minimumDaoDeposit: number;
        mainnetExplorerLink: string;
        testnetExplorerLink: string;
        ckbTestnetUrl: string;
        indexerTestnetUrl: string;
        ckbMainnetUrl: string;
        indexerMainnetUrl: string;
        faucetUrl: string;
        testnetExplorerApi: string;
        mainnetExplorerApi: string;
        enableMainnet: boolean;
        tokenName: string;
        newsRSSUrl: string;
        defaultDecimals: number;
        miniUnits: string;
        enableSignerApp: boolean;
        signerUrl: string;
        defaultDAppImage: string;
        transak: TransakConfig;
    }

    export interface ExtraValidators {
        address: Validator<NetworkType>;
        minAmount: Validator<MinAmountValidatorOptions>;
        maxAmount: Validator<MaxAmountValidatorOptions>;
        minAmountFromDecimals: Validator<MinAmountFromDecimalsValidatorOptions>;
    }

    export interface BlockchainLinksTypesOverrides {
        address: false;
        tx: false;
        mainnetAddress: true;
        mainnetTx: true;
        testnetAddress: true;
        testnetTx: true;
    }
    export interface BlockchainLinks {
        address: undefined;
        tx: undefined;
        mainnetAddress: string;
        mainnetTx: string;
        testnetAddress: string;
        testnetTx: string;
    }
}
