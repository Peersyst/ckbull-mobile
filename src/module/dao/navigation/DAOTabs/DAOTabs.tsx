import MainTabs from "../../../main/component/navigation/MainTabs/MainTabs";
import DAOCompletedWithdrawalsList from "module/dao/component/core/DAOCompletedWithdrawalsList/DAOCompletedWithdrawalsList";
import DAODepositsList from "module/dao/component/core/DAODepositsList/DAODepositsList";
import { useTranslate } from "module/common/hook/useTranslate";
import { TabItem } from "module/common/component/navigation/BaseTabs/BaseTabs.types";
import TransactionRequest from "module/activity/component/display/TransactionRequest/TransactionRequest";
import { TransactionType } from "module/sdk";

const DAOTabs = (): JSX.Element => {
    const translate = useTranslate();
    const DAOTabs: TabItem[] = [
        {
            title: translate("deposits"),
            item: <DAODepositsList />,
        },
        {
            title: translate("withdrawals"),
            item: <DAOCompletedWithdrawalsList />,
        },
        {
            title: "Connected Sites",
            item: (
                <TransactionRequest
                    transaction={{
                        transactionToken: "0",
                        status: "expired",
                        transaction: { amount: 4234, type: TransactionType.RECEIVE_TOKEN },
                        expiresAt: 234234,
                        createdAt: 0,
                        app: { title: "Figma" },
                        token: "token",
                    }}
                />
            ),
        },
    ];
    return <MainTabs tabs={DAOTabs} />;
};

export default DAOTabs;
