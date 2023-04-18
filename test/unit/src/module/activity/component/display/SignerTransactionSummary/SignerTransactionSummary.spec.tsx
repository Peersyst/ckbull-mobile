import SignerTransactionSummary from "module/activity/component/display/SignerTransactionSummary/SignerTransactionSummary";
import { render, screen, translate } from "test-utils";
import { formatHash } from "@peersyst/react-utils";
import { TransactionDtoMock, mockedAddress } from "mocks/common/activity/transaction-dto.mock";
import { UseServiceInstanceMock } from "mocks/common";
import * as UseGetTransactionAsset from "module/activity/hook/useGetTransactionAsset";
import { NftTokenMock } from "test-mocks";
import { config } from "config";

describe("SignerTransactionSummary tests", () => {
    let serviceInstance: UseServiceInstanceMock;

    beforeEach(() => {
        serviceInstance = new UseServiceInstanceMock();
    });

    afterEach(() => {
        serviceInstance.restore();
    });
    test("Renders correctly", () => {
        const { transaction } = new TransactionDtoMock();
        render(<SignerTransactionSummary transaction={transaction} showTotal />);

        expect(screen.getByText(translate("from"))).toBeDefined();
        expect(formatHash(mockedAddress, "middle", 3)).toBeDefined();
        expect(screen.getByText(translate("to"))).toBeDefined();
        expect(formatHash(mockedAddress, "middle", 3)).toBeDefined();
    });

    test("Renders correctly without senders", () => {
        const { transaction } = new TransactionDtoMock();
        render(<SignerTransactionSummary transaction={{ ...transaction, inputs: [] }} showTotal />);
        expect(screen.queryByText(translate("from"))).toBeNull();
        expect(screen.queryByText(mockedAddress)).toBeNull();
    });

    test("Renders correctly without receivers", () => {
        const { transaction } = new TransactionDtoMock();
        render(<SignerTransactionSummary transaction={{ ...transaction, outputs: [] }} showTotal />);
        expect(screen.queryByText(translate("to"))).toBeNull();
        expect(screen.queryByText(mockedAddress)).toBeNull();
    });

    test("Renders correctly when nft set", async () => {
        const { transaction } = new TransactionDtoMock();
        jest.spyOn(UseGetTransactionAsset, "useGetTransactionAsset").mockReturnValueOnce({
            asset: { amount: undefined, nft: new NftTokenMock({}), token: undefined },
            isLoading: false,
        });
        render(<SignerTransactionSummary transaction={{ ...transaction }} showTotal />);

        expect(screen.getByText("nftName")).toBeDefined();
    });

    test("Renders correctly when amount set", async () => {
        const { transaction } = new TransactionDtoMock();
        jest.spyOn(UseGetTransactionAsset, "useGetTransactionAsset").mockReturnValueOnce({
            asset: { amount: "100", nft: undefined, token: undefined },
            isLoading: false,
        });
        render(<SignerTransactionSummary transaction={{ ...transaction }} showTotal />);

        expect(screen.getByText("100 " + config.tokenName)).toBeDefined();
    });
});
