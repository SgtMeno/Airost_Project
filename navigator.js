import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./LoginScreen/loginScreens";
import { Register } from "./RegisterScreen/register";
import { HomeScreen } from "./LoginScreen/Home/home.screen";


const Stack = createNativeStackNavigator();

const AppNav=()=>{
    return(
    <NavigationContainer>
        <Stack.Navigator initalRouteName="Map" component={HomeScreen}>
            <Stack.Screen name="Login" component ={LoginScreen}/>
            <Stack.Screen name="Register" component ={Register}/>
            <Stack.Screen name="Map" component ={HomeScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
    )


}

export default AppNav;

/*

function DetailsScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title='Go to Navigation'
          onPress={()=> navigation.navigate('Navigation')} />
      </View>
    );
  }
  
  function NavigationScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Navigation Screen</Text>
        <Button
          title='Go to Details'
          onPress={()=>navigation.navigate('Details')} />
      </View>
    );
  }
  */
 
 