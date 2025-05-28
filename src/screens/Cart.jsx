import React, { useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>My Cart</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    flexGrow: 1,
  },

  header: {
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "600",
    alignSelf: "center",
    marginBottom: 30,
    color: "#4D3E3E",
  },
});

export default Cart;
