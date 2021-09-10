import { StyleSheet } from "react-native"
import Colors from "../../shared/utils/AssetsReferences/Colors";

const styles = StyleSheet.create({
    Background: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    FormGroup: {
        marginHorizontal: 15,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: Colors.grayDA,
    },
    TitleNumber: {
        textAlign: "center",
        textAlignVertical: "center",
        alignSelf: "flex-start",
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius: 50,
        fontSize: 21,
        color: Colors.whiteFE,
        backgroundColor: Colors.lightPurple,
    },
    Title: {
        marginLeft: 6, 
        fontSize: 24,
        color: Colors.darkPurple,
    },
    TitleGroup: {
        flexDirection: "row",
        alignItems: "center",
    },
});

export default styles;
