import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  width?: number;
  height?: number;
  color?: string;
}

function ICCrown({width = 10, height = 17, color = '#ACACAC'}: IProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        fill={color}
        d="M5 16 3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5Zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1Z"
      />
    </Svg>
  );
}

export default ICCrown;
