import * as UseToast from "module/common/component/base/feedback/ToastProvider/hooks/useToast";
import * as UseChangeSelectedNetwork from "module/settings/hook/useChangeSelectedNetwork";
import * as UseNodeInfo from "module/settings/hook/useNodeInfo";
import { render, SuccessApiCall } from "test-utils";
import AddNodeModal from "module/settings/components/core/AddNodeModal/AddNodeModal";
import { translate } from "locale";
import { fireEvent, waitFor } from "@testing-library/react-native";
import { RPC } from "@ckb-lumos/lumos";
import { SettingsStorage } from "module/settings/SettingsStorage";

const TESTNET_URL = "https://ckb-node-test-1.peersyst.com";
const MAINNET_URL = "https://ckb-node-mainnet.peersyst.com/";

describe("AddNodeModal and AltNetworkDialog tests", () => {
    const showToast = jest.fn();
    jest.spyOn(UseToast, "useToast").mockReturnValue({ showToast } as any);

    const setNetwork = jest.fn();
    jest.spyOn(UseChangeSelectedNetwork, "default").mockReturnValue(setNetwork);

    const addNode = jest.fn();
    jest.spyOn(UseNodeInfo, "useSetNodeInfo").mockReturnValue({ addNode } as any);

    const handleNodeAdded = jest.fn();

    const addNodeToStorage = jest.spyOn(SettingsStorage, "addNode").mockReturnValue(SuccessApiCall(undefined));

    afterEach(() => {
        showToast.mockReset();
        setNetwork.mockReset();
        addNode.mockReset();
        handleNodeAdded.mockReset();
        addNodeToStorage.mockReset();
    });

    test("Renders correctly", () => {
        const screen = render(<AddNodeModal onNodeAdded={handleNodeAdded} />);
        expect(screen.getByText(translate("add_a_node"))).toBeDefined();
        expect(screen.getByPlaceholderText(translate("introduce_a_node_url"))).toBeDefined();
    });

    test("Adds node", async () => {
        jest.spyOn(RPC.prototype, "get_blockchain_info").mockReturnValue({ chain: "ckb_testnet" } as any);
        const screen = render(<AddNodeModal onNodeAdded={handleNodeAdded} />);
        fireEvent.changeText(screen.getByPlaceholderText(translate("introduce_a_node_url")), TESTNET_URL);
        fireEvent.press(screen.getByText(translate("add")));
        await waitFor(() => expect(addNodeToStorage).toHaveBeenCalledWith("testnet", TESTNET_URL + "/"));
        expect(addNode).toHaveBeenCalledWith(TESTNET_URL + "/");
        expect(handleNodeAdded).toHaveBeenCalledWith(TESTNET_URL + "/");
    });

    test("Alternative network node is detected", async () => {
        jest.spyOn(RPC.prototype, "get_blockchain_info").mockReturnValue({ chain: "ckb" } as any);
        const screen = render(<AddNodeModal onNodeAdded={handleNodeAdded} />);
        fireEvent.changeText(screen.getByPlaceholderText(translate("introduce_a_node_url")), MAINNET_URL);
        fireEvent.press(screen.getByText(translate("add")));
        await waitFor(() => expect(screen.getByText(translate("network_detected", { network: translate("mainnet") }))).toBeDefined());
        fireEvent.press(screen.getByText(translate("change")));
        expect(setNetwork).toHaveBeenCalledWith("mainnet");
        await waitFor(() => expect(addNodeToStorage).toHaveBeenCalledWith("mainnet", MAINNET_URL));
        expect(addNode).toHaveBeenCalledWith(MAINNET_URL);
        expect(handleNodeAdded).toHaveBeenCalledWith(MAINNET_URL);
    });

    test("Error is thrown when cannot connect to rpc", async () => {
        jest.spyOn(RPC.prototype, "get_blockchain_info").mockImplementation(() => {
            throw new Error();
        });
        const screen = render(<AddNodeModal onNodeAdded={handleNodeAdded} />);
        fireEvent.changeText(screen.getByPlaceholderText(translate("introduce_a_node_url")), TESTNET_URL);
        fireEvent.press(screen.getByText(translate("add")));
        await waitFor(() => expect(showToast).toHaveBeenCalledWith(translate("failed_to_connect_with_node"), { type: "error" }));
    });
});
