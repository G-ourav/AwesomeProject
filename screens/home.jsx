import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  useColorScheme,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Slider_card from '../components/Slider_card';
const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.TopBox}>
          <View style={styles.TextBox}>
            <Text
              style={[
                styles.Text_css,
                isDarkMode ? styles.whiteText : styles.darkText,
              ]}>
              {'Name of song'}
            </Text>
          </View>
          <Entypo
            name="chevron-right"
            size={30}
            color={isDarkMode ? styles.whiteText : styles.darkText}
          />
        </View>
        <Slider_card />
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 23,
    paddingHorizontal: 5,
    paddingVertical: 24,
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
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'space-evenly',
    flexDirection: 'row',
  },

  Text_css: {
    fontSize: 23,
    marginHorizontal: 'auto',
    fontStyle: 'normal',
    borderRadius: 10,
    justifyContent: 'flex-start',
    padding: 5,
    backgroundColor: '#568f8f',
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
