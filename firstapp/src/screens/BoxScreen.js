import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState } from "react";

export default function BoxScreen() {
  const [colors, setColors] = useState([]);
  const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <View>
      <Button
        title="Kutu Ekle"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        data={colors}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        renderItem={({ item }) => {
          return <View style={[styles.box, { backgroundColor: item }]} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    height: 100,
    margin: 5,
  },
});
