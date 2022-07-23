import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RepositoryList from "./RepositoryList";
import Login from "./Login";

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

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
    },
  });
  