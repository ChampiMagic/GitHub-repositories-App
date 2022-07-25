import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RepositoryList from "./RepositoryList";
import Login from "./pages/Login";

const Stack = createNativeStackNavigator();

const Main = () => {
    return (
       
            <NavigationContainer>
                 <Stack.Navigator>
                     <Stack.Screen name="Home" component={RepositoryList} />
                     <Stack.Screen name="Login" component={Login} />
                 </Stack.Navigator>
            </NavigationContainer>
  
    )
}

export default Main;


  