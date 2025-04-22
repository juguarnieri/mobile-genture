import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Guarnieri from "../screens/AikaIanka";
import AikaIanka from "../screens/Guarnieri";

const Stack = createNativeStackNavigator();

export default function GuarnieriNavigator() {
    return (
        <Stack.Navigator initialRouteName="Guarnieri" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Guarnieri" component={AikaIanka} />
            <Stack.Screen name="AikaIanka" component={Guarnieri} />
        </Stack.Navigator>
    );
}