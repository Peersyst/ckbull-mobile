import { useTheme } from "@peersyst/react-native-styled";
import { FormControl, FormControlLabel, Row } from "@peersyst/react-native-components";
import ColorSample from "module/common/component/display/ColorSample/ColorSample";
import { ColoPickerProps } from "./ColorPicker.types";

const ColorPicker = ({ defaultValue, Label = FormControlLabel, LabelProps = {}, ...rest }: ColoPickerProps): JSX.Element => {
    const {
        palette: { wallet: walletColors },
    } = useTheme();

    return (
        <FormControl<string> defaultValue={defaultValue || walletColors[0]} Label={[Label, LabelProps]} {...rest}>
            {(value, setValue) => (
                <Row style={{ width: "100%" }} alignItems="center" justifyContent="space-between">
                    {walletColors.map((color, key) => (
                        <ColorSample color={color} active={value === color} onPress={() => setValue(color)} key={key} />
                    ))}
                </Row>
            )}
        </FormControl>
    );
};

export default ColorPicker;
