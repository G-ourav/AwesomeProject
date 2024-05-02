import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  useColorScheme,
} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.View2}>
          <View>
            <Text
              style={[
                styles.Text_css,
                isDarkMode ? styles.whiteText : styles.darkText,
              ]}>
              name of song
            </Text>
          </View>
          <View style={styles.View1}></View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 23,
    paddingHorizontal: 5,
    paddingVertical: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  View1: {
    width: 100,
    height: 100,
  },
  View2: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Text_css: {
    fontSize: 23,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  Box: {
    width: 20,
    height: 20,
  },
  whiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#000000',
  },
});
export default App;
