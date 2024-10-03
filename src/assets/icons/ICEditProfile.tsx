import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  width?: number;
  height?: number;
  color?: string;
}

function ICEditProfile({width = 18, height = 18, color = '#fff'}: IProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 18" fill="none">
      <Path
        d="M8.88112 2.68738H2.75136C2.28687 2.68738 1.8414 2.85493 1.51296 3.15316C1.18452 3.4514 1 3.85589 1 4.27766V15.4097C1 15.8314 1.18452 16.2359 1.51296 16.5342C1.8414 16.8324 2.28687 16.9999 2.75136 16.9999H15.0109C15.4754 16.9999 15.9208 16.8324 16.2493 16.5342C16.5777 16.2359 16.7622 15.8314 16.7622 15.4097V9.84366"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.4485 1.49404C15.7969 1.17771 16.2694 1 16.7621 1C17.2547 1 17.7272 1.17771 18.0756 1.49404C18.4239 1.81037 18.6197 2.2394 18.6197 2.68675C18.6197 3.13411 18.4239 3.56314 18.0756 3.87947L9.75662 11.4333L6.25391 12.2285L7.12959 9.04789L15.4485 1.49404Z"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ICEditProfile;
