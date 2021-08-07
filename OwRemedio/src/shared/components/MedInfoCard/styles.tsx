import { StyleSheet } from "react-native";
import Colors from "../../utils/AssetsReferences/Colors";
import Fonts from "../../utils/AssetsReferences/Fonts";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 6,
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: Colors.black2E,
        shadowOffset: { width: 0, height: 1 },
        paddingHorizontal: 20,
        marginHorizontal: 15,
        borderLeftWidth: 8,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        borderLeftColor: Colors.lightPurple,
        backgroundColor: Colors.whiteFE,
    },
    textsContainer: {
        flexDirection: "column",
        backgroundColor: "red",
    },
    medNameText: {
        fontSize: 24,
    },
    medTime: {
        
    },
    medStock: {

    },
    buttonsContainer: {

    },
});

export default styles;
