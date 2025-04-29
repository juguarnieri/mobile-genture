import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function User1() {
        const navigation = useNavigation();
        
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("User2")}>
                <Text style={styles.text}>Homem</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgreen",
    },
    text: {
        fontSize: 36,
        color: "darkgreen",
    },
});