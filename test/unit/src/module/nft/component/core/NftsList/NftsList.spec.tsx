import { render, translate, waitFor } from "test-utils";
import NftsList from "module/nft/component/core/NftsList/NftsList";
import { UseWalletStateMock } from "test-mocks";
import { NftTokensMock } from "mocks/CKBSdk/nft.mock";
import { UseGetNftsMock } from "mocks/common/nft/useGetNfts.mock";
describe("NftsList tests", () => {
    new UseWalletStateMock();

    afterAll(() => {
        jest.restoreAllMocks();
    });

    test("Renders correctly", async () => {
        const { nfts } = new NftTokensMock();
        new UseGetNftsMock({ nfts });
        const screen = render(<NftsList />);
        await waitFor(() => expect(screen.getAllByText(translate("nothing_to_show", { ns: "error" }))));
    });

    // IGNORED WHILE MOCKED
    /* test("Renders correctly without transactions", async () => {
        jest.spyOn(UseWalletState, "default").mockReturnValue(mockedUseWallet);
        jest.spyOn(serviceInstancesMap, "get").mockReturnValue({ testnet: sdkInstance, mainnet: sdkInstance });
        jest.spyOn(sdkInstance, "getNfts").mockReturnValue(SuccessApiCall([]));
        const screen = render(<NftsList />);
        await waitFor(() => expect(screen.getAllByText(translate("nothing_to_show", { ns: "error" }))));
    });*/
});
