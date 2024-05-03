import React from 'react';
import {NativeRouter, Route, Routes} from 'react-router-native';
import Log_in from '../screens/log_in';

const Auth_stack = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route exact path="/" component={<Log_in />} />
      </Routes>
    </NativeRouter>
  );
};

export default Auth_stack;
