import { StyleSheet } from "react-native";
import Colors from "../../utils/AssetsReferences/Colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
    },
    radioButtonBorder: {
        minWidth: 36,
        minHeight: 36,
        marginRight: 6,
        padding: 3.5,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: Colors.lightPurple,
    },
    radioButtonCircle: {
        flex: 1,
        borderRadius: 100,
        backgroundColor: Colors.lightPurple,
    },
});

export default styles;
