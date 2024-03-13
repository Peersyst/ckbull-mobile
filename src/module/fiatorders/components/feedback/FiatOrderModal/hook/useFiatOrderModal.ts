import { CardNavigatorModalProps } from "module/common/component/navigation/CardNavigatorModal/CardNavigatorModal";
import { useState } from "react";

export interface UseFiatOrderModalReturn {
    tab: number;
    setTab: (index: number) => void;
    modalProps: Partial<CardNavigatorModalProps>;
}

export default function useFiatOrderModal(title: string): UseFiatOrderModalReturn {
    const [tab, setTab] = useState(0);

    function handleOnTabChange(index: number) {
        setTab(index);
    }

    return {
        tab,
        setTab: handleOnTabChange,
        modalProps: {
            navbar: { back: true, title },
            style: { height: "90%" },
            ...(tab === 0 && { containerStyle: { padding: 0, paddingBottom: 0 } }),
        },
    };
}
