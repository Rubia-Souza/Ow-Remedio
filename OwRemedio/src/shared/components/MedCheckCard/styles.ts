import { StyleSheet, } from "react-native";
import Colors from "../../utils/AssetsReferences/Colors";
import Fonts from "../../utils/AssetsReferences/Fonts";

const styles = (
    isChecked: boolean = false,
) => StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        elevation: 6,
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: Colors.black2E,
        shadowOffset: { width: 0, height: 1 },
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginHorizontal: 15,
        borderLeftWidth: 9,
        borderTopRightRadius: 18,
        borderBottomRightRadius: 18,
        borderLeftColor: Colors.lightPurple,
        backgroundColor: isChecked ? Colors.white : Colors.whiteFE,
        opacity: isChecked ? 0.85 : 1,
    },
    textContainer: {
        marginLeft: 24,
    },
    medName: {
        fontFamily: Fonts.Roboto.regular,
        fontSize: 24,
        marginBottom: 6,
        marginRight: 9,
        textDecorationLine: isChecked ? "line-through" : "none",
        color: isChecked ? Colors.gray64 : Colors.black2E,
    },
    medTimeStock: {
        textDecorationLine: isChecked ? "line-through" : "none",
        color: isChecked ? Colors.gray64 : Colors.black2E,
    },
    medNameContainer: {
        flexDirection: "row",
        alignSelf: "flex-start",
    },
});

export default styles;
