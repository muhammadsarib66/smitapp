 import React from "react";
 import Login from "./src/Login";
 import SignUp from "./src/SignUp";
 import Home from "./src/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
     <Stack.Screen name="Home" component={Home}  options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={Login}  options={{headerShown: false}}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} /> 
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
 