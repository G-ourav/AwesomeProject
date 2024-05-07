import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  ScrollView,
  Button,
  Linking,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {sign_in_user} from '../api/user_login';

const Log_in = ({isLogIn, setIsLogIn}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async () => {
    const userData = {
      email_address: email,
      user_pass: password,
    };
    console.log(email, password, userData);
    sign_in_user(userData)
      .then(data => {
        console.log(data);
        if (!data) {
          window.alert('Invalid Credentials');
          console.log('Invalid', data);
        } else {
          console.log(data);
          window.alert('Login Successful');
          setIsLogIn(true);
          console.log(data);
          // dispatch(setLogin(true));
          // dispatch(setUser_token(data.token));
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handlePressPrivacy = async e => {
    await Linking.openURL('https://www.jkinfosysglobal.com/privacy_policy');
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={Style.container}>
          <View style={Style.topTitle}>
            <Text style={Style.loginText}>{'Log In'}</Text>
          </View>

          <View style={Style.inputView}>
            <TextInput
              style={Style.inputText}
              placeholder="Email"
              placeholderTextColor="#003f5c"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={Style.inputView}>
            <TextInput
              style={Style.inputText}
              placeholder="Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={setPassword}
              value={password}
            />
          </View>

          {/* <View  onPress={handleSubmit}> */}

          <Button
            title="Log In"
            style={Style.loginBtn}
            onPress={handleSubmit}
          />
          {/* </View> */}
          <View>
            <Text style={Style.privacyText}>
              The site is protected by reCAPTCHA and the Google{' '}
            </Text>
            <Text style={Style.privacyText} onPress={handlePressPrivacy}>
              Privacy Policy
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 23,
    paddingHorizontal: 5,
    paddingVertical: 24,
    justifyContent: 'center',
    alignItems: 'center',
    // height: ,
    // backgroundColor: '#000000',
  },
  topTitle: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 20,
    alignItems: 'center',
    alignContent: 'center',
  },

  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    textDecorationColor: 'black',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  loginText: {
    // color: 'white',
    fontSize: 20,
  },
  privacyText: {
    color: 'white',
  },
});

export default Log_in;
