import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
import Homepage from './Screens/Homepage';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';

const Drawer = createDrawerNavigator();

const HomePageDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Homepage" component={Homepage} options={{ headerShown: false }} />
      <Drawer.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Drawer.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({})

export default HomePageDrawer;
