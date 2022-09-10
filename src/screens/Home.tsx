import React, {useRef, useEffect} from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import {Header} from '../components';
import {AccountProvider, ConnectionProvider} from '../providers';
import {Wallet} from '../screens';

export const Home = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Header />
      <SafeAreaView>
        <ScrollView style={{height: '70%', backgroundColor: '#d4edff'}}
          ref={ref => (scrollViewRef.current = ref)}
          contentInsetAdjustmentBehavior="automatic">
          {/* <AccountProvider>
            <ConnectionProvider> */}
              <Wallet />
            {/* </ConnectionProvider>
          </AccountProvider> */}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
