import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  color?: string;
}
const ICSwitchAccount = (props: IProps) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Path
      stroke={props.color ?? 'black'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.477 15.426a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
    />
    <Path
      stroke={props.color ?? 'black'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.458 19.12a6.75 6.75 0 0 1 12.037 0M19.227 12.426l2.25 2.25 2.25-2.25M1.227 12.426l2.25-2.25 2.25 2.25"
    />
    <Path
      stroke={props.color ?? 'black'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.477 14.676v-2.25A9 9 0 0 0 4.91 7.54M3.477 10.176v2.25a9 9 0 0 0 16.565 4.884"
    />
  </Svg>
);
export default ICSwitchAccount;
