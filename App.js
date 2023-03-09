import React from "react";

//👇🏻 app screens
import Signup from "./src/components/Signup";
import Signin from "./src/components/Signin";
import Home from "./src/components/Home";
import Verification from "./src/components/Verification";

//👇🏻 React Navigation configurations
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Signin" component={Signin} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Verification" component={Verification}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}