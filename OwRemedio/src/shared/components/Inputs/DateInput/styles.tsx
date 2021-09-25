import { 
    StyleSheet,
    StyleProp,
    ViewStyle,
    TextStyle,
} from "react-native";

import Colors from "../../../utils/AssetsReferences/Colors";
import Fonts from "../../../utils/AssetsReferences/Fonts";

export interface DateInputElementsStyles {
    Container?: StyleProp<ViewStyle>;
    Label?: StyleProp<TextStyle>;
    DateInputTextConteiner?: StyleProp<ViewStyle>;
    DateInputDisplayText?: StyleProp<TextStyle>;
    DateText?: StyleProp<TextStyle>;
    DateInputConteiner?: StyleProp<ViewStyle>;
    TimePicker?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
    FakeDatePicker: {
        width: "100%",
        padding: 0,
        borderWidth: 0,
        fontSize: 18,
        color: Colors.black2E,
        fontFamily: Fonts.Roboto.light,
    },
    DateTimePickerContainer: {
        flex: 1,
        alignSelf: "flex-start",
        marginRight: 9,
    },
    InputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1.5,
        borderRadius: 50,
        paddingVertical: 15,
        paddingHorizontal: 24,
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
