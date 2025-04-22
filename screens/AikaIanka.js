import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AikaIanka() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Guarnieri")}>
        <Image
          style={styles.image}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/7/76/Adult_male_German_shepherd_dog_standing_at_the_beach_%28retouched%29.jpg",
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
    backgroundColor: "#265be0",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
});