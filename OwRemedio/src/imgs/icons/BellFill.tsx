import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect, SvgProps } from "react-native-svg";
import Colors from "../../shared/utils/AssetsReferences/Colors";

interface BellFillProps extends SvgProps {
    width?: number;
    heigth?: number;
    color?: string;
}

const BellFill: React.FC<BellFillProps> = ({
    width = 512,
    heigth = 512,
    color = Colors.black2E,
}) => {
    return (
        <Svg width={width} height={heigth} viewBox="0 0 25 25" fill="none">
            <G clipPath="url(#clip0)">
                <Path d="M7.53595 4.76278C7.45236 4.89222 7.41925 4.99659 7.41555 5.14487C7.40987 5.33894 7.41562 5.35592 7.65305 5.79529L7.90055 6.24508L7.66556 6.44977C5.95628 7.93999 5.43893 10.447 6.40248 12.566C6.48042 12.7361 6.84137 13.3964 7.20875 14.0328C7.92945 15.2811 8.03423 15.5047 8.18387 16.1085C8.30021 16.5771 8.34382 17.0675 8.3168 17.5621C8.28627 18.0507 8.22583 18.3819 8.06215 18.9351C7.89028 19.5093 7.95191 19.9325 8.25958 20.2826C8.64178 20.7195 9.18445 20.8649 9.72608 20.6781C9.87411 20.6251 11.4091 19.747 15.4031 17.4329L20.8782 14.2597L21.0113 14.0895C21.1999 13.8466 21.3086 13.4794 21.2862 13.1594C21.2721 12.924 21.2549 12.8731 21.1107 12.6234C20.8717 12.2094 20.7081 12.1089 19.89 11.8871C18.8029 11.5933 18.0609 11.1448 17.3444 10.3609C17.1288 10.1281 17.0296 9.97028 16.2243 8.62468C15.263 7.01596 15.2011 6.9299 14.6582 6.43956C13.2866 5.20986 11.2784 4.79015 9.52102 5.37445L9.22754 5.47082L8.95919 5.04119C8.65616 4.5585 8.55763 4.46519 8.28882 4.42147C7.97854 4.36922 7.70873 4.49252 7.53595 4.76278Z" fill={color} />
                <Path d="M3.55014 7.66073C3.4265 7.80518 3.24952 8.50411 3.1667 9.19738C2.93143 11.1032 3.2677 12.9794 4.14081 14.6674C4.40473 15.1808 4.50948 15.2989 4.76495 15.3828C5.24356 15.5368 5.73255 15.1814 5.7386 14.6786C5.73784 14.5085 5.71709 14.4515 5.48481 13.9929C4.95824 12.9614 4.68891 12.0167 4.61349 10.9439C4.55632 10.1488 4.60483 9.4875 4.77989 8.65166C4.89777 8.09646 4.89551 7.98004 4.77598 7.77301C4.66172 7.57511 4.5523 7.48402 4.35493 7.42342C4.0519 7.3345 3.7562 7.41998 3.55014 7.66073Z" fill={color} />
                <Path d="M12.1695 2.68436C11.9782 2.90847 11.9518 3.25657 12.1034 3.52625C12.2247 3.73633 12.3459 3.81254 12.752 3.93937C14.668 4.52999 16.0809 5.60601 17.2137 7.34304C17.4723 7.74176 17.5756 7.83636 17.8201 7.89414C18.3107 8.01275 18.7508 7.6288 18.7222 7.10129C18.715 6.95524 18.6935 6.91086 18.3988 6.43555C17.5037 5.01186 16.2362 3.86412 14.7215 3.1108C13.9309 2.71881 12.9535 2.39001 12.6606 2.41704C12.4788 2.43268 12.3005 2.53159 12.1695 2.68436Z" fill={color} />
                <Path d="M13.4041 19.6588C13.6301 19.8815 14.1081 20.182 14.4125 20.2944C14.9231 20.4827 15.5974 20.5115 16.1431 20.3669C16.492 20.2751 17.1035 19.914 17.3631 19.6464C18.0467 18.9391 18.3272 17.9693 18.1137 17.0371C18.0821 16.9051 18.0546 16.7871 18.0511 16.781C18.0476 16.7749 16.9693 17.3893 15.6571 18.1469L13.267 19.5268L13.4041 19.6588Z" fill={color} />
            </G>
            <Defs>
                <ClipPath id="clip0">
                    <Rect width="18" height="18" fill="white" transform="translate(0 9) rotate(-30)" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};

export default BellFill;
