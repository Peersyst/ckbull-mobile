import { Environments } from "ckb-peersyst-sdk";
import { CkbAddressValidator } from "config/validators/CkbAddressValidator";
import useSelectedNetwork from "module/settings/hook/useSelectedNetwork";

export default function useAddressValidator(): (value: string) => boolean {
    const network = useSelectedNetwork();

    const testnetAddressValidator = new CkbAddressValidator("", () => "", Environments.Testnet);
    const mainnetAddressValidator = new CkbAddressValidator("", () => "", Environments.Mainnet);

    return network === "mainnet" ? mainnetAddressValidator.validate : testnetAddressValidator.validate;
}
