import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import Colors from "../../shared/utils/AssetsReferences/Colors";

interface xProps extends SvgProps {
    width?: string;
    height?: string;
    color?: string;
}

const initialState: xProps = {
    width: "30",
    height: "30",
    color: Colors.black2E,
};

const X: React.FC<xProps> = (
    props: xProps
) => {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 27 27"
            fill="none"
            {...props}
        >
            <Path
                d="M.88.084C.534.19.19.548.08.912c-.101.338-.101.475.004.834.08.279.222.427 5.812 6.016l5.732 5.738-5.732 5.732C.306 24.827.164 24.975.084 25.255c-.105.358-.105.495 0 .843.148.507.691.902 1.234.902.106 0 .312-.037.454-.084.237-.08.733-.56 5.99-5.817l5.738-5.727 5.738 5.727c5.473 5.474 5.742 5.738 6.017 5.822.638.206 1.276-.063 1.603-.68.158-.306.158-.818-.01-1.14-.085-.168-1.804-1.919-5.796-5.916l-5.68-5.685 5.68-5.685c3.902-3.907 5.71-5.748 5.785-5.9.147-.296.19-.623.116-.892A1.32 1.32 0 0025.28.08l-.311.09-5.738 5.727-5.732 5.732-5.737-5.732C2.167.306 2.025.163 1.746.084c-.349-.1-.533-.1-.865 0z"
                fill={props.color}
            />
        </Svg>
    );
};

X.defaultProps = initialState;

export default X;
