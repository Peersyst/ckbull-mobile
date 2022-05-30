import { renderHook } from "test-utils";
import useNodeInfo from "module/settings/hook/useNodeInfo";
import * as Recoil from "recoil";
import settings from "mocks/settings";
import { NodeInfo } from "module/settings/state/SettingsState";

const renderUseNodeInfo = () => renderHook(() => useNodeInfo());

//Only testnet will be tested because useSelectedNetwork is mocked globally to return "testnet".
describe("useNodeInfo tests", () => {
    const setSettingsState = jest.fn();
    jest.spyOn(Recoil, "useRecoilState").mockReturnValue([settings, setSettingsState]);

    afterEach(() => {
        setSettingsState.mockReset();
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });

    describe("get state", () => {
        test("gets testnet state", () => {
            const { result } = renderUseNodeInfo();
            expect(result.current[0]).toEqual(settings.testnetNode);
        });
    });

    describe("ssetNodeInfo", () => {
        test("gets testnet state", () => {
            const newNodeInfo: NodeInfo = {
                selected: settings.testnetNode.nodes![1],
                nodes: [...settings.testnetNode.nodes!, "new-testnet-node"],
            };
            const { result } = renderUseNodeInfo();
            result.current[1].setNodeInfo(newNodeInfo);
            expect(setSettingsState).toHaveBeenCalled();
        });
    });

    describe("addNode", () => {
        test("Does not add node if it already exists", () => {
            const { result } = renderUseNodeInfo();
            result.current[1].addNode(settings.testnetNode.nodes![0]);
            expect(setSettingsState).not.toHaveBeenCalled();
        });
        test("Adds node", () => {
            const { result } = renderUseNodeInfo();
            result.current[1].addNode("new-testnet-node");
            expect(setSettingsState).toHaveBeenCalled();
        });
    });

    describe("removeNode", () => {
        test("Removes node", () => {
            const { result } = renderUseNodeInfo();
            result.current[1].removeNode(settings.testnetNode.nodes![0]);
            expect(setSettingsState).toHaveBeenCalled();
        });
    });
});
