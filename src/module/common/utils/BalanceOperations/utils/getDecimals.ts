export const getDecimals = (num: string | number | bigint) => {
    const decimals = num.toString().split(".")[1];
    return decimals ? decimals.length : 0;
};
