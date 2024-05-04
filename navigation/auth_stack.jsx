import React from 'react';
import {NativeRouter, Routes, Route} from 'react-router-native';
import Log_in from '../screens/log_in';
import {View} from 'react-native';

const Auth_stack = ({isLogIn, setIsLogIn}) => {
  return (
    <NativeRouter>
      <View>
        <Routes>
          <Route
            exact
            path="/"
            element={<Log_in isLogIn={isLogIn} setIsLogIn={setIsLogIn} />}
          />
        </Routes>
      </View>
    </NativeRouter>
  );
};

export default Auth_stack;
