import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import Colors from "../../shared/utils/AssetsReferences/Colors";

interface NavCalendarFillProps extends SvgProps {
    width?: string;
    heigth?: string;
    color?: string;
}

const NavCalendarFill: React.FC<NavCalendarFillProps> = ({
    width = 512,
    heigth = 512,
    color = Colors.black2E,
}) => {
    return (
        <Svg
            width={width}
            height={heigth}
            viewBox="0 0 30 30"
            fill="none"
        >
            <Path
                d="M5.273 1.406v.88H0v5.273h30V2.285h-5.273V.527h-1.758v1.758H7.03V.527H5.273v.88zm1.758 2.637v1.758H5.273V2.285h1.758v1.758zm17.696 0v1.758h-1.758V2.285h1.758v1.758zM0 19.395v10.078h30V9.316H0v10.079zm7.734-5.567v1.524H4.63V12.305h3.105v1.523zm5.86 0v1.524h-3.106V12.305h3.106v1.523zm5.918 0v1.524h-3.106V12.305h3.106v1.523zm5.86 0v1.524h-3.106V12.305h3.105v1.523zM7.733 19.131v1.553L6.2 20.672l-1.54-.018-.018-1.54-.012-1.536h3.105v1.553zm5.86 0v1.553l-1.535-.012-1.541-.018-.018-1.54-.012-1.536h3.106v1.553zm5.906-.018l-.018 1.541-1.535.018-1.54.012v-3.106h3.105l-.012 1.535zm5.86 0l-.018 1.541-1.535.018-1.541.012v-3.106h3.105l-.012 1.535zM7.733 24.404v1.553L6.2 25.945l-1.54-.017-.018-1.541-.012-1.535h3.105v1.552zm5.86 0v1.553l-1.535-.012-1.541-.017-.018-1.541-.012-1.535h3.106v1.552zm5.906-.017l-.018 1.54-1.535.018-1.54.012v-3.105h3.105l-.012 1.535zm5.86 0l-.018 1.54-1.535.018-1.541.012v-3.105h3.105l-.012 1.535z"
                fill={color}
            />
        </Svg>
    );
};

export default NavCalendarFill;
