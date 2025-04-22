import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Julia from "../screens/Julia";
import BabiCristina from "../screens/BabiCristina";

const Stack = createNativeStackNavigator();

export default function JuliaNavigator() {
    return (
        <Stack.Navigator initialRouteName="Julia" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Julia" component={Julia} />
            <Stack.Screen name="BabiCristina" component={BabiCristina} />
        </Stack.Navigator>
    );
}