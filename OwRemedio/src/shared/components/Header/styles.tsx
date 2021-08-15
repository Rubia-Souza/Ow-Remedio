import { StyleSheet } from "react-native";
import Colors from "../../utils/AssetsReferences/Colors";

const styles = StyleSheet.create({
    Background: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.white,
        elevation: 6,
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: Colors.black2E,
        shadowOffset: { width: 0, height: 1 },
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        marginBottom: 24,
        paddingVertical: 18,
    },
    PageText: {
        fontSize: 32,
    },
});

export default styles;
