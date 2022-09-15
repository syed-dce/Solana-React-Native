import {LAMPORTS_PER_SOL} from '@solana/web3.js';
import React, {useEffect, useState} from 'react';
import {Button, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {AccountSelect, Balance, NetworkSelect, Section} from '../components';
import {useAccounts, useConnections} from '../providers';

export const MyAccount = () => {
  const {selectedAccount} = useAccounts();
  const {connection, selectedNetwork} = useConnections();

  const [balance, setBalance] = useState<any>();

  const getBalance = () => {
    if (!connection || !selectedAccount) return;
    console.log(`Get balance for ${selectedAccount.publicKey.toBase58()}`);
    setBalance(null);
    connection
      .getBalance(selectedAccount.publicKey)
      .then(res => setBalance(String(res / LAMPORTS_PER_SOL)))
      .catch(err => console.log(err));
  };

  const getAirdrop = () => {

    if (!connection || !selectedAccount) return;
    connection
      .requestAirdrop(selectedAccount.publicKey, 2 * LAMPORTS_PER_SOL)
      .then(res => {
        console.log('res', res);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if (balance || !connection) return;
    getBalance();
  }, [balance, getBalance, connection]);

  return (
    <View>
      <NetworkSelect />
      <AccountSelect />
      {selectedAccount ? (
        <View>
          <Section title="Balance">
            {balance ? (
              <Balance balance={balance} symbol="SOL" decimals={10} />
            ) : (
              <Text>Fetching balance.</Text>
            )}
          </Section>
          <Section title="">

          <View   style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={getBalance}
              >
                  <Text style={{color: 'white' }}>Refresh Balance</Text>
            </TouchableOpacity>
            </View>

            { selectedNetwork?.endpoint === 'mainnet-beta' ? <></> :
            <View   style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={getAirdrop}
              >
                  <Text style={{color: 'white' }}>Airdrop</Text>
            </TouchableOpacity>
            </View>
            }

            {/* <Button title="Refresh Balance" onPress={getBalance} /> */}
            {/* <Button
              disabled={selectedNetwork?.endpoint === 'mainnet-beta'}
              title="Airdrop"
              onPress={getAirdrop}
            /> */}
          </Section>
        </View>
      ) : (
        <Section title="Select or Create Account" />
      )}
    </View>
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