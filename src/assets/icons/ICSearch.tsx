import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

interface IProps {
  width?: number;
  height?: number;
  color?: string;
}

function ICSearch({width = 24, height = 25, color = 'white'}: IProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 25" fill="none">
      <G clip-path="url(#clip0_555_58739)">
        <Path
          d="M11 2.5C15.968 2.5 20 6.532 20 11.5C20 16.468 15.968 20.5 11 20.5C6.032 20.5 2 16.468 2 11.5C2 6.532 6.032 2.5 11 2.5ZM11 18.5C14.867 18.5 18 15.367 18 11.5C18 7.632 14.867 4.5 11 4.5C7.132 4.5 4 7.632 4 11.5C4 15.367 7.132 18.5 11 18.5ZM19.485 18.571L22.314 21.399L20.899 22.814L18.071 19.985L19.485 18.571Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_555_58739">
          <Rect
            width="24"
            height="24"
            fill={color}
            transform="translate(0 0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ICSearch;
