import { 
    StyleProp,
    StyleSheet,
    TextStyle,
    ViewStyle,
} from "react-native";

import Colors from "../../../utils/AssetsReferences/Colors";
import Fonts from "../../../utils/AssetsReferences/Fonts";

export interface GhostButtonElementsStyles {
    Container?: StyleProp<ViewStyle>,
    Text?: StyleProp<TextStyle>
}

const styles = StyleSheet.create({
    Background: {
        alignItems: "center",
        alignSelf: "flex-start",
        justifyContent: "center",
        paddingHorizontal: 21,
        paddingVertical: 12,
        backgroundColor: Colors.whiteFE,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: Colors.lightPurple,
        elevation: 3,
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: Colors.black2E,
        shadowOffset: { width: 0, height: 2 },
    },
    Text: {
        color: Colors.lightPurple,
        fontFamily: Fonts.Roboto.regular,
    },
});

export default styles;
