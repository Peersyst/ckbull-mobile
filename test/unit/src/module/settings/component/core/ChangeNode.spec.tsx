import * as UseModal from "module/common/component/base/feedback/ModalProvider/hooks/useModal";
import { render } from "test-utils";
import ChangeNode from "module/settings/components/core/ChangeNode/ChangeNode";
import { fireEvent } from "@testing-library/react-native";
import { translate } from "locale";
import ChangeNodeModal from "module/settings/components/core/ChangeNodeModal/ChangeNodeModal";

describe("ChangeNode tests", () => {
    test("Renders correctly", () => {
        const showModal = jest.fn();
        jest.spyOn(UseModal, "useModal").mockReturnValue({ showModal } as any);

        const screen = render(<ChangeNode />);
        fireEvent.press(screen.getByText(translate("change_node", { network: translate("testnet") })));
        expect(showModal).toHaveBeenCalledWith(ChangeNodeModal);
    });
});
