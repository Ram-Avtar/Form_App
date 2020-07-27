import React, { Component } from 'react';
import { Text,Platform, View, StyleSheet,Button } from 'react-native';
import Form from './FormComponent'
import { createStackNavigator } from 'react-navigation-stack';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';

const FormNavigator = createStackNavigator({
    From: { screen: Form }
  }, {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#0099ff"
      },
      headerTitleStyle: {
          color: "#fff"
      },
      headerTintColor: "#fff"
    })
  })
export const FormNavi = createAppContainer(FormNavigator);

class Main extends Component {


  render() {

    return (
        <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
            <FormNavi />
        </View>
    );
  }
}

export default Main;
