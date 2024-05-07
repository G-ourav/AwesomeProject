import {View, Text, ScrollView, Dimensions, StyleSheet} from 'react-native';
import {Outlet, Link} from 'react-router-native';
import React from 'react';
import Bottum_bar from '../components/bottum_bar';

const Layout = () => {
  const screenHeight = Dimensions.get('window').height;
  return (
    <ScrollView>
      <View style={[Styles.container, {height: screenHeight * 0.98}]}>
        <Outlet />
        <View style={Styles.bottumBar}>
          <Bottum_bar />
        </View>
      </View>
    </ScrollView>
  );
};
const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
  },

  bottumBar: {
    position: 'absolute',
    zIndex: 1000,
    flexDirection: 'row',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Layout;
