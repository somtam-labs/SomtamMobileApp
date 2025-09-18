import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from '../../pages/onboarding';
import Signup from '../../pages/onboarding/Signup';

const Stack = createNativeStackNavigator();

let arrowColor = "#19619C";


const options = {
  headerShown: false,
  gestureEnabled: false,
  
};

const customOptions = { gestureEnabled: true };
const moreCustomOptions ={ }

const StartScreens = () => (
  <Stack.Navigator initialRouteName="Onboarding" screenOptions={options}>
    <Stack.Screen name="Onboarding" component={Onboarding}  />
    <Stack.Screen name="Signup" component={Signup} />

  </Stack.Navigator>
  
);

export default StartScreens;
