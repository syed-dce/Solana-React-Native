import React, {useRef, useEffect} from 'react';
import {StyleSheet, SafeAreaView, ScrollView, StatusBar, ImageBackground, View, Text} from 'react-native';

import {Header} from '../components';
import {AccountProvider, ConnectionProvider} from '../providers';
import {MyAccount} from '../screens';

export const AddPost = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);
  
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView>
        <View style={styles.container}>
            
        </View>

      </SafeAreaView>
    </>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  container: {
        height: '100%',
        backgroundColor: '#cffff6'
    }
})