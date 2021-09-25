import { 
    StyleSheet,
    StyleProp,
    ViewStyle,
    TextStyle,
} from "react-native";

import Colors from "../../../utils/AssetsReferences/Colors";

export interface CheckboxStyleProps {
    isChecked: boolean;
}

export interface CheckboxElementsStyle {
    Container?: StyleProp<ViewStyle>;
    Square?: StyleProp<ViewStyle>;
    Label?: StyleProp<TextStyle>;
};

const initialState: CheckboxStyleProps = {
    isChecked: false,
};

const styles = (
    props: CheckboxStyleProps = initialState
) => {
    return StyleSheet.create({
        Container: {
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "flex-start",
        },
        CheckContainer: {
            minWidth: 30,
            minHeight: 30,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            borderWidth: 1.5,
            borderColor: Colors.lightPurple,
            backgroundColor: props.isChecked ? Colors.lightPurple : Colors.transparent,
        },
        Label: {
            marginLeft: 3,
            color: Colors.darkPurple,
        },
    });
};

export default styles;
