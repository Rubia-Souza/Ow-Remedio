import React from "react"
import Svg, { SvgProps, Path, ClipPath, Defs, G } from "react-native-svg"
import Colors from "../../shared/utils/AssetsReferences/Colors";

interface ExclamationProps extends SvgProps {
    width?: string;
    height?: string;
    color?: string;
}
const initialState: ExclamationProps = {
    width: "30",
    height: "30",
    color: Colors.black2E,
};

const Exclamation: React.FC<ExclamationProps> = (
    props: ExclamationProps
) => {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <G clipPath="url(#prefix__clip0)" fill={props.color}>
                <Path d="M10.108.337c-.306.074-.54.207-.78.442-.24.243-.387.505-.453.825-.06.276-.06 11.414 0 11.69.066.32.214.582.454.822a1.63 1.63 0 002.33.003c.24-.243.388-.508.459-.825.059-.276.059-11.41 0-11.69a1.61 1.61 0 00-.455-.825 1.613 1.613 0 00-1.555-.442zM10.1 15.88c-.307.073-.54.206-.78.442a1.622 1.622 0 000 2.324 1.63 1.63 0 002.331.003c.658-.659.658-1.672.004-2.327a1.613 1.613 0 00-1.555-.442z" />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path
                        fill={props.color}
                        transform="translate(.304 .286)"
                        d="M0 0h18.912v18.857H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    );
};

Exclamation.defaultProps = initialState;

export default Exclamation;
