import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Alex() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Julia")}>
        <Image
          style={styles.image}
          source={{
            uri: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/10/09/1395947931-salsicha.jpg",
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
    backgroundColor: "#e02686",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
});