import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import Colors from "../../shared/utils/AssetsReferences/Colors";

interface NavCalendarProps extends SvgProps {
    width?: string;
    heigth?: string;
    color?: string;
}

const NavCalendar: React.FC<NavCalendarProps> = ({
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
                d="M5.273 1.406v.88H0V29.472h30V2.285h-5.273V.527h-1.758v1.758H7.03V.527H5.273v.88zm0 3.516V5.8h1.758V4.043H22.97v1.758h1.758V4.043H28.242v3.516H1.758V4.043H5.273v.879zm22.97 13.594v9.199H1.757V9.316h26.484v9.2z"
                fill={color}
            />
            <Path
                d="M4.67 11.701c-.024.018-.041.72-.041 1.553v1.512h3.105V11.66H6.223c-.832 0-1.535.018-1.553.041zM10.53 11.701c-.024.018-.042.72-.042 1.553v1.512h3.106V11.66h-1.512c-.832 0-1.535.018-1.553.041zM16.406 13.213v1.553h3.106l-.012-1.541-.018-1.535-1.535-.018-1.54-.012v1.553zM22.266 13.213v1.553h3.105l-.012-1.541-.017-1.535-1.535-.018-1.541-.012v1.553zM4.64 18.527l.018 1.541 1.541.018 1.535.012v-3.106H4.63l.012 1.535zM10.5 18.527l.018 1.541 1.54.018 1.536.012v-3.106h-3.106l.012 1.535zM16.406 18.545v1.553l1.541-.012 1.535-.018.018-1.54.012-1.536h-3.106v1.553zM22.266 18.545v1.553l1.54-.012 1.536-.018.017-1.54.012-1.536h-3.105v1.553zM4.64 23.8l.018 1.542 1.541.017 1.535.012v-3.105H4.63L4.64 23.8zM10.5 23.8l.018 1.542 1.54.017 1.536.012v-3.105h-3.106L10.5 23.8zM16.406 23.818v1.553l1.541-.012 1.535-.017.018-1.541.012-1.535h-3.106v1.552zM22.266 23.818v1.553l1.54-.012 1.536-.017.017-1.541.012-1.535h-3.105v1.552z"
                fill={color}
            />
        </Svg>
    );
};

export default NavCalendar;
