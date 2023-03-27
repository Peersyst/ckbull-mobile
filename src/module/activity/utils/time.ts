interface GetTimeReturn {
    hours: number;
    minutes: number;
    seconds: number;
}

export const getTimeFromSeconds = (totalSeconds: number): GetTimeReturn => {
    const intSeconds = Math.floor(totalSeconds / 1000);
    const seconds = intSeconds % 60;
    const totalMinutes = Math.floor(intSeconds / 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return {
        hours,
        minutes,
        seconds,
    };
};
