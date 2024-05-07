import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import {Outlet, Link} from 'react-router-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = ({title, edit_url}) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.TopBox}>
        <View style={Styles.TextBox}>
          <Text style={Styles.Text_css}>{title}</Text>
        </View>
        <View>
          <Link to={edit_url}>
            <View style={Styles.iconView}>
              <AntDesign name="edit" size={30} color="#ffda85" />
              <Text style={Styles.iconText}>Edit</Text>
            </View>
          </Link>
        </View>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {},
  TextBox: {},
  TopBox: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'space-evenly',
    backgroundColor: '#525252',
    flexDirection: 'row',
  },

  Text_css: {
    fontSize: 23,
    color: '#ffda85',
    marginHorizontal: 'auto',
    fontStyle: 'normal',
    borderRadius: 10,
    justifyContent: 'flex-start',
    padding: 5,
    backgroundColor: '#525252',
    fontWeight: 'bold',
  },
  iconView: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
    // width: 100,
  },
  iconText: {
    color: '#ffda85',
  },
});

export default Header;
