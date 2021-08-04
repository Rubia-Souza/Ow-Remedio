import React from "react"
import Svg, { SvgProps, Path} from "react-native-svg"
import Colors from "../../shared/utils/AssetsReferences/Colors";

interface DayProps extends SvgProps {
    width?: string;
    heigth?: string;
    color?: string;
}

const Day: React.FC<DayProps> = ({
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
                d="M14.525.135c-.17.094-.304.222-.404.398-.14.252-.146.293-.164 1.63-.03 1.622.006 2.038.182 2.296.445.65 1.283.65 1.728-.006.13-.187.13-.223.13-1.951V.744L15.85.492A1.068 1.068 0 0014.988 0c-.111 0-.322.059-.463.135zM4.717 4.184c-.51.228-.756.86-.528 1.347.053.106.622.721 1.278 1.365.967.961 1.23 1.19 1.43 1.249.755.228 1.476-.493 1.248-1.249-.06-.199-.288-.462-1.249-1.43-.644-.655-1.26-1.224-1.365-1.277a1.088 1.088 0 00-.814-.005zM24.457 4.195c-.1.047-.709.621-1.354 1.272-.96.967-1.189 1.23-1.248 1.43-.228.755.493 1.476 1.248 1.248.2-.06.463-.288 1.43-1.249.656-.644 1.225-1.26 1.277-1.365.387-.82-.538-1.74-1.353-1.336zM13.887 7.12a7.892 7.892 0 00-4.518 2.267C7.154 11.602 6.457 14.9 7.576 17.87c.756 2.022 2.531 3.797 4.553 4.553 2.982 1.125 6.258.428 8.49-1.805a7.922 7.922 0 000-11.238 7.92 7.92 0 00-6.732-2.262zm2.086 2.05c3.234.568 5.408 3.615 4.857 6.803-.217 1.23-.709 2.203-1.582 3.117-1.916 2.021-4.992 2.402-7.395.914-.597-.363-1.494-1.26-1.857-1.858-1.635-2.642-.99-6.058 1.488-7.892a5.89 5.89 0 014.489-1.084zM.486 14.15A1.074 1.074 0 000 15c0 .316.21.686.492.85l.252.146h1.758c1.728 0 1.764 0 1.951-.135.656-.445.656-1.277 0-1.728-.187-.13-.223-.13-1.957-.13H.732l-.246.147zM25.547 14.133c-.387.264-.563.668-.469 1.084.065.263.211.474.469.644.187.135.223.135 1.957.135 1.717 0 1.77-.006 1.992-.135.27-.152.504-.545.504-.85 0-.327-.21-.696-.492-.86l-.252-.147h-1.758c-1.729 0-1.764 0-1.951.129zM6.768 21.908c-.288.135-2.514 2.361-2.608 2.602-.31.832.58 1.676 1.371 1.3.106-.052.721-.62 1.365-1.277.961-.967 1.19-1.23 1.249-1.43.14-.468-.077-.949-.528-1.177-.316-.158-.539-.164-.85-.018zM22.383 21.926c-.451.228-.668.709-.527 1.178.058.199.287.462 1.247 1.43.645.655 1.26 1.224 1.366 1.277.79.375 1.681-.47 1.365-1.301-.088-.24-2.32-2.467-2.602-2.602-.31-.146-.533-.14-.85.018zM14.771 25.078c-.445.106-.738.475-.796 1.014-.024.205-.03.99-.018 1.746.018 1.277.03 1.389.146 1.611.364.692 1.36.72 1.747.059l.146-.252v-1.74c0-1.178-.023-1.782-.064-1.87-.229-.439-.698-.668-1.16-.568z"
                fill={color}
            />
        </Svg>
    );
};

export default Day;
