import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  width?: number;
  height?: number;
  color?: string;
}

function ICClock({width = 24, height = 24, color = '#777E91'}: IProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C16.5563 3.75 20.25 7.44365 20.25 12C20.25 16.5563 16.5563 20.25 12 20.25C7.44365 20.25 3.75 16.5563 3.75 12ZM12.75 8C12.75 7.58579 12.4142 7.25 12 7.25C11.5858 7.25 11.25 7.58579 11.25 8V12C11.25 12.2508 11.3753 12.4849 11.584 12.624L14.584 14.624C14.9286 14.8538 15.3943 14.7607 15.624 14.416C15.8538 14.0714 15.7607 13.6057 15.416 13.376L12.75 11.5986V8Z"
        fill={color}
      />
    </Svg>
  );
}

export default ICClock;
