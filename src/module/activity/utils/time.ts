interface GetTimeReturn {
    hours: number;
    minutes: number;
    seconds: number;
}

export const getTimeFromSeconds = (totalSeconds: number): GetTimeReturn => {
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return {
        hours,
        minutes,
        seconds,
    };
};
