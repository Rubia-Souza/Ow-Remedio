import { 
    StyleProp, 
    StyleSheet, 
    TextStyle, 
    ViewStyle, 
} from "react-native";

import Colors from "../../../utils/AssetsReferences/Colors";
import Fonts from "../../../utils/AssetsReferences/Fonts";

export interface DefaultNumberInputElementsStyles {
    Container?: StyleProp<ViewStyle>;
    Label?: StyleProp<TextStyle>;
    Input?: StyleProp<ViewStyle>;
    DisplayTextInput?: StyleProp<TextStyle>;
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: Colors.transparent,
    },
    InputRegion: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1.5,
        borderRadius: 50,
        paddingVertical: 12,
        paddingHorizontal: 21,
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
    TextInput: {
        flex: 1,
        padding: 0,
        fontSize: 18,
        marginRight: 9,
        textAlignVertical: "center",
        color: Colors.black2E,
        fontFamily: Fonts.Roboto.light,
        backgroundColor: Colors.transparent,
    },
    ButtonsContainer: {
        justifyContent: "space-between",
    },
    UpArrow: {
        marginBottom: 6,
    },
});

export default styles;
