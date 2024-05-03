import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';

const Slider_card = () => {
  return (
    <ScrollView>
      <View style={Styles.CartContainer}>
        <View style={Styles.Cart}>
          <Image
            style={Styles.CartImage}
            source={{
              uri: 'https://images.unsplash.com/photo-1714030962958-0a0e06717ea5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            onError={error => console.error('Image load error:', error)}
          />
        </View>
        <View style={Styles.Cart}>
          <Image
            style={Styles.CartImage}
            source={{
              uri: 'https://images.unsplash.com/photo-1714030962958-0a0e06717ea5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            onError={error => console.error('Image load error:', error)}
          />
        </View>
        <View style={Styles.Cart}>
          <Image
            style={Styles.CartImage}
            source={{
              uri: 'https://images.unsplash.com/photo-1714030962958-0a0e06717ea5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            onError={error => console.error('Image load error:', error)}
          />
        </View>
        <View style={Styles.Cart}>
          <Image
            style={Styles.CartImage}
            source={{
              uri: 'https://images.unsplash.com/photo-1714030962958-0a0e06717ea5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            onError={error => console.error('Image load error:', error)}
          />
        </View>
      </View>
    </ScrollView>
  );
};
const Styles = StyleSheet.create({
  CartContainer: {
    // backgroundColor: 'red',
    height: '100',
    flex: 1,
    flexDirection: 'row',
    alignContent: 'flex-start',

    paddingVertical: 10,
  },
  Cart: {
    height: '100%',
    // backgroundColor: 'rgb(250, 100, 0)',
    // padding: 20,
    marginRight: 10,
  },

  CartImage: {
    width: 200, // Adjust width as needed
    height: 200, // Adjust height as needed
    borderRadius: 10,
    opacity: 0.7,
  },
});

export default Slider_card;
