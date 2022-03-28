import * as UseWallet from "module/wallet/hook/useWallet";
import { ckbSdkInstance } from "module/common/service/CkbSdkService";
import { render, SuccessApiCall } from "test-utils";
import { nfts } from "mocks/nft";
import NftsList from "module/nft/component/core/NftsList/NftsList";
import { waitFor } from "@testing-library/react-native";
import { mockedUseWallet } from "mocks/useWallet";
import { translate } from "locale";

describe("NftsList tests", () => {
    afterAll(() => {
        jest.restoreAllMocks();
    });

    test("Renders correctly", async () => {
        jest.spyOn(UseWallet, "default").mockReturnValue(mockedUseWallet);
        jest.spyOn(ckbSdkInstance, "getNfts").mockReturnValue(SuccessApiCall(nfts));

        const screen = render(<NftsList />);

        await waitFor(() => expect(screen.getByText("NFT0")));
        expect(screen.getByText("NFT1"));
        expect(screen.getByText("NFT2"));
    });

    test("Renders correctly without transactions", async () => {
        jest.spyOn(UseWallet, "default").mockReturnValue(mockedUseWallet);
        jest.spyOn(ckbSdkInstance, "getNfts").mockReturnValue(SuccessApiCall([]));
        const screen = render(<NftsList />);
        await waitFor(() => expect(screen.getAllByText(translate("no_nfts"))));
    });
});
