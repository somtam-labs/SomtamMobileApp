import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import styles from './Onboarding.css';

const Onboarding = ({ navigation }: any) => {
  return (
    <ImageBackground 
        style={styles.bgContainer} 
        source={require('../../../src/assets/img/graphic/img-landing_bg.png')}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="dark-content"
      />
      <View accessibilityLabel="app-root" style={styles.containerLogoAndTitle}>
        <Text style={styles.startWord}>Somtam Payment App</Text>
        <Text style={styles.contentWord}>
          Pay and receive SomtamCoin with confidence
        </Text>
      </View>
      <Image
        source={require('../../assets/img/graphic/img-landing.png')}
        style={{
          height: 327,
          width: 295,
          marginVertical: 40,
          alignSelf: 'center',
        }}
      />
      <TouchableOpacity
        accessibilityLabel="signupBtn"
        onPress={() => navigation.navigate('Signup')}>
        <View style={[styles.buttonPrimary, { marginBottom: 8 }]}>
          <Text style={[styles.textCenter, styles.primaryText]}>
            Create An Account
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        accessibilityLabel="loginBtn"
        onPress={() => navigation.navigate('Login')}>
        <View style={[styles.buttonSecondary]}>
          <Text style={[styles.textCenter, styles.secondaryText]}>Log In</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

Onboarding.propTypes = {};

export default Onboarding;
