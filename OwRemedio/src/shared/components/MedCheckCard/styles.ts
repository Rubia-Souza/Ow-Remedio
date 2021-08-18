import { StyleSheet, } from "react-native";
import Colors from "../../utils/AssetsReferences/Colors";
import Fonts from "../../utils/AssetsReferences/Fonts";

const styles = StyleSheet.create({
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
        borderLeftWidth: 8,
        borderTopRightRadius: 18,
        borderBottomRightRadius: 18,
        borderLeftColor: Colors.lightPurple,
        backgroundColor: Colors.whiteFE,
    },
    textContainer: {
        marginLeft: 24,
    },
    medName: {
        fontFamily: Fonts.Roboto.regular,
        fontSize: 24,
        marginBottom: 6,
        marginRight: 9,
    },
    medNameContainer: {
        flexDirection: "row",
        alignSelf: "flex-start",
    },
});

export default styles;
