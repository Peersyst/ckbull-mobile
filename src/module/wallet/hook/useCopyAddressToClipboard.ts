import useServiceInstance from "module/wallet/hook/useServiceInstance";
import useCopyToClipboard from "module/common/hook/useCopyToClipboard";

export default function (): () => void {
    const { serviceInstance } = useServiceInstance();
    const copyToClipboard = useCopyToClipboard();

    return () => copyToClipboard(serviceInstance?.getAddress() || "");
}
