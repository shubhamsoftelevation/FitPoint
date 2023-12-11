/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import signupPage from '../screens/sign-up';
import Profile from '../screens/profile';
import {Image} from 'react-native';
import homePage from '../screens/home';
import loginPage from '../screens/login';
const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('../../assets/icons/homeFill.png')
                : require('../../assets/icons/home.png');
            } else if (route.name === 'Login') {
              iconName = focused
                ? require('../../assets/icons/plus.png')
                : require('../../assets/icons/plus.png');
            } else if (route.name === 'Profile') {
              iconName = focused
                ? require('../../assets/icons/invite.png')
                : require('../../assets/icons/invite_unfill.png');
            }

            // You can return any component that you like here!
            return <Image style={{height: 25, width: 25}} source={iconName} />;
          },
          tabBarShowLabel: false,
        })}>
        <Tab.Screen
          options={{
            headerShown: false,
            unmountOnBlur: true,
          }}
          name="Home"
          component={homePage}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            unmountOnBlur: true,
          }}
          name="Login"
          component={loginPage}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            unmountOnBlur: true,
          }}
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
