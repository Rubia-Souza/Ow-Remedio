import { StyleSheet, } from "react-native";

import Colors from "../../../../utils/AssetsReferences/Colors";
import Fonts from "../../../../utils/AssetsReferences/Fonts";

export interface OptionItemStyles {
    isSelected: boolean;
}

export class Styles {
    static getSheet = (props: OptionItemStyles) => {
        return StyleSheet.create({
            OptionsContainer: {
                flex: 1,
                padding: 12,
                borderBottomWidth: 1,
                borderColor: Colors.whiteF4,
                backgroundColor: props.isSelected ? Colors.brightRed : Colors.whiteFE,
            },
            OptionText: {
                fontSize: 18,
                color: Colors.black2E,
                fontFamily: Fonts.Roboto.light,
            },
        });
    }
}
