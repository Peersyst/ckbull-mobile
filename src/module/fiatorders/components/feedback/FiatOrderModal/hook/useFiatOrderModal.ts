import { useState } from "react";

export default function useFiatOrderModal(title: string) {
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
