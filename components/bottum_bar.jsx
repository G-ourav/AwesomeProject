import {View, Text} from 'react-native';
import {Outlet, Link} from 'react-router-native';

import React from 'react';

const Bottum_bar = () => {
  return (
    <View>
      <Link to="/">
        <Text>dfasd</Text>
      </Link>
      <Link to="/chat">
        <Text>dfasd</Text>
      </Link>
      <Link to="/profile">
        <Text>dfasd</Text>
      </Link>
      <Link to="/leave_attendance">
        <Text>dfasd</Text>
      </Link>
    </View>
  );
};

export default Bottum_bar;
