import {Linking, Platform} from 'react-native';

const openMapDirection = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}): void => {
  const url: any = Platform.select({
    ios: `comgooglemaps://?center=${latitude},${longitude}&q=${latitude},${longitude}&zoom=14&views=traffic"`,
    android: `geo://?q=${latitude},${longitude}`,
  });
  Linking.canOpenURL(url)
    .then(supported => {
      if (supported) {
        return Linking.openURL(url);
      }

      const browser_url = `https://www.google.de/maps/@${latitude},${longitude}`;
      return Linking.openURL(browser_url);
    })
    .catch(() => {
      if (Platform.OS === 'ios') {
        Linking.openURL(`maps://?q=${latitude},${longitude}`);
      }
    });
};

export default openMapDirection;
