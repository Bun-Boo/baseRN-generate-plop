import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  color?: string;
}
const ICBag = (props: IProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke={props.color ?? 'black'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.25 6.75H3.75A.75.75 0 0 0 3 7.5v12c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75v-12a.75.75 0 0 0-.75-.75ZM15.75 6.75v-1.5a1.5 1.5 0 0 0-1.5-1.5h-4.5a1.5 1.5 0 0 0-1.5 1.5v1.5"
    />
    <Path
      stroke={props.color ?? 'black'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 11.84a17.934 17.934 0 0 1-9 2.41 17.84 17.84 0 0 1-9-2.41M10.875 11.25h2.25"
    />
  </Svg>
);
export default ICBag;
