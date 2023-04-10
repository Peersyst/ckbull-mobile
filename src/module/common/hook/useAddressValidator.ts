import { Environments } from "ckb-peersyst-sdk";
import { CkbAddressValidator } from "config/validators/CkbAddressValidator";
import useSelectedNetwork from "module/settings/hook/useSelectedNetwork";

export default function useAddressValidator(): (value: string) => boolean {
    const network = useSelectedNetwork();

    return new CkbAddressValidator("", () => "", network === "mainnet" ? Environments.Mainnet : Environments.Testnet).validate;
}
