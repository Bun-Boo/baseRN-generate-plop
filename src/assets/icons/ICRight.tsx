import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

interface IProps {
  width?: number;
  height?: number;
  color?: string;
}

function ICRight({width = 6, height = 10, color = '#A32E8C'}: IProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 6 10" fill="none">
      <G clipPath="url(#clip0_101_287)">
        <Path
          d="M1.23633 1.60506L5.0459 5.41463L1.23633 9.22421"
          stroke={color}
          strokeWidth={1.26986}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_101_287">
          <Rect
            width={8.889}
            height={5.71436}
            fill="white"
            transform="matrix(0 1 1 0 0.285156 0.970135)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ICRight;
