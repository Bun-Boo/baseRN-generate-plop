import {Platform, Linking, Alert, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {isIOS} from '../device';
import {PERMISSION_LOCATION} from 'src/constants/enumType';
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';

export function CallNumber(phone: any): void {
  let phoneNumber = '';
  if (Platform.OS === 'android') {
    phoneNumber = `tel:${phone.replace(/ /g, '')}`;
  } else {
    phoneNumber = `telprompt:${phone.replace(/ /g, '')}`;
  }

  Linking.canOpenURL(phoneNumber)
    .then(supported => {
      if (!supported) {
        Alert.alert('Số điện thoại không đúng');
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch(err => console.log(err));
}

export function formatNumberWithCommas(num?: number) {
  return num?.toLocaleString();
}

export function OpenSettingDevice(): void {
  if (isIOS) {
    Linking.openURL('app-settings:');
  } else {
    Linking.openSettings();
  }
}

export const locationPermission = () =>
  new Promise(async (resolve, reject) => {
    if (isIOS) {
      try {
        const permissionStatus = await Geolocation.requestAuthorization(
          'always',
        );
        console.log('permissionStatus--------', permissionStatus);

        if (permissionStatus === PERMISSION_LOCATION.GRANTED) {
          return resolve(PERMISSION_LOCATION.GRANTED);
        }
        if (permissionStatus === PERMISSION_LOCATION.DENIED) {
          return resolve(PERMISSION_LOCATION.DENIED);
        }
        // reject("permission not granted");
      } catch (error) {
        return reject(error);
      }
    }
    return PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    )
      .then(granted => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          resolve(PERMISSION_LOCATION.GRANTED);
        } else {
          return resolve(PERMISSION_LOCATION.DENIED);
        }
        // if (granted === PermissionsAndroid.RESULTS.DENIED) {
        //   return resolve(PERMISSION_LOCATION.DENIED);
        // }
        // return reject("Location Permission denied");
      })
      .catch(error => {
        console.log('Ask Location permission error: ', error);
        return reject(error);
      });
  });

// export const checkCameraPermission = async () => {
//   const cameraPermission = isIOS
//     ? PERMISSIONS.IOS.CAMERA
//     : PERMISSIONS.ANDROID.CAMERA;
//   try {
//     const status = await check(cameraPermission);
//     if (status === RESULTS.GRANTED) {
//       return status;
//     } else if (status === RESULTS.DENIED) {
//       return status;
//     } else if (status === RESULTS.BLOCKED) {
//       return status;
//     } else {
//       // For other possible statuses, you can choose how to handle them (e.g., in progress, unavailable, etc.)
//       console.log('Camera permission status:', status);
//       return status;
//     }
//   } catch (error) {
//     console.warn('Error while checking camera permission:', error);
//     return false;
//   }
// };

export const requestCameraPermission = async () => {
  const cameraPermission = isIOS
    ? PERMISSIONS.IOS.CAMERA
    : PERMISSIONS.ANDROID.CAMERA;

  try {
    const status = await request(cameraPermission);
    if (status === RESULTS.GRANTED) {
      return status;
    } else if (status === RESULTS.DENIED) {
      return status;
    } else if (status === RESULTS.BLOCKED) {
      return status;
    } else {
      // For other possible statuses, you can choose how to handle them (e.g., in progress, unavailable, etc.)
      console.log('Camera permission status:', status);
      return status;
    }
  } catch (error) {
    console.warn('Error while requesting camera permission:', error);
    return false;
  }
};

export const getCurrentLocation = () =>
  new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        const cords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        resolve(cords);
      },
      error => {
        reject(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 5000,
      },
    );
  });
