import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  width?: number;
  height?: number;
  color?: string;
}
function ICFilter({width = 23, height = 24, color = '#A32E8C'}: IProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        fill={color}
        fillRule="evenodd"
        d="m6.575 15.686 1.7 1.055V9.785c0-.277-.09-.542-.247-.739L2.52 2.111h13.226l-5.499 6.935a1.198 1.198 0 0 0-.246.739l-.026 8.16 1.7 1.055v-8.782l5.593-7.051c.224-.282.352-.66.357-1.056V1.056c0-.28-.09-.549-.249-.747A.776.776 0 0 0 16.775 0h-15.3a.776.776 0 0 0-.601.31c-.16.197-.249.466-.249.746V2.11c.005.396.133.774.357 1.056l5.593 7.05v5.469Z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
export default ICFilter;
