import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  useColorScheme,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
          <View onTouchStart={incrementCount}>
            <AntDesign name="bars" size={30} color="#ffda85" />
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
  IconBox: {
    // backgroundColor: 'red',
  },
  TextBox: {},
  TopBox: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'space-evenly',
    backgroundColor: '#292929',
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

  whiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#000000',
  },
});

export default Home;
