import BaseTransactionSummary from "module/transaction/component/display/BaseTransactionSummary/BaseTransactionSummary";
import { Typography } from "@peersyst/react-native-components";
import { render } from "test-utils";
import { NftTokenMock, TokenAmountMock } from "test-mocks";
import { config } from "config";

describe("Test for the BaseTransactionSummary", () => {
    test("Renders correctly with ckbs", () => {
        const screen = render(
            <BaseTransactionSummary amount={1000} showTotal>
                <Typography variant="body1">Children</Typography>
            </BaseTransactionSummary>,
        );
        expect(screen.getByText("1,000 " + config.tokenName)).toBeDefined();
        //Fee
        expect(screen.getByText("0.001 " + config.tokenName)).toBeDefined();
        //Total
        expect(screen.getByText("1,000.001 " + config.tokenName)).toBeDefined();
        expect(screen.getByText("Children")).toBeDefined();
    });

    test("Renders correctly with tokens", () => {
        const token = new TokenAmountMock();
        const screen = render(
            <BaseTransactionSummary amount={20} token={token}>
                <Typography variant="body1">Children</Typography>
            </BaseTransactionSummary>,
        );
        screen.debug();
        expect(screen.getByText("20 " + token.type.tokenName)).toBeDefined();
        expect(screen.getByText("Children")).toBeDefined();
    });

    test("Renders correctly with nfts", () => {
        const nft = new NftTokenMock();
        const screen = render(
            <BaseTransactionSummary amount={1} nft={nft}>
                <Typography variant="body1">Children</Typography>
            </BaseTransactionSummary>,
        );
        expect(screen.getByText(nft.nftName)).toBeDefined();
        expect(screen.getByText("Children")).toBeDefined();
    });
});
