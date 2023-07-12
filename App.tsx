import React, { useRef, useEffect } from 'react';
import { LogBox, BackHandler } from 'react-native';
import { useState } from 'react';
import { loadAsync } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { navigationRef } from '~/utils/functions/navigator';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes/Routes';

import { Store } from '~/Store';

const App = () => {
  LogBox.ignoreLogs([
    'Require cycle:',
    'Require cycles',
    "Warning: Can't perform",
    'Constants.installationId',
    "Accessing the 'state' property of the 'route' object is not supported",
    'VirtualizedLists should never be nested inside plain',
  ]);

  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  const backAction = () => {
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  async function loadResourcesAsync() {
    try {
      await loadAsync({
        Regular: require('./assets/fonts/Roboto-Regular.ttf'),
        Italic: require('./assets/fonts/Roboto-Italic.ttf'),
        Light: require('./assets/fonts/Roboto-Light.ttf'),
        Black: require('./assets/fonts/Roboto-Black.ttf'),
        Bold: require('./assets/fonts/Roboto-Bold.ttf'),
        Medium: require('./assets/fonts/Roboto-Medium.ttf'),
        Thin: require('./assets/fonts/Roboto-Thin.ttf'),
        'Black-Italic': require('./assets/fonts/Roboto-BlackItalic.ttf'),
        'Bold-Italic': require('./assets/fonts/Roboto-BoldItalic.ttf'),
        'Light-Italic': require('./assets/fonts/Roboto-LightItalic.ttf'),
        'Medium-Italic': require('./assets/fonts/Roboto-MediumItalic.ttf'),
        'Thin-Italic': require('./assets/fonts/Roboto-ThinItalic.ttf'),
      });

      if ('status') {
        setShowIntro(true);
      }
    } catch (error) {
      console.log('Erro no carregamento do app', error);
    }
  }

  function handleFinishLoading() {
    setLoadingComplete(true);
  }

  function handleLoadingError(error: any) {
    console.warn(error);
  }

  if (!isLoadingComplete)
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={handleFinishLoading}
      />
    );

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar backgroundColor="black" />
        <NavigationContainer ref={navigationRef}>
          <Store>
            <Routes />
          </Store>
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
