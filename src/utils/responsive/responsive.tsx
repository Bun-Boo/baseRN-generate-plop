import {Dimensions} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const {width: deviceWidth, height: deviceHeight} = Dimensions.get('screen');

export default {screenWidth, screenHeight, deviceHeight, deviceWidth};
