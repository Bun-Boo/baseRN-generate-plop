import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  width?: number;
  height?: number;
  color?: string;
}

function ICClose({width = 14, height = 14, color = '#797979'}: IProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 14 14" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.965671 0.965427C1.31703 0.614064 1.88671 0.614064 2.23807 0.965427L7.0002 5.72756L11.7623 0.965427C12.1137 0.614064 12.6834 0.614064 13.0347 0.965427C13.3861 1.31679 13.3861 1.88646 13.0347 2.23782L8.2726 6.99995L13.0347 11.7621C13.3861 12.1134 13.3861 12.6831 13.0347 13.0345C12.6834 13.3858 12.1137 13.3858 11.7623 13.0345L7.0002 8.27235L2.23807 13.0345C1.88671 13.3858 1.31703 13.3858 0.965671 13.0345C0.614308 12.6831 0.614308 12.1134 0.965671 11.7621L5.7278 6.99995L0.965671 2.23783C0.614308 1.88646 0.614308 1.31679 0.965671 0.965427Z"
        fill={color}
      />
    </Svg>
  );
}

export default ICClose;
