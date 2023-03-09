import AccountCard from "module/wallet/component/core/AccountCard/AccountCard";
import WalletSlider from "module/wallet/component/core/WalletSlider/WalletSlider";
import DarkThemeProvider from "module/common/component/util/ThemeProvider/DarkThemeProvider";

const HomeSlider = (): JSX.Element => (
    <DarkThemeProvider>
        <WalletSlider Card={AccountCard} />
    </DarkThemeProvider>
);

export default HomeSlider;
