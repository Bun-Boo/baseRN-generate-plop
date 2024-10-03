import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

interface IProps {
  width?: number;
  height?: number;
  color?: string;
}

function ICDown({width = 13, height = 13, color = 'white'}: IProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 13 9" fill="none">
      <G clip-path="url(#clip0_523_63657)">
        <Path
          d="M1.64111 2.17859L6.78397 7.32145L11.9268 2.17859"
          stroke={color}
          stroke-width="1.71429"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_523_63657">
          <Rect
            width="12"
            height="7.71429"
            fill={color}
            transform="translate(0.78418 0.892822)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ICDown;
