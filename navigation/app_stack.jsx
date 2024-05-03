import {View, Text} from 'react-native';
import React from 'react';
import {NativeRouter, Routes, Route} from 'react-router-native';
import Home from '../screens/home';

const App_stack = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route exact path="/" component={<Home />} />
      </Routes>
    </NativeRouter>
  );
};

export default App_stack;
