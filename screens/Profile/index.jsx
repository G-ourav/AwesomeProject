import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import BasicInfo from './basicInfo';

const Profile = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={Styles.titleofpage}>
          <Text style={Styles.text_}>Profile</Text>
        </View>
        <View style={Styles.container}>
          <BasicInfo />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
const Styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  text_: {
    flex: 1,
    fontSize: 20,
    color: '#ffda85',
  },
  titleofpage: {
    flex: 1,
    paddingTop: 12,
    alignItems: 'center',
  },
});
export default Profile;
