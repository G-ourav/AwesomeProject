import {View, Text} from 'react-native';
import React from 'react';

const Log_in = ({isLogIn, setIsLogIn}) => {
  return (
    <View>
      <View
        onTouchStart={() => {
          setIsLogIn(!isLogIn);
        }}>
        <Text>sfsd</Text>
      </View>
    </View>
  );
};

export default Log_in;
