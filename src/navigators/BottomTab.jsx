import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BlurView} from '@react-native-community/blur';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/Theme';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import Wishlist from '../screens/Wishlist';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      // initialRouteName="HomeScreen"
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        // tabBarStyle: styles.tabBarStyle,
        tabBarStyle: {
          //   display: route.name === 'CartScreen' ? 'none' : 'flex',
          height: 60,
          position: 'absolute',
          backgroundColor: COLORS.primaryLight,
          borderTopWidth: 0,
          elevation: 0,
          borderTopColor: 'transparent',
        },
      })}
      // screenOptions={{
      //   tabBarHideOnKeyboard: true,
      //   headerShown: false,
      //   tabBarShowLabel: false,
      //   tabBarStyle: styles.tabBarStyle,
      //   //
      //   tabBarLabelStyle: styles.tabBarLabelStyle,
      //   tabBarActiveTintColor: COLORS.secondaryDark,
      //   tabBarInactiveTintColor: COLORS.placeholder,
      //   tabBarBackground: () => (
      //     <BlurView
      //       overlayColor=""
      //       blurAmount={1}
      //       style={styles.BlurViewStyles}
      //     />
      //   ),
      // }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="home"
              size={FONTSIZE.size_28}
              color={focused ? COLORS.orange : COLORS.greyDark}
            />
          ),
          // unmountOnBlur: true,
          // lazy: false,
        }}></Tab.Screen>
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="search1"
              size={FONTSIZE.size_28}
              color={focused ? COLORS.orange : COLORS.greyDark}
            />
          ),
          unmountOnBlur: true,
          lazy: false,
        }}></Tab.Screen>
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="bookmark-outline"
              size={FONTSIZE.size_28}
              color={focused ? COLORS.orange : COLORS.greyDark}
            />
          ),
          unmountOnBlur: true,
          lazy: false,
        }}></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="user"
              size={FONTSIZE.size_28}
              color={focused ? COLORS.orange : COLORS.greyDark}
            />
          ),
          unmountOnBlur: true,
          lazy: false,
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  // tabBarLabelStyle: {
  //   fontFamily: FONTFAMILY.poppins_medium,
  //   fontSize: FONTSIZE.size_12,
  //   marginBottom: SPACING.space_8,
  // },
  tabBarStyle: {
    height: 60,
    position: 'absolute',
    backgroundColor: COLORS.primaryLight,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default BottomTab;
