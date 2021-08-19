import { StyleSheet } from "react-native";
import Colors from "../../utils/AssetsReferences/Colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
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
        backgroundColor: Colors.whiteFE,
    },
    textsContainer: {
        flexDirection: "column",
    },
    medName: {
        flexDirection: "row",
        alignItems: "center",
    },
    medNameText: {
        fontSize: 30,
        marginRight: 6,
    },
    exclamationContainer: {
        padding: 3,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: Colors.brightRed,
    },
    checkContainer: {
        padding: 3,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: Colors.brightGreen,
    },
    medTime: {
        fontSize: 21,
        marginBottom: 24,
    },
    stock: {
        flexDirection: "row",
        alignItems: "center",
    },
    medStockText: {
        fontSize: 18,
        marginLeft: 6,
    },
    buttonsContainer: {
        alignItems: "flex-end",
        justifyContent: "space-between",
    },
});

export default styles;
