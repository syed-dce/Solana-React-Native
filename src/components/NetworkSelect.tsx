import React from 'react';
import {Button, TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {useConnections} from '../providers';
import {Section} from './Section';

export const NetworkSelect = () => {
  const {
    networkError,
    networkVersion,
    networks,
    selectedNetwork,
    selectNetwork,
  } = useConnections();

  return (
    <>
      <Section
        description={`Version: ${
          networkVersion?.['solana-core'] || 'Connecting...'
        }`}
        title={`Selected Chain: ${selectedNetwork?.name}`}>
        {networks.map(item => (
          <View  key={item.id} style={styles.buttonContainer}>
              <TouchableOpacity
                // disabled={item === selectedNetwork}
                key={item.id}
                // title={item.name}
                style={styles.button}
                onPress={() => selectNetwork(item)}
              >
                  <Text style={{color: item === selectedNetwork ? '#cffff6' : 'white' }}>{item.name}</Text>
              </TouchableOpacity>
              <View style={{width: 10}}></View>
          </View>
        ))}
        {networkError ? (
          <Section title="Error">
            {JSON.stringify(networkError, null, 2)}
          </Section>
        ) : null}
      </Section>
    </>
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
