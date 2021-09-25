import { 
    StyleSheet,
    StyleProp,
    ViewStyle,
    TextStyle,
} from "react-native";

import Colors from "../../../utils/AssetsReferences/Colors";
import Fonts from "../../../utils/AssetsReferences/Fonts";

export interface DefaultTextInputElementsStyles {
    Container?: StyleProp<ViewStyle>;
    Label?: StyleProp<TextStyle>;
    TextInput?: StyleProp<TextStyle>;
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: Colors.transparent,
    },
    TextInput: {
        fontSize: 18,
        borderWidth: 1.5,
        borderRadius: 50,
        paddingVertical: 15,
        paddingHorizontal: 24,
        color: Colors.black2E,
        fontFamily: Fonts.Roboto.light,
        borderColor: Colors.grayPurple,
        backgroundColor: Colors.white,
        elevation: 6,
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: Colors.black2E,
        shadowOffset: { width: 0, height: 2 },
    },
    Label: {
        marginLeft: 30,
        marginBottom: 3,
        color: Colors.darkPurple,
    },
});

export default styles;
