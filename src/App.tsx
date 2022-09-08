import React, {useRef, useEffect} from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import {Header} from './components';
import {AccountProvider, ConnectionProvider} from './providers';
import {Wallet} from './screens';

export const App = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);
  
  useEffect(() => {
  	SplashScreen.hide();
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Header />
      <SafeAreaView>
        <ScrollView
          ref={ref => (scrollViewRef.current = ref)}
          contentInsetAdjustmentBehavior="automatic">
          <AccountProvider>
            <ConnectionProvider>
              <Wallet />
            </ConnectionProvider>
          </AccountProvider>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
