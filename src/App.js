import { StatusBar } from 'expo-status-bar';
import Navigation from './navigations';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Asset } from 'expo-asset';
import { initFirebase } from './api/firebase';

export default App = () => {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        //Image 캐싱
        await Asset.fromModule(require('../assets/cover.png')).downloadAsync();

        //firebase
        initFirebase();
      } catch (e) {
        console.log(e);
      } finally {
        setIsReady(true);
      }
    })();
  }, []);

  const onReady = async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  };

  if (!isReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onReady}>
      <StatusBar style={'dark'} />
      <Navigation />
    </View>
  );
};
