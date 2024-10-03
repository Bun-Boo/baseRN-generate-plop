import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  width?: number;
  height?: number;
  color?: string;
}

function ICCameraProfile({width = 22, height = 20, color = '#A32E8C'}: IProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.04 2.0515C15.05 2.4535 15.359 3.8535 15.772 4.3035C16.185 4.7535 16.776 4.9065 17.103 4.9065C18.841 4.9065 20.25 6.3155 20.25 8.0525V13.8475C20.25 16.1775 18.36 18.0675 16.03 18.0675H5.97C3.639 18.0675 1.75 16.1775 1.75 13.8475V8.0525C1.75 6.3155 3.159 4.9065 4.897 4.9065C5.223 4.9065 5.814 4.7535 6.228 4.3035C6.641 3.8535 6.949 2.4535 7.959 2.0515C8.97 1.6495 13.03 1.6495 14.04 2.0515Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.4955 7.5H16.5045"
        stroke="#3D3D3D"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.1783 11.1282C14.1783 9.37222 12.7553 7.94922 10.9993 7.94922C9.24331 7.94922 7.82031 9.37222 7.82031 11.1282C7.82031 12.8842 9.24331 14.3072 10.9993 14.3072C12.7553 14.3072 14.1783 12.8842 14.1783 11.1282Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default ICCameraProfile;
