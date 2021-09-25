import { 
    StyleProp, 
    StyleSheet, 
    TextStyle, 
    ViewStyle, 
} from "react-native";

import Colors from "../../../utils/AssetsReferences/Colors";
import Fonts from "../../../utils/AssetsReferences/Fonts";

export interface DefaultButtonElementsStyles {
    Container?: StyleProp<ViewStyle>,
    Text?: StyleProp<TextStyle>,
}

const styles = StyleSheet.create({
    Background: {
        alignItems: "center",
        alignSelf: "flex-start",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 21,
        borderRadius: 50,
        backgroundColor: Colors.lightPurple,
        elevation: 3,
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: Colors.black2E,
        shadowOffset: { width: 0, height: 2 },
    },
    Text: {
        color: Colors.whiteFE,
        fontFamily: Fonts.Roboto.regular,
    },
});

export default styles;
