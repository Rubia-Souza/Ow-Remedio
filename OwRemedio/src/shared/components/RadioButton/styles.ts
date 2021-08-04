import { StyleSheet } from "react-native";
import Colors from "../../utils/AssetsReferences/Colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        height: 32,
    },
    radioButtonBorder: {
        minWidth: 32,
        minHeight: 32,
        marginRight: 9,
        borderRadius: 100,
        borderColor: Colors.lightPurple,
        borderWidth: 3,
        padding: 3.5,
    },
    radioButtonCircle: {
        width: "100%",
        height: "100%",
        borderRadius: 100,
        backgroundColor: Colors.lightPurple,
    },
});

export default styles;
