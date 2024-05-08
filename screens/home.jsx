import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  useColorScheme,
} from 'react-native';
import {Outlet, Link} from 'react-router-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider_card from '../components/Slider_card';
import {useMyContext} from '../App';

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {count, incrementCount} = useMyContext();
  console.log('count', count);

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.TopBox}>
          <View style={styles.TextBox}>
            {/* <Text
              style={[
                styles.Text_css,
                isDarkMode ? styles.whiteText : styles.darkText,
              ]}>
              {count || 'Name of song'}
            </Text> */}
            <Text style={styles.Text_css}>JK Payroll</Text>
          </View>
          <View style={styles.iconContainer}>
            <Link to="/profile">
              <View style={styles.iconView}>
                <Ionicons name="people" size={20} color="#ffda85" />
                <Text style={styles.iconText}>People</Text>
              </View>
            </Link>

            <Link to="/profile">
              <View style={styles.iconView}>
                <MaterialCommunityIcons
                  name="face-man"
                  size={20}
                  color="#ffda85"
                />
                <Text style={styles.iconText}>Profile</Text>
              </View>
            </Link>
            {/* <AntDesign name="bars" size={30} color="#ffda85" /> */}
          </View>
        </View>
        <View style={styles.container}>
          <View>
            <Slider_card />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    width: 78,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconText: {
    fontSize: 10,
    color: '#ffda85',
  },
  TextBox: {},
  TopBox: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 10,
    alignItems: 'flex-end',
    justifyContent: 'space-between',

    backgroundColor: '#292929',
    flexDirection: 'row',
  },

  Text_css: {
    fontSize: 14,
    color: '#ffda85',
    marginHorizontal: 'auto',
    fontStyle: 'normal',
    borderRadius: 10,
    justifyContent: 'flex-start',
    padding: 5,
    backgroundColor: '#525252',
    fontWeight: 'bold',
  },

  whiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#000000',
  },
});

export default Home;
