import React, { useState } from 'react';
import { Text, Image } from 'react-native';
import { TextInput as RNTextInput, View, StyleSheet } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import styles from './TextInput.css';

export default function TextInput({ ...otherProps }) {
  const [isFocused, setIsFocused] = useState(false);
  const validationColor = '#C7C7C7';
  return (
    <View
      style={
        isFocused
          ? {
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 48,
              borderColor: '#6652DE',
              borderBottomWidth: StyleSheet.hairlineWidth,
              backgroundColor: 'transparent',
              marginHorizontal: 12,
            }
          : {
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 48,
              borderColor: '#000000',
              borderBottomWidth: StyleSheet.hairlineWidth,
              backgroundColor: 'transparent',
              marginHorizontal: 12,
            }
      }>
      <View style={{ padding: 8 }}></View>
      <View style={{ flex: 1 }}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor="rgba(34, 62, 75, 0.7)"
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          {...otherProps}
        />
      </View>
      {!!otherProps.error && (
        <Text style={styles.redwords}>{otherProps.error}</Text>
      )}
      <Pressable
        onPress={() => {
          if (otherProps.secureState === true) {
            otherProps.setSecureState(!otherProps.secureState);
          } else if (otherProps.secureState === false) {
            otherProps.setSecureState(!otherProps.secureState);
          }
        }}>
        <Image source={otherProps.image} style={{ marginRight: 10 }}></Image>
      </Pressable>
    </View>
  );
}
