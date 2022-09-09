import React, {useRef, useEffect} from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import {Header} from './components';
import {AccountProvider, ConnectionProvider} from './providers';
import {Wallet} from './screens';
import Home from './screens/Home'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const App = () => {

    useEffect(() => {
  	  SplashScreen.hide();
    }, [])

    return (

      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false,
                                        tabBarStyle: { 
                                                        backgroundColor: '#17002b',
                                                        height: '8%',
                                                        margin: 10,
                                                        borderRadius: 15,
                                                        padding: 5
                                                      }
                                        }}
                    
        >
              <Tab.Screen name="Network" component={Home} />

        </Tab.Navigator>
      </NavigationContainer>

    )

}

export default App;






// export const App = () => {
//   const scrollViewRef = useRef<null | ScrollView>(null);
  
//   useEffect(() => {
//   	SplashScreen.hide();
//   }, [])

//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <Header />
//       <SafeAreaView>
//         <ScrollView
//           ref={ref => (scrollViewRef.current = ref)}
//           contentInsetAdjustmentBehavior="automatic">
//           <AccountProvider>
//             <ConnectionProvider>
//               <Wallet />
//             </ConnectionProvider>
//           </AccountProvider>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// export default App;
