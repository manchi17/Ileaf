import React from "react";
import { View, Text, StyleSheet, SafeAreaView,Button } from "react-native";

export default function Welcome({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          alignItems: "center",
          flex: 8.5,
          justifyContent: "center",
        }}
      >
        <Text style={styles.line2}>Welcome</Text>
        <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    justifyContent: "center",
    marginLeft: 15,
  },
  line1: { fontSize: 40, fontWeight: "bold" },
  line3: {
    textAlign: "center",
    color: "grey",
    fontWeight: "500",
    fontSize: 18,
  },
  line2: {
    fontSize: 23,
    fontWeight: "700",
  },
});