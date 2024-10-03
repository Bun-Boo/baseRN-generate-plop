import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  width?: number;
  height?: number;
  color?: string;
}

function ICRightOutlined({width = 7, height = 13, color = '#1C1815'}: IProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 7 13" fill="none">
      <Path
        d="M0.857147 11.6428L6 6.49997L0.857147 1.35711"
        stroke={color}
        stroke-width="1.71429"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default ICRightOutlined;
