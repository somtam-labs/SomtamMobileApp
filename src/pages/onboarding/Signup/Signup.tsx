import React, { useState } from 'react';
import {
  Text,
  View,
  Keyboard,
  GestureResponderEvent,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  StatusBar,
  Image,
} from 'react-native';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import TextInput from '../../../components/TextInput';
import styles from './Signup.css';
import { authActions } from '../../../redux/reducers/auth';
import AntDesign from 'react-native-vector-icons/AntDesign'
import axios, { AxiosError } from 'axios';

const Pencil = require('../../../assets/img/icon/pencil.png');
const HideEye = require('../../../assets/img/icon/eye-icon.png');
const ShowEye = require('../../../assets/img/icon/ShowEye.png');
const landingBg = require('../../../assets/img/graphic/img-landing_bg2.png');
const IssueOpen = require('../../../assets/img/icon/issue-opened.png');
const GreenTick = require('../../../assets/img/icon/green-tick-circle.png');
//const BackIcon = require('../../../assets/img/icon/back-arrow.png');

const BackIcon = <AntDesign name="arrowleft" size={25} color="#6652DE" />;

const axiosConfig = {
  headers: {
    'Content-Type': "application/json",
    'Accept': "application/json",
  }
};

const Signup = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const [secure, setSecure] = useState(true);
  const [secureReconfirm, setSecureReconfirm] = useState(true);
  const [displayMatchPassword, setDisplayMatchPassword] = useState(false);
  const [displayRegexStatus, setDisplayRegexStatus] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const regexPassword = /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{4,}$/;

  const LinkPrivacyNoticeURL = () => {
    return (
      <Text
        style={{
          fontFamily: 'OpenSans-SemiBold',
          color: '#6652DE',
          textDecorationLine: 'underline',
          textDecorationStyle: 'solid',
          fontSize: 12,
        }}
        onPress={() => console.log('put privacy notice')}>
        Privacy Notice
      </Text>
    );
  };

  const LinkTermOfUse = () => {
    return (
      <Text
        style={{
          fontFamily: 'OpenSans-SemiBold',
          color: '#6652DE',
          textDecorationLine: 'underline',
          textDecorationStyle: 'solid',
          fontSize: 12,
        }}
        onPress={() => console.log('put Term of Use')}>
        Term of Use
      </Text>
    );
  };

  const CreatePasswordForm = {
    initialValue: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  };

  const handleContinueClick = async () => {

    //register to enable getToken() in data.ts for access token 
    
    try {
      console.log("REGISTER_USER_BACKEND_URL", process.env.REACT_APP_REGISTER_USER_BACKEND_URL)
      const url = process.env.REACT_APP_REGISTER_USER_BACKEND_URL || "";

      const response = await axios.post(url, {
        email: formik.values.email,
        password: formik.values.password
      }, axiosConfig);
      console.log(response.data);

      if (response.data.id === "email has been used") {
        console.error("email has been used");
        return
      }
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        console.error('signup backend error from axios: ', err.request._response);
        return;
      } else if (err instanceof Error) {
        console.error("signup backend error: ", err.message);
        return;
      };
      console.error(err);
    } finally {
      //temporary place dispatch and navigation to run appium test
      dispatch(authActions.SIGN_UP());
      navigation.navigate('SignupSuccess');
    }
  };

  const formik = useFormik({
        initialValues: CreatePasswordForm.initialValue,
        //validationSchema: CreatePasswordForm.validationSchema,
        //validate: CreatePasswordForm.validate,
        onSubmit: values => {
            console.log('Submitted:', values);
            handleContinueClick
        },
        validateOnChange: false,
        validateOnBlur: false,
  });
        
  const regexCheckPassword = regexPassword.test(currentPassword) ? (
    <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
      <Image
        style={{ justifyContent: 'center', alignSelf: 'center' }}
        source={GreenTick}></Image>
      <Text style={styles.passwordMatch}>Password Regex Pass</Text>
    </View>
  ) : (
    <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
      <Image
        style={{ justifyContent: 'center', alignSelf: 'center' }}
        source={IssueOpen}></Image>
      <Text style={styles.passwordNoMatch} accessibilityLabel='pwdRegexFailMsg'>Password Regex Fail</Text>
    </View>
  );

  const checkMatchPassword =
    formik.values.confirmPassword === formik.values.password ? (
      <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
        <Image
          style={{ justifyContent: 'center', alignSelf: 'center' }}
          source={GreenTick}></Image>
        <Text style={styles.passwordMatch}>Password match</Text>
      </View>
    ) : (
      <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
        <Image
          style={{ justifyContent: 'center', alignSelf: 'center' }}
          source={IssueOpen}></Image>
        <Text style={styles.passwordNoMatch} accessibilityLabel='pwdNotMatchMsg'>The password is not match</Text>
      </View>
    );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ImageBackground style={styles.bgContainer} source={landingBg}>
        <StatusBar backgroundColor="transparent" translucent={true}></StatusBar>
        <View style={{ margin: 5, marginTop: 50 }}>
          <Text>
            <TouchableOpacity onPress={() => navigation.popToTop()}>
              {BackIcon}
            </TouchableOpacity>
          </Text>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={styles.bigwords} accessibilityLabel="signupHeader">Create An Account</Text>
          <Text style={styles.leftBoldText}>Email</Text>
          <View style={{ marginTop: 10 }}></View>
          <TextInput
            accessibilityLabel="emailTextInput"
            placeholder="Enter your email"
            autoCapitalize="none"
            value={formik.values.email}
            onChangeText={formik.handleChange('email')}
            onSubmitEditing={() => {
              console.log(formik.values.email);
              /* 
              CreatePasswordForm.refs.email.current?.focus();
              Keyboard.dismiss;
              */
            }}
            returnKeyType="next"
            returnKeyLabel="next"
            style={[styles.input]}
            image={Pencil}
          />
          <Text style={[styles.leftBoldText, { marginTop: 20 }]}>Password</Text>
          <View style={{ marginTop: 10 }}></View>
          <TextInput
            accessibilityLabel="passwordTextInput"
            placeholder="Create your password"
            secureTextEntry={secure}
            autoCapitalize="none"
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
            onChange={({ nativeEvent: { eventCount, target, text } }:any) => {
              setCurrentPassword(text);
            }}
            onSubmitEditing={() => {
              console.log("submit password: ", formik.values.password);
              setCurrentPassword(formik.values.password.toString());
              /* 
              CreatePasswordForm.refs.password.current?.focus();
              Keyboard.dismiss;
              */
            }}
            returnKeyType="done"
            returnKeyLabel="done"
            style={[styles.input]}
            image={secure ? HideEye : ShowEye}
            setSecureState={setSecure}
            secureState={secure}
            onFocus={() => {
              setDisplayRegexStatus(true);
            }}
            onBlur={() => {
              setDisplayRegexStatus(false);
            }}
          />
          {displayRegexStatus && regexCheckPassword}
          <View style={{ marginTop: 10 }}></View>
          <TextInput
            accessibilityLabel="reenterPasswordTextInput"
            placeholder="Re-enter your password"
            secureTextEntry={secureReconfirm}
            autoCapitalize="none"
            value={formik.values.confirmPassword}
            onChangeText={formik.handleChange('confirmPassword')}
            onSubmitEditing={() => {
              console.log(formik.values.confirmPassword);
              /* 
              CreatePasswordForm.refs.password.current?.focus();
              Keyboard.dismiss;
              */
            }}
            returnKeyType="done"
            returnKeyLabel="done"
            style={[styles.input]}
            image={secureReconfirm ? HideEye : ShowEye}
            setSecureState={setSecureReconfirm}
            secureState={secureReconfirm}
            onFocus={() => {
              setDisplayMatchPassword(true);
            }}
            onBlur={() => {
              setDisplayMatchPassword(false);
            }}
          />
          {displayMatchPassword && checkMatchPassword}
        </View>
        <View style={{ flex: 0.2 }} />
        <Text style={[styles.words]}>
          Use at least 4 characters, 1 number 
        </Text>
        <Text style={styles.spacing}></Text>
        <Text style={[styles.words]}>
          By signing up, I agree to the {LinkTermOfUse()}. and consent to the
          processing of my personal and biometric data as stated in the{' '}
          {LinkPrivacyNoticeURL()}
        </Text>
        <TouchableOpacity 
            onPress={formik.handleSubmit as unknown as (event: GestureResponderEvent) => void}
            accessibilityLabel="submitTouchableOpacitySubmit">
          <View style={[styles.buttonsContainer]}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                color: '#fff',
                fontFamily: 'OpenSans-SemiBold',
              }}>
              Submit
            </Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default Signup;
