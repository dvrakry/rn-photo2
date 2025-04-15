import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../env';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
//변경

export const initFirebase = () => {
  //return initializeApp(firebaseConfig);
  try {
    const app = initializeApp(firebaseConfig);
    initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
    return app;
  } catch (e) {
    console.log(e);
  }
};
