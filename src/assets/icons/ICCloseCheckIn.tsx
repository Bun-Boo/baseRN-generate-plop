import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

interface IProps {
  width?: number;
  height?: number;
  color?: string;
}

function ICCloseCheckIn({width = 30, height = 30, color = '#A32E8C'}: IProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 26 26" fill="none">
      <Rect
        x="0.870117"
        y="0.5"
        width="24.63"
        height="24.63"
        rx="12.315"
        fill="white"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.53255 9.16255C9.74521 8.94989 10.09 8.94989 10.3027 9.16255L13.185 12.0449L16.0674 9.16255C16.28 8.94988 16.6248 8.94988 16.8375 9.16255C17.0502 9.37522 17.0502 9.72002 16.8375 9.93269L13.9552 12.815L16.8375 15.6974C17.0502 15.91 17.0502 16.2548 16.8375 16.4675C16.6248 16.6802 16.28 16.6802 16.0674 16.4675L13.185 13.5852L10.3027 16.4675C10.09 16.6802 9.74521 16.6802 9.53255 16.4675C9.31988 16.2548 9.31988 15.91 9.53255 15.6974L12.4149 12.815L9.53255 9.93269C9.31988 9.72002 9.31988 9.37522 9.53255 9.16255Z"
        fill={color}
      />
      <Rect
        x="0.870117"
        y="0.5"
        width="24.63"
        height="24.63"
        rx="12.315"
        stroke={color}
      />
    </Svg>
  );
}

export default ICCloseCheckIn;
