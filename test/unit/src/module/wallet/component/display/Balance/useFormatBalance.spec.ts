import { config } from "config";
import { useFormatBalance } from "module/wallet/component/display/Balance/hook/useFormatBalance";
import { renderHook } from "test-utils";

const renderUseFormatBalance = () => {
    const { result } = renderHook(() => useFormatBalance());
    return result.current;
};

describe("useFormatBalance", () => {
    test("Renders display", () => {
        const format = renderUseFormatBalance();
        const res = format(12345, {
            action: "add",
            units: "token",
        });
        expect(res).toBe("+12,345 " + config.tokenName);
    });
});
