import BaseSendSummary from "module/transaction/component/display/BaseSendSummary/BaseSendSummary";
import { Typography } from "@peersyst/react-native-components";
import { render } from "test-utils";
import { NftTokenMock, TokenAmountMock } from "test-mocks";
import { config } from "config";

describe("Test for the BaseSendSummary", () => {
    test("Renders correctly with ckbs", () => {
        const screen = render(
            <BaseSendSummary amount={1000} showTotal>
                <Typography variant="body1">Children</Typography>
            </BaseSendSummary>,
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
            <BaseSendSummary amount={20} token={token}>
                <Typography variant="body1">Children</Typography>
            </BaseSendSummary>,
        );
        screen.debug();
        expect(screen.getByText("20 " + token.type.tokenName)).toBeDefined();
        expect(screen.getByText("Children")).toBeDefined();
    });

    test("Renders correctly with nfts", () => {
        const nft = new NftTokenMock();
        const screen = render(
            <BaseSendSummary amount={1} nft={nft}>
                <Typography variant="body1">Children</Typography>
            </BaseSendSummary>,
        );
        expect(screen.getByText(nft.nftName)).toBeDefined();
        expect(screen.getByText("Children")).toBeDefined();
    });
});
