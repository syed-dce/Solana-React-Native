import React, {useRef, useEffect} from 'react';
import {StyleSheet, SafeAreaView, ScrollView, StatusBar, TouchableOpacity,
  ImageBackground, View, Text, Alert} from 'react-native';

import {Header} from '../components';
import {AccountProvider, ConnectionProvider} from '../providers';
import {MyAccount} from '../screens';
import {useConnections} from '../providers';

export const AddPost = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);
  const {walletBalance} = useConnections();

  
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView>
        <View style={styles.container}>
          <Text>{walletBalance}</Text>

          {
            parseInt(walletBalance) > 0 ?
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {}}
                >
                  <Text style={{color: 'white'}}>Insuffiecient SOL balance</Text>
                </TouchableOpacity>
            </View>
            :
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {}}
                >
                  <Text style={{color: 'white' }}>Insuffiecient SOL balance</Text>
                </TouchableOpacity>
            </View>
          }
            
        </View>

      </SafeAreaView>
    </>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  container: {
        height: '100%',
        backgroundColor: '#cffff6',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
      backgroundColor: '#17002b',
      padding: 10,
      borderRadius: 15,
      width: '80%'
    },
})