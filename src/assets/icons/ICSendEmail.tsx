import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  color?: string;
}
const ICSendEmail = (props: IProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke={props.color ?? 'black'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.25 12.647 8.428 7.415a.749.749 0 0 0 1.228-.393l3.525-15.394a.75.75 0 0 0-1.003-.862L3.122 10.209c-.694.272-.6 1.285.131 1.435l4.997 1.003ZM8.25 12.647 21.01 3.43"
    />
    <Path
      stroke={props.color ?? 'black'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.46 16.35-2.926 2.925a.75.75 0 0 1-1.284-.525v-6.103"
    />
  </Svg>
);
export default ICSendEmail;
