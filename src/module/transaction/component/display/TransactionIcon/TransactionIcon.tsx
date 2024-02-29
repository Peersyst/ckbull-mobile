import { TransactionIconRoot, TxIcon } from "./TransactionIcon.styles";
import { TransactionIconProps } from "./TransactionIcon.types";
import { TX_ICON } from "./txIcons";

const TransactionIcon = ({ type }: TransactionIconProps): JSX.Element => {
    const { Icon, active } = TX_ICON[type] || {};
    return (
        <TransactionIconRoot active={active} alignItems="center" justifyContent="center">
            <TxIcon active={active}>{Icon && <Icon />}</TxIcon>
        </TransactionIconRoot>
    );
};

export default TransactionIcon;
