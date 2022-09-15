import React, {useRef, useEffect} from 'react';
import {StyleSheet, SafeAreaView, ScrollView, StatusBar, ImageBackground, View} from 'react-native';

import {Header} from '../components';
import {AccountProvider, ConnectionProvider} from '../providers';
import {MyAccount} from '../screens';

export const Home = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Header />
      <SafeAreaView>
        <ScrollView style={ styles.scrollView }
          ref={ref => (scrollViewRef.current = ref)}
          contentInsetAdjustmentBehavior="automatic">

              <MyAccount />

        </ScrollView>

      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
    scrollView: {
        height: '100%',
        backgroundColor: '#d4edff'
    }
})