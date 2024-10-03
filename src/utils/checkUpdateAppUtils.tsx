import {Alert, Linking, Platform} from 'react-native';
import {checkUpdateApp} from 'src/api/apiCommon';

const needUpdate = async (): Promise<boolean> => {
  const result = await checkUpdateApp();
  return result ?? false;
};

let isOpenAlert = false;

const handleUpdateApp = async (): Promise<void> => {
  const result = await checkUpdateApp();
  if (result && !isOpenAlert) {
    isOpenAlert = true;
    Alert.alert(
      'Update App',
      'There is a new version available. Please update the app to continue using it.',
      [
        {
          text: 'Update',
          onPress: () => {
            isOpenAlert = false;
            Linking.openURL(
              Platform.OS === 'ios'
                ? 'https://apps.apple.com/us/app/id6452469035'
                : 'https://play.google.com/store/apps/details?id=com.winshop',
            );
          },
        },
      ],
    );
  } else {
  }
};

export {needUpdate, handleUpdateApp};
