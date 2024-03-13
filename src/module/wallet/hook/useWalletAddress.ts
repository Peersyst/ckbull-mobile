import useServiceInstance from "module/wallet/hook/useServiceInstance";

export default function (walletIndex?: number): string | undefined {
    const { serviceInstance } = useServiceInstance(walletIndex);
    return serviceInstance?.getAddress();
}
