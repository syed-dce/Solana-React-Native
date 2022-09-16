import React, {useRef, useEffect} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import {Header} from './components';
import {AccountProvider, ConnectionProvider} from './providers';

import Home from './screens/Home';
import AddPost from './screens/AddPost';
import { NavigationContainer , DefaultTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();

export const App = () => {

    useEffect(() => {
  	  SplashScreen.hide();
    }, [])


    const MyTheme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: 'rgb(255, 45, 85)',
        primary: 'rgb(255, 45, 85)',
      },
    };

    return (

      <AccountProvider>
          <ConnectionProvider>
              <NavigationContainer >
              
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
                  <Tab.Screen name="Account" component={Home} options={{
                    tabBarIcon: ( ({focused}) => (
                      <Icon name="chain" size={25} color= {focused === true ? "#cffff6": "white"} />
                    ) )
                  }} />

                  <Tab.Screen name="Add Blog Post" component={AddPost} options={{
                    tabBarIcon: ( ({focused}) => (
                      <Icon name="edit" size={25} color= {focused === true ? "#cffff6": "white"} />
                    ) )
                  }} />

                  <Tab.Screen name="View blogs" component={Home} options={{
                    tabBarIcon: ( ({focused}) => (
                      <Icon name="align-left" size={25} color= {focused === true ? "#cffff6": "white"} />
                    ) )
                  }} />


              </Tab.Navigator>
              </NavigationContainer>
            </ConnectionProvider>
      </AccountProvider>

    )

}

export default App;



