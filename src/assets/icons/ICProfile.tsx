import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  width?: number;
  height?: number;
  color?: string;
}

function ICProfile({width = 25, height = 24, color = '#C7C7C7'}: IProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.3485 12.1807C24.3485 18.7062 19.0586 23.9961 12.5332 23.9961C6.0077 23.9961 0.717773 18.7062 0.717773 12.1807C0.717773 5.65522 6.0077 0.365295 12.5332 0.365295C19.0586 0.365295 24.3485 5.65522 24.3485 12.1807ZM15.487 7.74991C15.487 9.38128 14.1646 10.7038 12.5332 10.7038C10.9018 10.7038 9.57931 9.38128 9.57931 7.74991C9.57931 6.11855 10.9018 4.79606 12.5332 4.79606C14.1646 4.79606 15.487 6.11855 15.487 7.74991ZM12.5331 13.6576C9.5533 13.6576 6.98575 15.4225 5.81868 17.9639C7.44373 19.8489 9.84907 21.0422 12.5331 21.0422C15.2172 21.0422 17.6225 19.849 19.2475 17.964C18.0805 15.4225 15.5129 13.6576 12.5331 13.6576Z"
        fill={color}
      />
    </Svg>
  );
}

export default ICProfile;
