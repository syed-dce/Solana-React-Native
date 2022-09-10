import React, {useRef, useEffect} from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import {Header} from './components';
import {AccountProvider, ConnectionProvider} from './providers';
import {Wallet} from './screens';
import Home from './screens/Home'

import { NavigationContainer , DefaultTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const App = () => {

    useEffect(() => {
  	  SplashScreen.hide();
    }, [])

    return (

      <AccountProvider>
          <ConnectionProvider>
              <NavigationContainer  >
              <Tab.Navigator screenOptions={{ headerShown: false,
                                        tabBarStyle: { 
                                                        backgroundColor: '#17002b',
                                                        height: '8%',
                                                        margin: 8,
                                                        borderRadius: 15,
                                                        padding: 5
                                                      }
                                        }}
                    
              >
                  <Tab.Screen name="Network" component={Home} />

              </Tab.Navigator>
              </NavigationContainer>
            </ConnectionProvider>
      </AccountProvider>

    )

}

export default App;



