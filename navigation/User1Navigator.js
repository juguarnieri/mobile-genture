import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import User1 from "../screens/User1";
import User2 from "../screens/User2";

const Stack = createNativeStackNavigator();

export default function User1Navigator() {
    return (
        <Stack.Navigator initialRouteName="User1" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="User1" component={User1} />
            <Stack.Screen name="User2" component={User2} />
        </Stack.Navigator>
    );
}