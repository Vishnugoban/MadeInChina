import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

const CreateAccount = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.goBack()}>Back</Button>
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({});
