import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  width?: number;
  height?: number;
  color?: string;
}
function ICTest({width = 23, height = 24, color = '#A32E8C'}: IProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M15.5 31C24.06 31 31 24.06 31 15.5 31 6.94 24.06 0 15.5 0 6.94 0 0 6.94 0 15.5 0 24.06 6.94 31 15.5 31Zm1.163-20.15a1.163 1.163 0 0 0-2.325 0v3.488H10.85a1.163 1.163 0 0 0 0 2.325h3.488v3.487a1.163 1.163 0 0 0 2.325 0v-3.487h3.487a1.162 1.162 0 1 0 0-2.325h-3.487V10.85Z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
export default ICTest;
