import { DataRow } from "ckb-peersyst-sdk";
import { useTranslate } from "module/common/hook/useTranslate";
import TransactionDetail from "./TransactionDetail";
import { Row, Typography } from "@peersyst/react-native-components";
import Balance from "module/wallet/component/display/Balance/Balance";
import BlockchainAddress from "module/common/component/display/BlockchainAddress/BlockchainAddress";
import { useMemo } from "react";

export interface TransactionCellDetailsProps {
    data: DataRow[];
    title: string;
}

export default function TransactionCellDetails({ data, title }: TransactionCellDetailsProps): JSX.Element {
    const translate = useTranslate();

    const cellMap = useMemo(() => {
        const _cellMap = new Map<string, number>();
        for (const cell of data) {
            const currentValue = _cellMap.get(cell.address);
            if (currentValue !== undefined) {
                _cellMap.set(cell.address, currentValue + cell.quantity);
            } else {
                _cellMap.set(cell.address, cell.quantity);
            }
        }
        return _cellMap;
    }, [data]);

    const cells = Array.from(cellMap.keys());

    return (
        <TransactionDetail title={title}>
            {cells.length ? (
                cells.map((address, key) => (
                    <Row key={key} flex={1} justifyContent="space-between" alignItems="center">
                        <BlockchainAddress address={address} type="address" variant="body3Regular" length={6} showCopyIcon />
                        <Balance
                            options={{ maximumFractionDigits: 2 }}
                            balance={cellMap.get(address) || 0}
                            units="token"
                            variant="body3Regular"
                        />
                    </Row>
                ))
            ) : (
                <Typography variant="body3Regular">{translate("unknown")}</Typography>
            )}
        </TransactionDetail>
    );
}
