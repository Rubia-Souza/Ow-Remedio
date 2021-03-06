import { StyleSheet, } from "react-native";
import Colors from "../../utils/AssetsReferences/Colors";
import Fonts from "../../utils/AssetsReferences/Fonts";

export const getIconsColors = (isChecked: boolean): string => {
    return isChecked ? Colors.gray64 : Colors.black2E;
};

export interface MedCheckCardStyleProps {
    isChecked?: boolean,
}

const initialState: MedCheckCardStyleProps = {
    isChecked: false,
};

const styles = (
    props: MedCheckCardStyleProps = initialState,
) => StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
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
        backgroundColor: props.isChecked ? Colors.white : Colors.whiteFE,
        opacity: props.isChecked ? 0.85 : 1,
    },
    textContainer: {
        flex: 1,
        marginLeft: 12,
    },
    medName: {
        flexShrink: 1,
        fontSize: 24,
        marginBottom: 6,
        marginRight: 9,
        fontFamily: Fonts.Roboto.regular,
        textDecorationLine: props.isChecked ? "line-through" : "none",
        color: props.isChecked ? Colors.gray64 : Colors.black2E,
    },
    medTimeStock: {
        fontSize: 18,
        fontFamily: Fonts.Roboto.light,
        textDecorationLine: props.isChecked ? "line-through" : "none",
        color: props.isChecked ? Colors.gray64 : Colors.black2E,
    },
    medNameContainer: {
        width: "100%",
        flexDirection: "row",
        alignSelf: "flex-start",
    },
});

export default styles;
