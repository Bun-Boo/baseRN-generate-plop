import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  color?: string;
}
const ICTick = (props: IProps) => (
  <Svg width={15} height={12} fill="none" {...props}>
    <Path
      fill={props.color ?? '#FFB802'}
      d="M14.43.38h-1.21c-.17 0-.331.078-.435.211L5.64 9.641l-3.426-4.34a.554.554 0 0 0-.435-.212H.57a.138.138 0 0 0-.11.224l4.746 6.012c.222.28.648.28.871 0L14.54.602a.137.137 0 0 0-.11-.222Z"
    />
  </Svg>
);
export default ICTick;
