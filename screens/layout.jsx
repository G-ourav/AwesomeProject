import {View, Text} from 'react-native';
import {Outlet, Link} from 'react-router-native';
import React from 'react';
import Bottum_bar from '../components/bottum_bar';

const Layout = () => {
  return (
    <View>
      <Outlet />

      <Bottum_bar />
    </View>
  );
};

export default Layout;
