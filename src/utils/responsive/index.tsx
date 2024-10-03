import {Dimensions} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const {height: deviceHeight, width: deviceWidth} = Dimensions.get('screen');

export {screenWidth, screenHeight, deviceHeight, deviceWidth};
