import { Dispatch, SetStateAction } from "react";
import { Row } from "@peersyst/react-native-components";
import PadItem from "../PadItem/PadItem";
import { PadItemType } from "../PadItem/PadItem.types";
import { KeyboardRoot } from "./Keyboard.styles";

export interface KeyboardProps {
    setValue: Dispatch<SetStateAction<string>>;
}

const Keyboard = ({ setValue }: KeyboardProps): JSX.Element => {
    const handlePress = async (item: PadItemType) => {
        switch (item) {
            case "X":
                setValue("");
                break;
            case "<":
                setValue((value) => (value.length > 0 ? value.slice(0, -1) : ""));
                break;
            default:
                setValue((value) => value + item);
                break;
        }
    };

    const rowGap = "15%";
    return (
        <KeyboardRoot>
            {[...Array(3)].map((_, rowIndex) => (
                <Row key={rowIndex} gap={rowGap}>
                    {[...Array(3)].map((_, colIndex) => {
                        const item = (rowIndex * 3 + colIndex + 1).toString() as PadItemType;
                        return <PadItem key={colIndex} item={item} onPress={() => handlePress(item)} />;
                    })}
                </Row>
            ))}
            <Row gap={rowGap}>
                <PadItem item={"X"} onPress={() => handlePress("X")} />
                <PadItem item={"0"} onPress={() => handlePress("0")} />
                <PadItem item={"<"} onPress={() => handlePress("<")} />
            </Row>
        </KeyboardRoot>
    );
};

export default Keyboard;
