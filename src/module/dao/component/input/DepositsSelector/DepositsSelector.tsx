import { DAOUnlockableAmount } from "ckb-peersyst-sdk";
import DepositItem from "./DepositItem/DepositItem";
import { convertShannonsToCKB } from "module/wallet/utils/convertShannonsToCKB";
import Select, { SelectProps } from "module/common/component/input/Select/Select";
import { useTranslate } from "module/common/hook/useTranslate";
import { config } from "config";
import EmptyDepositsComponent from "./EmptyDepositsComponent/EmptyDepositsComponent";
import { DepositItemBalance } from "./DepositItem/DepositItem.styles";
import { useDepositsSelect } from "./hooks/useDepositsSelector";

interface DepositsSelectorProps
    extends Omit<SelectProps<number>, "options" | "children" | "renderValue" | "icon" | "placeholder" | "title" | "multiple"> {
    deposits: DAOUnlockableAmount[];
    loading?: boolean;
}

const DepositsSelector = ({
    deposits,
    value,
    onChange,
    disabled: disabledProp,
    hint: hintProp,
    loading,
    ...rest
}: DepositsSelectorProps): JSX.Element => {
    const translate = useTranslate();
    const { selectedIndex, onChangeDeposit, disabled, currentDeposit, hint } = useDepositsSelect({ deposits, value, onChange });
    const depositAmount = convertShannonsToCKB(currentDeposit?.amount || 0);
    const showEmptyDeposits = deposits.length === 0;

    return showEmptyDeposits ? (
        <EmptyDepositsComponent loading={loading} />
    ) : (
        <Select
            value={selectedIndex}
            onChange={onChangeDeposit}
            disabled={disabledProp || disabled}
            renderValue={() => (
                <DepositItemBalance
                    units={config.tokenName}
                    balance={depositAmount}
                    variant="body2Light"
                    unlockable={currentDeposit.unlockable}
                    selected={false}
                    type={currentDeposit.type}
                />
            )}
            title={translate("select_deposit")}
            hint={hintProp || hint}
            {...rest}
        >
            {deposits.map((deposit, index) => {
                return <DepositItem deposit={deposit} key={index} selectedIndex={selectedIndex} value={index} />;
            })}
        </Select>
    );
};

export default DepositsSelector;
