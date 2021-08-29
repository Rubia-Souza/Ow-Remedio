import { StyleSheet } from "react-native";
import Colors from "../../shared/utils/AssetsReferences/Colors";
import Fonts from "../../shared/utils/AssetsReferences/Fonts";

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "nowrap",
        height: "9%",
        paddingHorizontal: 20,
        elevation: 6,
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: Colors.black2E,
        shadowOffset: { width: 0, height: 2 },
        backgroundColor: Colors.whiteFE,
    },
    tabLabel: {
        fontSize: 21,
        fontFamily: Fonts.Roboto.light,
        color: Colors.black2E,
    },
    tabElementContainer: {
        borderRightColor: Colors.grayDA,
        borderRightWidth: 1,
        height: "85%",
    },
    lastTabElementContainer: {
        borderRightWidth: 0,
    },
    tabIcon: {
        height: "60%",
    },
});

export default styles;
