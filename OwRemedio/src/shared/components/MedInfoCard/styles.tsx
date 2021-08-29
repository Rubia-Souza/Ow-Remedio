import { 
    StyleSheet,
    TextStyle,
    ViewStyle,
} from "react-native";

import MedStatus from "../../enums/MedStatus";
import Colors from "../../utils/AssetsReferences/Colors";
import Fonts from "../../utils/AssetsReferences/Fonts";

export const getCirclePlusColor = (medStatus: MedStatus): string => {
    switch(medStatus) {
        case(MedStatus.Compleated): {
            return Colors.gray64;
        }
        case(MedStatus.LowInStock): {
            return Colors.brightRed;
        }
        default: {
            return Colors.black2E;
        }
    }
};

export const getButtonsIconsColor = (medStatus: MedStatus): string => {
    if (medStatus === MedStatus.Compleated) {
        return Colors.gray64;
    }
    else {
        return Colors.black2E;
    }
};

export interface MedInfoCardStyleProps {
    medStatus?: MedStatus;
}

const initialState: MedInfoCardStyleProps = {
    medStatus: MedStatus.Default,
};

const styles = (
    props: MedInfoCardStyleProps = initialState
) => {
    const getComplementalStyleContainer = (): ViewStyle => {
        let complementalStyle: ViewStyle = {};

        switch(props.medStatus) {
            case(MedStatus.Compleated): {
                complementalStyle = {
                    borderLeftColor: Colors.brightGreen,
                    opacity: 0.85,
                };

                break;
            }
            case(MedStatus.LowInStock): {
                complementalStyle = {
                    borderLeftColor: Colors.brightRed,
                };

                break;
            }
            case(MedStatus.Default): {
                complementalStyle = {
                    borderLeftColor: Colors.grayPurple,
                };

                break;
            }
        }

        return complementalStyle;
    };

    const getComplementalStyleMedNameText = (): TextStyle => {
        let complementalStyle: TextStyle = {};
        
        if (props.medStatus === MedStatus.Compleated) {
            complementalStyle = {
                color: Colors.gray64,
                textDecorationLine: "line-through",
            };
        }

        return complementalStyle;
    };

    const getComplementalStyleMedTimeText = (): TextStyle => {
        let complementalStyle: TextStyle = {};

        if (props.medStatus === MedStatus.Compleated) {
            complementalStyle = {
                color: Colors.gray64,
                textDecorationLine: "line-through",
            }
        }

        return complementalStyle;
    };

    const getComplementalStyleMedStockText = (): TextStyle => {
        let complementalStyle: TextStyle = {};

        if (props.medStatus === MedStatus.Compleated) {
            complementalStyle = {
                color: Colors.gray64,
            }
        }
        else {
            complementalStyle = {
                color: Colors.black2E,
            }
        }

        return complementalStyle;
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
            backgroundColor: Colors.whiteFE,
            ...getComplementalStyleContainer(),
        },
        textsContainer: {
            flexShrink: 1,
            paddingRight: 9,
            flexDirection: "column",
        },
        medName: {
            flexDirection: "row",
            alignItems: "center",
        },
        medNameText: {
            fontSize: 27,
            flexGrow: 1,
            ...getComplementalStyleMedNameText(),
        },
        exclamationContainer: {
            padding: 3,
            marginRight: 9,
            borderWidth: 2,
            borderRadius: 50,
            borderColor: Colors.brightRed,
        },
        checkContainer: {
            padding: 4,
            marginRight: 9,
            borderWidth: 2,
            borderRadius: 50,
            borderColor: Colors.brightGreen,
        },
        medTime: {
            fontSize: 21,
            marginBottom: 24,
            fontFamily: Fonts.Roboto.light,
            ...getComplementalStyleMedTimeText(),
        },
        stock: {
            flexDirection: "row",
            alignItems: "center",
        },
        medStockText: {
            fontSize: 18,
            marginLeft: 6,
            fontFamily: Fonts.Roboto.light,
            ...getComplementalStyleMedStockText(),
        },
        buttonsContainer: {
            alignItems: "flex-end",
            justifyContent: "space-between",
        },
    });
};

export default styles;
