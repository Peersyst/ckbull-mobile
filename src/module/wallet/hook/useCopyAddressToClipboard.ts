import useCopyToClipboard from "module/common/hook/useCopyToClipboard";
import useWalletAddress from "./useWalletAddress";

export default function (): () => void {
    const walletAddress = useWalletAddress();
    const copyToClipboard = useCopyToClipboard();

    return () => copyToClipboard(walletAddress || "");
}
