import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  width?: number;
  height?: number;
  color?: string;
}

function ICMarker({width = 40, height = 40, color = 'red'}: IProps) {
  return (
    <Svg width={width} height={height} fill={color}>
      <Path
        fill="#EA4436"
        d="M23.9 24.042 14 34l-9.9-9.958A14.11 14.11 0 0 1 .27 16.83a14.161 14.161 0 0 1 .797-8.137 14.066 14.066 0 0 1 5.156-6.32A13.941 13.941 0 0 1 14 0c2.769 0 5.476.826 7.778 2.373a14.066 14.066 0 0 1 5.156 6.32 14.161 14.161 0 0 1 .797 8.138 14.11 14.11 0 0 1-3.831 7.21Zm-9.9-6.83c.825 0 1.616-.329 2.2-.916a3.14 3.14 0 0 0 0-4.426 3.102 3.102 0 0 0-4.4 0 3.14 3.14 0 0 0 0 4.426 3.102 3.102 0 0 0 2.2.917Z"
      />
    </Svg>
  );
}

export default ICMarker;
