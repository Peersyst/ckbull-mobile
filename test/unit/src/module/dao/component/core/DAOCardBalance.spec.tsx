import DAOCardBalance from "module/dao/component/core/DAOAccountCard/DAOCardBalance/DAOCardBalance";
import { render, translate } from "test-utils";
import { MockedDAOBalance } from "mocks/DAO";
import { waitFor } from "@testing-library/react-native";
import daoInfo from "mocks/daoInfo";

describe("DAO Card balance test", () => {
    afterAll(() => {
        jest.restoreAllMocks();
    });

    test("Renders correctly", async () => {
        const daoBalance = MockedDAOBalance;
        const freeBalance = 12635;
        const estimatedApc = daoInfo.estimated_apc;

        const screen = render(<DAOCardBalance daoBalance={daoBalance} freeBalance={freeBalance} estimatedApc={estimatedApc} />);
        expect(screen.getByText(translate("available"))).toBeDefined();
        expect(screen.getByText(translate("locked"))).toBeDefined();
        expect(screen.getByText(translate("estimated_apc"))).toBeDefined();

        await waitFor(() => expect(screen.getByText("12,635 CKB")).toBeDefined()); // Available

        await waitFor(() => expect(screen.getByText("500 CKB")).toBeDefined()); // Locked

        expect(screen.getByText(`${daoInfo.estimated_apc}%`)).toBeDefined(); // apc
    });
});
