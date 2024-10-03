import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  color?: string;
}
const ICStar = (props: IProps) => (
  <Svg width={27} height={26} fill="none" {...props}>
    <Path
      fill={props.color ?? '#FFB802'}
      d="M11.66 1.407a2 2 0 0 1 3.3 0l3.203 4.675a2 2 0 0 0 1.084.787l5.436 1.603a2 2 0 0 1 1.02 3.138L22.247 16.1a2 2 0 0 0-.414 1.275l.156 5.665a2 2 0 0 1-2.67 1.94l-5.34-1.9a2 2 0 0 0-1.34 0l-5.339 1.9a2 2 0 0 1-2.67-1.94l.157-5.665a2 2 0 0 0-.414-1.275L.917 11.61a2 2 0 0 1 1.02-3.138l5.435-1.603a2 2 0 0 0 1.084-.787l3.204-4.675Z"
      opacity={0.8}
    />
  </Svg>
);
export default ICStar;
