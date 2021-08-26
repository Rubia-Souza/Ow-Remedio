import { StyleSheet, } from "react-native";
import Colors from "../../shared/utils/AssetsReferences/Colors";
import Fonts from "../../shared/utils/AssetsReferences/Fonts";

const sytles = StyleSheet.create({
    MedCheckCardContainer: {
        marginBottom: 24,
    },
    NoMedsContainer: {
        flex: 1,
        alignItems: "center",
        paddingTop: "25%",
    },
    AllMedsTakenText: {
        textAlign: "center",
        color: Colors.grayDA,
        fontSize: 21,
        fontFamily: Fonts.Roboto.regular,
        marginVertical: 18,
    },
});

export default sytles;
