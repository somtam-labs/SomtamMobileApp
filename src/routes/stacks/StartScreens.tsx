import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from '../../pages/onboarding';


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

  </Stack.Navigator>
  
);

export default StartScreens;
