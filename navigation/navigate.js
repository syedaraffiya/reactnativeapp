
 import * as React from 'react';

 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Login from './screens/login';
 import SignUp from './screens/signup';
import Data from './screens/data';

 

 const Stack = createNativeStackNavigator();

 function NavigateApp() {
   return (
     <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen   options={{ headerShown: false }} name="signup" component={SignUp} />
         <Stack.Screen name="login" component={Login} />
         <Stack.Screen name="news App" component={Data} />
       </Stack.Navigator>
      
     </NavigationContainer>
   );
 }

 export default NavigateApp;