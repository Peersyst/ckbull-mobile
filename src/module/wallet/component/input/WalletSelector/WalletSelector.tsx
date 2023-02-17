import Select, { SelectProps } from "module/common/component/input/Select/Select";
import useWalletState from "module/wallet/hook/useWalletState";
import WalletItem from "./WalletItem";
import WalletSelectorItem from "./WalletSelectorItem";
import { useTranslate } from "module/common/hook/useTranslate";
import { useWalletSelect } from "module/wallet/hook/useWalletSelect";

export type WalletSelectorProps = Omit<
    SelectProps<number>,
    "options" | "children" | "renderValue" | "icon" | "placeholder" | "title" | "multiple"
> & {
    minAmount?: string | number | bigint; //In CKBytes
};

const WalletSelector = ({
    style,
    value,
    onChange,
    defaultValue,
    minAmount,
    error: errorProp,
    hideError: hideErrorProp,
    ...rest
}: WalletSelectorProps): JSX.Element => {
    const { selectedIndex, setWalletIndex, selectedWallet, wallets, error, hideError } = useWalletSelect({
        value,
        onChange,
        defaultValue,
        minAmount,
    });
    const translate = useTranslate();

    function renderValue() {
        return selectedWallet && <WalletItem index={selectedWallet.index} />;
    }

    return (
        <Select
            value={selectedIndex}
            error={errorProp || error}
            hideError={hideErrorProp || hideError}
            onChange={setWalletIndex}
            style={style}
            title={translate("select_a_wallet")}
            placeholder={translate("no_account_selected")}
            renderValue={renderValue}
            {...rest}
        >
            {wallets.map(({ index: walletIndex }, index) => {
                return <WalletSelectorItem walletIndex={walletIndex} key={index} />;
            })}
        </Select>
    );
};

export default WalletSelector;
