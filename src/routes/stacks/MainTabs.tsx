import * as React from 'react';
import { View, Image, Pressable, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import g from '../../assets/globalStyle';
import HomeIcon from '../../assets/img/svg/home';
import ActivityIcon from '../../assets/img/svg/activity';
import WalletIcon from '../../assets/img/svg/wallet';
import ProfileIcon from '../../assets/img/svg/profile';
import TradeIcon from '../../assets/img/svg/trade';
import CancelIcon from '../../assets/img/svg/cancel';
import { useDispatch, useSelector } from 'react-redux';
import Selectors from '../../redux/selectors';
import { authActions } from '@/src/redux/reducers/auth';
import Wallet from '../../pages/wallet';

const Tab = createBottomTabNavigator();

const options = {
  headerShown: false,
  gestureEnabled: false,
};

const MainTabs = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const placeholder = () => <View />;
  const current_uid = useSelector(Selectors.current_uid);

  const CustomTabButton = (props: any) => (
    <Pressable
      {...props}
      style={
        props.accessibilityState.selected
          ? [
              props.style,
              { borderTopColor: '#6652DE', borderTopWidth: 2, paddingTop: 0 },
            ]
          : props.style
      }
      accessibilityLabel={props.routeName}
    />
  );

  const RoundedButton = ({ children, onPress }: any) => (
    <Pressable
      accessibilityLabel='roundedButton'
      style={{ top: -20, justifyContent: 'center', alignItems: 'center' }}
      onPress={onPress}>
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 30,
          backgroundColor: '#6652DE',
        }}>
        {children}
      </View>
    </Pressable>
  );

  return (
    <View style={g.custom.flex1}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? (
                <HomeIcon fill="#6652DE" />
              ) : (
                <HomeIcon fill="#979797" />
              );
            } else if (route.name === 'Activity') {
              iconName = focused ? (
                <ActivityIcon fill="#6652DE" />
              ) : (
                <ActivityIcon fill="#979797" />
              );
            } else if (route.name === 'Wallet') {
              iconName = focused ? (
                <WalletIcon fill="#6652DE" />
              ) : (
                <WalletIcon fill="#979797" />
              );
            } else if (route.name === 'Account') {
              iconName = focused ? (
                <ProfileIcon fill="#6652DE" />
              ) : (
                <ProfileIcon fill="#979797" />
              );
            }
            //console.log(iconName)
            // You can return any component that you like here!
            return (
              <View style={{ alignItems: 'center' }}>
                {iconName}
                <Text
                  style={[
                    styles.labelText,
                    { color: focused ? '#6652DE' : '#979797' },
                  ]}>
                  {route.name}
                </Text>
              </View>
            );
          },
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#FFFFFF',
            height: 70,
            borderTopWidth: 0,
          },
          tabBarIconStyle: {
            marginTop: 10,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'OpenSans-SemiBold',
            marginBottom: 15,
          },
          tabBarShowLabel: false,
          tabBarButton: props => {
            return <CustomTabButton {...props} routeName={route.name} />;
          },
        })}
        initialRouteName="Wallet">
        <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={options}
          listeners={{
            tabPress: e => {
              if (current_uid) {
                console.log(current_uid)
              }
            },
          }}
        />
        
      </Tab.Navigator>
    </View>
  );
};

export default MainTabs;

const styles = StyleSheet.create({
  labelText: {
    fontSize: 12,
    fontFamily: 'OpenSans-SemiBold',
    marginBottom: 15,
  },
});
