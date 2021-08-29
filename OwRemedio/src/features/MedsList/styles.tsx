import { StyleSheet } from "react-native";
import Colors from "../../shared/utils/AssetsReferences/Colors";
import Fonts from "../../shared/utils/AssetsReferences/Fonts";

const styles = StyleSheet.create({
    MedInfoCardContainer: {
        marginBottom: 24,
    },
    AddButtonContainer: {
        position: "absolute",
        bottom: 21,
        right: 15,
    },
    NoMedsContainer: {
        flex: 1,
        alignItems: "center",
        paddingTop: "25%",
    },
    NoMedsTitleText: {
        textAlign: "center",
        color: Colors.grayDA,
        fontSize: 21,
        fontFamily: Fonts.Roboto.regular,
        marginVertical: 18,
    },
    NoMedsDirectionsText: {
        textAlign: "center",
        color: Colors.grayDA,
        fontSize: 18,
        fontFamily: Fonts.Roboto.regular,
    },
});

export default styles;
