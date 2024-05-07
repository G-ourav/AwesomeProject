import {View, Text} from 'react-native';
import React from 'react';
import {NativeRouter, Routes, Route} from 'react-router-native';
import Leave_attendance from '../screens/leave_attendance';
import Chat from '../screens/chat';
import Profile from '../screens/Profile';
import Home from '../screens/home';
import Layout from '../screens/layout';

const App_stack = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/leave_attendance"
            element={<Leave_attendance />}
          />
          <Route exact path="/chat" element={<Chat />} />
          <Route exact path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </NativeRouter>
  );
};

export default App_stack;
