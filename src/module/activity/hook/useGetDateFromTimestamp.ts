import { useTranslate } from "module/common/hook/useTranslate";

export interface UseGetDateFromTimestamp {
    formatDate: (date: number) => string;
}

export default function (): UseGetDateFromTimestamp {
    const translate = useTranslate();

    const formatDate = (date: number): string => {
        const currentDate = new Date(date);
        const now = new Date();
        if (
            currentDate.getFullYear() === now.getFullYear() &&
            currentDate.getMonth() === now.getMonth() &&
            currentDate.getDay() === now.getDay()
        )
            return translate("today");
        else return currentDate.getDay() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear();
    };

    return { formatDate };
}
