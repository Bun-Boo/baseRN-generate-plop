import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
interface IProps {
  width?: number;
  height?: number;
  color?: string;
}
function ICUp({width = 12, height = 9, color = '#8C8C8C'}: IProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 12 9" fill="none">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.714}
        d="M.857 1.929 6 7.07l5.143-5.142"
      />
    </Svg>
  );
}
export default ICUp;
