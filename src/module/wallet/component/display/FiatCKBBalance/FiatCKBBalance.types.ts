import { BalanceProps } from "../Balance/Balance.types";

export type FiatCKBBalanceProps = Omit<BalanceProps, "units" | "unitsPosition">;

export type FiatCKBBalanceDynamicProps = Pick<BalanceProps, "units" | "balance" | "unitsPosition">;
