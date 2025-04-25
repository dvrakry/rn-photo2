import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../env';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { initializeFirestore } from 'firebase/firestore'; // ← 이 부분 추가!
//변경

export const initFirebase = () => {
  //return initializeApp(firebaseConfig);
  try {
    const app = initializeApp(firebaseConfig);
    initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
    // Firestore Long Polling 설정
    // initializeFirestore(app, {
    //   experimentalForceLongPolling: true,
    //   useFetchStreams: false,
    // });

    return app;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};
