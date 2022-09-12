import React from 'react';
import {Button, TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {useAccounts} from '../providers';
import {Section} from './Section';

export const AccountSelect = () => {
  const {accounts, selectedAccount, selectAccount, createAccount} =
    useAccounts();

  return (
    <Section title={`Account: ${selectedAccount?.name || 'None'}`}>
      {accounts?.map(item => (
        <View  key={item.id} style={styles.buttonContainer}>
        <TouchableOpacity
          // disabled={item === selectedAccount}
          key={item.id}
          // title={item.name}
          style={styles.button}
          onPress={() => selectAccount(item)}
        >
            <Text style={{color: item === selectedAccount ? '#cffff6' : 'white' }}>{item.name}</Text>
        </TouchableOpacity>
        </View>
      ))}

      {  accounts?.length === 0 ?
      <TouchableOpacity  style={styles.button} onPress={createAccount} >
          <Text style={{color: 'white'}}>Create Account</Text>
      </TouchableOpacity>
      : <></>
      }
    </Section>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
    padding: 4
  },
  button: {
    backgroundColor: '#17002b',
    padding: 10,
    borderRadius: 15,
  },
})