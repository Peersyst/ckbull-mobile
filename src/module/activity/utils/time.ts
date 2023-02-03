interface GetTimeReturn {
    hours: number;
    minutes: number;
    seconds: number;
}

export const getTimeFromSeconds = (seconds: number): GetTimeReturn => {
    const formattedSeconds = seconds % 60;
    const totalMinutes = Math.floor(seconds / 60);
    const formattedHours = Math.floor(totalMinutes / 60);
    const formattedMinutes = totalMinutes % 60;

    return {
        hours: formattedHours,
        minutes: formattedMinutes,
        seconds: formattedSeconds,
    };
};
