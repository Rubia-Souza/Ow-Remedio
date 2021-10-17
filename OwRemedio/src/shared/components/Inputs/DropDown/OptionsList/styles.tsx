import { StyleSheet, } from "react-native";

import Colors from "../../../../utils/AssetsReferences/Colors";

const styles = StyleSheet.create({
    List: {
        zIndex: 2,
        marginTop: -9,
        width: "85%",
        maxHeight: 300,
        alignSelf: "center",
        backgroundColor: Colors.whiteFE,
        borderWidth: 1.5,
        borderColor: Colors.whiteF4,
        elevation: 3,
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: Colors.black2E,
        shadowOffset: { width: 0, height: 2 },
    },
});

export default styles;
