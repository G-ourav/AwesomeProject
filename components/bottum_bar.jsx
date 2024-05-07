import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Outlet, Link} from 'react-router-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// format-list-checks

import React from 'react';

const Bottum_bar = () => {
  return (
    <ScrollView>
      <View style={Styles.container}>
        <Link to="/">
          <View style={Styles.iconView}>
            <Entypo name="home" size={30} color="#ffda85" />
            <Text style={Styles.iconText}>Home</Text>
          </View>
        </Link>
        <Link to="/chat">
          <View style={Styles.iconView}>
            <Entypo name="chat" size={30} color="#ffda85" />
            <Text style={Styles.iconText}>Chat</Text>
          </View>
        </Link>
        <Link to="/profile">
          <View style={Styles.iconView}>
            <MaterialCommunityIcons name="face-man" size={30} color="#ffda85" />
            <Text style={Styles.iconText}>Profile</Text>
          </View>
        </Link>
        <Link to="/leave_attendance">
          <View style={Styles.iconView}>
            <MaterialCommunityIcons
              name="format-list-checks"
              size={30}
              color="#ffda85"
            />
            <Text style={Styles.iconText}>Attendance</Text>
          </View>
        </Link>
      </View>
    </ScrollView>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#292929',
  },
  iconView: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 100,
  },
  iconText: {
    color: '#ffda85',
  },
});

export default Bottum_bar;
