import { Col, createModal, ExposedBackdropProps, Form, Typography, useToast } from "react-native-components";
import { translate } from "locale";
import { AddNodeModalRoot } from "module/settings/components/core/AddNodeModal/AddNodeModal.styles";
import TextField from "module/common/component/input/TextField/TextField";
import Button from "module/common/component/input/Button/Button";
import { RPC } from "@ckb-lumos/lumos";
import { useEffect, useState } from "react";
import { NetworkType } from "module/settings/state/SettingsState";
import { ChainInfo } from "@ckb-lumos/base";
import AltNetworkDialog from "module/settings/components/core/AltNetworkDialog/AltNetworkDialog";
import useSelectedNetwork from "module/settings/hook/useSelectedNetwork";
import useChangeSelectedNetwork from "module/settings/hook/useChangeSelectedNetwork";
import { useControlled } from "@peersyst/react-hooks";
import { SettingsStorage } from "module/settings/SettingsStorage";
import { useSetNodeInfo } from "module/settings/hook/useNodeInfo";

export interface AddNodeForm {
    node: string;
}

const chainMap: Record<ChainInfo["chain"], NetworkType> = {
    ckb: "mainnet",
    ckb_testnet: "testnet",
};

export interface AddNodeModalProps extends ExposedBackdropProps {
    onNodeAdded: (node: string) => any;
}

const AddNodeModal = createModal(({ onNodeAdded, open: openProp, onClose, ...rest }: AddNodeModalProps): JSX.Element => {
    const [open, setOpen] = useControlled(true, openProp, openProp ? onClose : undefined);
    const [altNetwork, setAltNetwork] = useState<NetworkType | undefined>();
    const [showAltNetworkDialog, setShowAltNetworkDialog] = useState(false);
    const [addNodeInAltNetwork, setAddNodeInAltNetwork] = useState(false);
    const [loading, setLoading] = useState(false);
    const [potentialUrl, setPotencialUrl] = useState<string | undefined>();
    const { showToast } = useToast();
    const network = useSelectedNetwork();
    const setNetwork = useChangeSelectedNetwork();
    const { addNode } = useSetNodeInfo();

    //This use effect is needed to add the node with the new network value. Otherwise the old network value is caught by the closure and stored incorrectly
    useEffect(() => {
        if (addNodeInAltNetwork) {
            handleAddNode(potentialUrl!);
            setAddNodeInAltNetwork(false);
        }
    }, [network, addNodeInAltNetwork]);

    const handleAddNode = async (node: string, nw = network) => {
        await SettingsStorage.addNode(nw, node);
        addNode(node);
        onNodeAdded(node);
        setOpen(false);
    };

    const handleSubmit = async ({ node }: AddNodeForm) => {
        setLoading(true);
        const url = node.endsWith("/") ? node : node + "/";
        const rpc = new RPC(url + "rpc");
        try {
            const { chain } = await rpc.get_blockchain_info();
            const detectedChain = chainMap[chain];
            if (network !== detectedChain) {
                setPotencialUrl(url);
                setAltNetwork(detectedChain);
                setShowAltNetworkDialog(true);
            } else {
                await handleAddNode(url);
            }
        } catch (e) {
            showToast(translate("failed_to_connect_with_node"), { type: "error" });
        }
        setLoading(false);
    };

    const handleNetworkChange = async (nw: NetworkType) => {
        await SettingsStorage.set({ network: nw });
        setNetwork(nw);
        setAddNodeInAltNetwork(true);
    };

    return (
        <AddNodeModalRoot open={open} onClose={() => setOpen(false)} {...rest}>
            <Col gap={20}>
                <Typography variant="h3" fontWeight="bold">
                    {translate("add_a_node")}
                </Typography>
                <Form onSubmit={handleSubmit}>
                    <Col gap={20}>
                        <TextField
                            name="node"
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholder={translate("introduce_a_node_url")}
                            size="md"
                            variant="underlined"
                            validators={{ url: true }}
                            clearable
                        />
                        <Button fullWidth variant="outlined" size="md" loading={loading}>
                            {translate("add")}
                        </Button>
                    </Col>
                </Form>
            </Col>
            <AltNetworkDialog
                open={showAltNetworkDialog}
                onClose={() => setShowAltNetworkDialog(false)}
                onExited={() => setAltNetwork(undefined)}
                detectedNetwork={altNetwork!}
                onNetworkChange={handleNetworkChange}
            />
        </AddNodeModalRoot>
    );
});

export default AddNodeModal;
