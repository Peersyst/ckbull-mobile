import useGetBalance from "module/wallet/query/useGetBalance";
import WalletCard, { WalletComponentCardProps } from "module/wallet/component/surface/WalletCard/WalletCard";
import AccountCardButtons from "module/wallet/component/core/AccountCard/AccountCardButtons";
import FiatCKBBalance from "../../display/FiatCKBBalance/FiatCKBBalance";

const AccountCard = ({ wallet, style }: WalletComponentCardProps): JSX.Element => {
    const { index, synchronizingCells } = wallet;
    const { data: { freeBalance = 0 } = {}, isLoading: isBalanceLoading } = useGetBalance(index);

    const isLoading = synchronizingCells || isBalanceLoading;

    return (
        <WalletCard wallet={wallet} style={style}>
            {{
                content: (
                    <FiatCKBBalance
                        style={{ width: "100%" }}
                        loading={isLoading}
                        options={{ maximumFractionDigits: 2 }}
                        balance={freeBalance}
                        variant="h1Strong"
                    />
                ),
                footer: <AccountCardButtons />,
            }}
        </WalletCard>
    );
};

export default AccountCard;
