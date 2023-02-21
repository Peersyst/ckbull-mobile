import { Col } from "@peersyst/react-native-components";
import HomeSlider from "module/home/component/core/HomeSlider";
import HomeTabs from "../component/navigation/HomeTabs";
import BaseMainScreen from "module/main/component/layout/BaseMainScreen/BaseMainScreen";
import useWalletState from "module/wallet/hook/useWalletState";
import AddWallet from "module/wallet/component/core/AddWallet/AddWallet";

const HomeScreen = (): JSX.Element => {
    const {
        state: { selectedWallet = 0, wallets },
    } = useWalletState();

    return (
        <BaseMainScreen>
            <Col flex={1}>
                <HomeSlider />
                {selectedWallet < wallets.length ? <HomeTabs /> : <AddWallet />}
            </Col>
        </BaseMainScreen>
    );
};

export default HomeScreen;
