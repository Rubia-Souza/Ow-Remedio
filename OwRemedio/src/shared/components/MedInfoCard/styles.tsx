import { StyleSheet, } from "react-native";
import Colors from "../../utils/AssetsReferences/Colors";

export interface MedInfoCardStyleProps {
    hasFinished?: boolean;
    isInLowStock?: boolean;
}

const initialState: MedInfoCardStyleProps = {
    hasFinished: false,
    isInLowStock: false,
};

const styles = (
    props: MedInfoCardStyleProps = initialState
) => {
    const getMainColorBasedOnStatus = (defualtColor: string = ""): string => {
        if (props.hasFinished) {
            return Colors.brightGreen;
        }

        if (props.isInLowStock) {
            return Colors.brightRed;
        }

        return defualtColor;
    };

    return StyleSheet.create({
        container: {
            flexDirection: "row",
            justifyContent: "space-between",
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
            borderLeftColor: getMainColorBasedOnStatus(Colors.grayPurple),
            backgroundColor: Colors.whiteFE,
        },
        textsContainer: {
            flexDirection: "column",
        },
        medName: {
            flexDirection: "row",
            alignItems: "center",
        },
        medNameText: {
            fontSize: 30,
            marginRight: 9,
            color: Colors.black10,
        },
        exclamationContainer: {
            padding: 4,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: Colors.brightRed,
        },
        checkContainer: {
            padding: 4,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: Colors.brightGreen,
        },
        medTime: {
            fontSize: 21,
            marginBottom: 24,
            textDecorationLine: props.hasFinished ? "line-through" : "none",
        },
        stock: {
            flexDirection: "row",
            alignItems: "center",
        },
        medStockText: {
            fontSize: 18,
            marginLeft: 6,
            color: props.isInLowStock && !props.hasFinished ? Colors.brightRed : Colors.black2E,
        },
        buttonsContainer: {
            alignItems: "flex-end",
            justifyContent: "space-between",
        },
    });
};

export default styles;
