import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './App/LoginScreen/loginScreens';

const {Navigator, Screen} = createNativeStackNavigator();

const AppNavigator =() => (
    <NavigationContainer>
        <Navigator initialRouteName ="Login" >
            <Screen name ="Login" component={LoginScreen}>

            </Screen>
        </Navigator>
    </NavigationContainer>

);

export default AppNavigator;


