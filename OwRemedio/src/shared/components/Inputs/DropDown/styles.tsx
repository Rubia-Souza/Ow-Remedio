import { StyleSheet, } from "react-native";

import Colors from "../../../utils/AssetsReferences/Colors";
import Fonts from "../../../utils/AssetsReferences/Fonts";

export interface DropDownElementsStyles {
    
}

const styles = StyleSheet.create({
    Label: {
        marginLeft: 30,
        marginBottom: 3,
        color: Colors.darkPurple,
    },
    InputContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 15,
        paddingHorizontal: 24,
        borderWidth: 1.5,
        borderRadius: 50,
        borderColor: Colors.grayPurple,
        backgroundColor: Colors.white,
    },
    Placeholder: {
        flex: 1,
        fontSize: 18,
        marginRight: 3,
        color: Colors.gray9E,
        fontFamily: Fonts.Roboto.light,
    },
    SelectedValueText: {
        flex: 1,
        fontSize: 18,
        marginRight: 3,
        color: Colors.black2E,
        fontFamily: Fonts.Roboto.light,
    },
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
    OptionsContainer: {
        flex: 1,
        padding: 12,
        borderBottomWidth: 1,
        borderColor: Colors.whiteF4,
    },
    OptionText: {
        fontSize: 18,
        color: Colors.black2E,
        fontFamily: Fonts.Roboto.light,
    },
});

export default styles;
