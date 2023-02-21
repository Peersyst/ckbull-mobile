import { Col } from "@peersyst/react-native-components";
import styled from "@peersyst/react-native-styled";

export const AddWalletRoot = styled(Col)(({ theme, dimensions: { height } }) => ({
    height: height * 0.8,
    marginTop: 100,
    paddingHorizontal: "10%",
    paddingVertical: "10%",
    backgroundColor: theme.palette.mode === "light" ? theme.palette.gray[0] : theme.palette.gray[50],
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
}));
