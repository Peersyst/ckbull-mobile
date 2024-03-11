import { TransakOnRampWebView } from "@peersyst/react-native-transak";
import useTrasakOnRamp from "./hook/useTransakOnRamp";

function BuyWithTransak(): JSX.Element {
    const props = useTrasakOnRamp();
    return <TransakOnRampWebView {...props} />;
}

export default BuyWithTransak;
