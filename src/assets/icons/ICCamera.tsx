import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  width?: number;
  height?: number;
  color?: string;
}

function ICCamera({width = 13, height = 13, color = '#353945'}: IProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        fill={color}
        d="M8.658 8.079a1.157 1.157 0 1 1-2.315 0 1.157 1.157 0 0 1 2.315 0Z"
      />
      <Path
        fill={color}
        fillRule="evenodd"
        d="M1.713 5.383c0-.796.542-1.49 1.315-1.684l1-.25.814-1.22c.214-.323.576-.516.963-.516h3.39c.388 0 .749.193.964.515l.813 1.221 1 .25a1.736 1.736 0 0 1 1.315 1.684v6.168c0 .959-.777 1.736-1.736 1.736H3.45a1.736 1.736 0 0 1-1.736-1.736V5.383Zm9.838.38a.579.579 0 1 1-1.157 0 .579.579 0 0 1 1.157 0ZM9.815 8.08a2.315 2.315 0 1 1-4.63 0 2.315 2.315 0 0 1 4.63 0Z"
        clipRule="evenodd"
      />
      <Path
        fill={color}
        d="M8.658 8.079a1.157 1.157 0 1 1-2.315 0 1.157 1.157 0 0 1 2.315 0Z"
      />
    </Svg>
  );
}

export default ICCamera;
