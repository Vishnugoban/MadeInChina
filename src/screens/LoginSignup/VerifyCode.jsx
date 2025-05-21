import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import BackBtnCus from "../../components/BackBtnCus";
import OTPInput from "../../components/OTPInput";

const VerifyCode = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%" }}>
        <BackBtnCus />
        <Text style={[styles.title, { marginTop: 15 }]}>Enter Code</Text>
      </View>
      <Text style={styles.subTitle}>
        We’ve sent an SMS with an activation code to your phone +94 76 123 4567
      </Text>
      <OTPInput onCodeFilled={(code) => console.log("Entered Code:", code)} />
    </SafeAreaView>
  );
};

export default VerifyCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "15%",
  },

  title: {
    fontFamily: "Roboto",
    fontSize: 28,
    color: "#000",
    fontWeight: "600",
    textAlign: "left",
    marginBottom: "3%",
  },

  subTitle: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#000",
    fontWeight: "400",
    lineHeight: 24,
  },
});
