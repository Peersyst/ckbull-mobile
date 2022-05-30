import * as UseNodeInfo from "module/settings/hook/useNodeInfo";
import * as UseToast from "module/common/component/base/feedback/ToastProvider/hooks/useToast";
import nodeInfo from "mocks/node-info";
import { render, SuccessApiCall } from "test-utils";
import ChangeNodeModal from "module/settings/components/core/ChangeNodeModal/ChangeNodeModal";
import { translate } from "locale";
import { fireEvent, waitFor } from "@testing-library/react-native";
import { SettingsStorage } from "module/settings/SettingsStorage";

describe("ChangeNodeModal and NodeOption tests", () => {
    const setNodeInfo = jest.fn();
    const setSelectedNode = jest.fn();
    jest.spyOn(UseNodeInfo, "default").mockReturnValue([nodeInfo.testnetNode, { setSelectedNode, setNodeInfo } as any]);
    const setStorageSelectedNode = jest.spyOn(SettingsStorage, "setSelectedNode").mockReturnValue(SuccessApiCall(undefined));
    const removeNode = jest.spyOn(SettingsStorage, "removeNode").mockReturnValue(SuccessApiCall(undefined));
    const showToast = jest.fn();
    jest.spyOn(UseToast, "useToast").mockReturnValue({ showToast } as any);

    afterEach(() => {
        setNodeInfo.mockReset();
        setSelectedNode.mockReset();
        removeNode.mockReset();
    });

    test("Renders correctly", () => {
        const screen = render(<ChangeNodeModal />);
        expect(screen.getByText(translate("change_node", { network: translate("testnet") })));
        nodeInfo.testnetNode.nodes!.forEach((node) => expect(screen.getByText(node)));
        expect(screen.getByText(translate("default_node")));
    });

    test("Does not change node if saved unchanged", async () => {
        const newSelectedNode = nodeInfo.testnetNode.selected;
        const screen = render(<ChangeNodeModal />);
        fireEvent.press(screen.getByText(newSelectedNode));
        fireEvent.press(screen.getByText(translate("save")));
        await waitFor(() => expect(setStorageSelectedNode).not.toHaveBeenCalled());
    });

    test("Changes node", async () => {
        const newSelectedNode = nodeInfo.testnetNode.nodes![1];
        const screen = render(<ChangeNodeModal />);
        fireEvent.press(screen.getByText(newSelectedNode));
        fireEvent.press(screen.getByText(translate("save")));
        await waitFor(() => expect(setStorageSelectedNode).toHaveBeenCalledWith("testnet", newSelectedNode));
        expect(setSelectedNode).toHaveBeenCalledWith(newSelectedNode);
        expect(showToast).toHaveBeenCalledWith(translate("node_changed", { network: translate("testnet"), node: newSelectedNode }), {
            type: "success",
        });
    });

    test("Deletes an unselected node", async () => {
        const nodeToDelete = nodeInfo.testnetNode.nodes![1];
        const screen = render(<ChangeNodeModal />);
        //DeleteIcon belonging to nodes[1] which is in position [1] of the list, as the list is [...nodes, "default"]
        fireEvent.press(screen.getAllByTestId("DeleteIcon")[1]);
        await waitFor(() => expect(removeNode).toHaveBeenCalledWith("testnet", nodeToDelete));
        expect(setNodeInfo).toHaveBeenCalledWith({ selected: nodeInfo.testnetNode.selected, nodes: [nodeInfo.testnetNode.nodes![0]] });
    });

    test("Deletes selected and active node", async () => {
        const screen = render(<ChangeNodeModal />);
        //DeleteIcon belonging to nodes[0] which is in position [0] of the list, as the list is [...nodes, "default"]
        fireEvent.press(screen.getAllByTestId("DeleteIcon")[0]);
        await waitFor(() => expect(setStorageSelectedNode).toHaveBeenCalledWith("testnet", "default"));
        // This only happens if currently selected node is deleted
        expect(setNodeInfo).toHaveBeenCalledWith({ selected: "default", nodes: [nodeInfo.testnetNode.nodes![1]] });
    });
});
