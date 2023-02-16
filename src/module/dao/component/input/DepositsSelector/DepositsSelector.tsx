import { DAOUnlockableAmount } from "ckb-peersyst-sdk";
import { useControlled } from "@peersyst/react-hooks";
import { Suspense } from "@peersyst/react-native-components";
import Balance from "module/wallet/component/display/Balance/Balance";
import { Typography } from "@peersyst/react-native-components";
import DepositItem from "./DepositItem";
import { DepositItemText } from "./DepositItem.styles";
import { convertShannonsToCKB } from "module/wallet/utils/convertShannonsToCKB";
import Select, { SelectProps } from "module/common/component/input/Select/Select";
import { useTranslate } from "module/common/hook/useTranslate";
import { config } from "config";

interface DepositsSelectorProps
    extends Omit<SelectProps<number>, "options" | "children" | "renderValue" | "icon" | "placeholder" | "title" | "multiple"> {
    deposits: DAOUnlockableAmount[];
}

const EmptyDepositsComponent = () => {
    const translate = useTranslate();
    return <Typography variant="body2Light">{translate("no_deposits")}</Typography>;
};

const DepositsSelector = ({ deposits, value, onChange, ...rest }: DepositsSelectorProps): JSX.Element => {
    const [selectedIndex, setSelectedIndex] = useControlled(0, value as number, onChange);
    const translate = useTranslate();
    const handleItemChange = (i: unknown) => {
        setSelectedIndex(i as number);
    };

    const currentDeposit: DAOUnlockableAmount | undefined = deposits[selectedIndex];

    return (
        <Select
            value={selectedIndex}
            onChange={handleItemChange}
            disabled={deposits.length === 0}
            renderValue={() => {
                return currentDeposit === undefined ? (
                    <EmptyDepositsComponent />
                ) : (
                    <DepositItemText
                        as={Balance}
                        units={config.tokenName}
                        balance={convertShannonsToCKB(currentDeposit.amount)}
                        variant="body2Light"
                        unlockable={deposits[selectedIndex].unlockable}
                        selected={false}
                        type={deposits[selectedIndex].type}
                    />
                );
            }}
            title={translate("select_deposit")}
            {...rest}
        >
            {deposits.map(({ remainingCycleMinutes, amount, unlockable, compensation, type }, index) => {
                return (
                    <DepositItem
                        type={type}
                        compensation={compensation}
                        remainingCycleMinutes={remainingCycleMinutes}
                        amount={amount}
                        unlockable={unlockable}
                        key={index}
                        selectedIndex={selectedIndex}
                        value={index}
                    />
                );
            })}
        </Select>
    );
};

export default DepositsSelector;
