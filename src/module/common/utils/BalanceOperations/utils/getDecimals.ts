export const getDecimals = (num: string | number | bigint) => {
    const [_, decimals] = num.toString().split(".");
    return decimals ? decimals.length : 0;
};
