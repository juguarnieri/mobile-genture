import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function User2() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("User1")}>
        <Image
          style={styles.image}
          source={{
            uri: "https://wallpapers.com/images/hd/best-profile-pictures-md8aefaolvkkrc1l.jpg",
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkgreen",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
});