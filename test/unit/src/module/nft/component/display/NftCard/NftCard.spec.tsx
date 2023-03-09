import { render } from "test-utils";
import NftCard from "module/nft/component/display/NftCard/NftCard";
import { tempNft } from "mocks/nft";

describe("NftCard tests", () => {
    test("Renders correctly", () => {
        const screen = render(<NftCard nft={tempNft} />);
        expect(screen.getByText(tempNft.nftName));
        expect(screen.getByText(tempNft.data.description));
    });
});
