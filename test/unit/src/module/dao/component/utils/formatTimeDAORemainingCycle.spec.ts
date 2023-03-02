import useFormatTimeDAORemainingCycle from "module/transaction/component/hook/UseFormatTimeDAORemainingCycle/useFormatTimeDAORemaningCycle";
import { renderHook, translate } from "test-utils";

const renderUseFormatTimeDAORemainingCycle = () =>
    renderHook(() => {
        return useFormatTimeDAORemainingCycle();
    });

describe("formatTimeDAORemainingCycle tests", () => {
    const formatTimeDAORemainingCycle = renderUseFormatTimeDAORemainingCycle().result.current;
    test("Returns only minutes", () => {
        expect(
            formatTimeDAORemainingCycle({
                amount: BigInt(10 * 10 ** 8),
                compensation: BigInt(1 * 10 ** 8),
                remainingCycleMinutes: 0,
                remainingEpochs: 120,
                txHash: "",
                unlockable: true,
                type: "deposit",
            }),
        ).toEqual(`120 ${translate("epochs")}`);
    });
});
