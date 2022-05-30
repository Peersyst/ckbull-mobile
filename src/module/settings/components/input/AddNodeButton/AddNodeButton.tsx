import { TouchableOpacity } from "react-native";
import { Row, Typography } from "react-native-components";
import { translate } from "locale";
import { useState } from "react";
import AddNodeModal from "module/settings/components/core/AddNodeModal/AddNodeModal";
import { AddIcon } from "icons";
import { NODE_OPTION_HEIGHT } from "../../core/ChangeNodeModal/NodeOption/NodeOption.styles";

export interface AddNodeButtonProps {
    onNodeAdded: (node: string) => any;
}

const AddNodeButton = ({ onNodeAdded }: AddNodeButtonProps): JSX.Element => {
    const [showAddModal, setShowAddModal] = useState(false);

    return (
        <>
            <TouchableOpacity onPress={() => setShowAddModal(true)}>
                <Row alignItems="center" justifyContent="center" gap={10} style={{ paddingHorizontal: 20, height: NODE_OPTION_HEIGHT }}>
                    <AddIcon style={{ fontSize: 16 }} />
                    <Typography variant="body1" fontWeight="bold">
                        {translate("add_a_node")}
                    </Typography>
                </Row>
            </TouchableOpacity>
            <AddNodeModal open={showAddModal} onClose={() => setShowAddModal(false)} onNodeAdded={onNodeAdded} />
        </>
    );
};

export default AddNodeButton;
