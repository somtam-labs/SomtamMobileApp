import * as React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';

import { initNavigator } from '../utils/NavigationService';
import { StartScreens } from './stacks';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

const RoutesStack = () => {
  let arrowColor = '#6652DE';
  let defaultTitleFont = 'OpenSans-SemiBold';

  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const [favourite, setFavourite] = React.useState(true);

  const toggleFavourite = () => {
    setFavourite(!favourite);
  };

  const renderScreens = () => {

    return <Stack.Screen name="StartScreens" component={StartScreens} />;
  };

  return (
    <NavigationContainer theme={DarkTheme} ref={nav => initNavigator(nav)}>
      <Stack.Navigator
        initialRouteName="StartScreens"
        screenOptions={{ headerShown: false }}>
        {renderScreens()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RoutesStack;
