import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  width?: number;
  height?: number;
  color?: string;
}

function ICQrBox({width = 240, height = 240, color = '#6A6A6A'}: IProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 248 249" fill="none">
      <Path
        d="M211.407 3H241.062C243.11 3 244.769 4.65963 244.769 6.7069V36.3621"
        stroke={color}
        stroke-width="10"
        stroke-linecap="round"
      />
      <Path
        d="M36.3623 3H6.70713C4.65987 3 3.00023 4.65963 3.00023 6.7069V36.3621"
        stroke={color}
        stroke-width="10"
        stroke-linecap="round"
      />
      <Path
        d="M36.3623 246.069H6.70713C4.65987 246.069 3.00023 244.409 3.00023 242.362V212.707"
        stroke={color}
        stroke-width="10"
        stroke-linecap="round"
      />
      <Path
        d="M211.638 246.069H241.293C243.34 246.069 245 244.409 245 242.362V212.707"
        stroke={color}
        stroke-width="10"
        stroke-linecap="round"
      />
      <Path
        d="M4.29932 122.159L244.769 122.159"
        stroke={color}
        stroke-width="10"
        stroke-linecap="round"
      />
    </Svg>
  );
}

export default ICQrBox;
