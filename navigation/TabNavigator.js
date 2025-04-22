import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import MarcelloNavigator from "./JuliaNavigator";
import GuarnieriNavigator from "./GuarnieriNavigator";
const Tab = createBottomTabNavigator();


export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Django"
      screenOptions={{
        headerShown: false, 
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderRadius: 50,
          height: 100,
          position: "absolute",
          margin: 15,
        },
        tabBarLabelStyle: {
          fontSize: 20,
        },
        tabBarIconStyle: {
          marginTop: 15,
          marginBottom: 5,
        },
        tabBarActiveTintColor: "#b25dc9",
        tabBarInactiveTintColor: "black",
      }}
    >

      <Tab.Screen
        name="Salsicha"
        component={MarcelloNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="rocket" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Pastor Alemão"
        component={GuarnieriNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="dice" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}