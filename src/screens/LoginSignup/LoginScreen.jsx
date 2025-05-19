import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate("CreateAccount")}>Next</Button>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
