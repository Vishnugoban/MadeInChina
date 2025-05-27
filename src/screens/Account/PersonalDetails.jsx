import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import BackBtnCus from "../../components/BackBtnCus";
import TextBoxCus from "../../components/TextBoxCus";
import BtnCus from "../../components/BtnCus";

const PersonalDetails = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%" }}>
        <BackBtnCus />
        <Text style={[styles.title, { marginTop: 15 }]}>Reset Password</Text>
      </View>
      <Text style={styles.subTitle}>
        Enter your new password to complete the reset process
      </Text>

      <View style={{ width: "100%" }}>
        <TextBoxCus
          label="New Password"
          placeholder="must be 8 characters"
          secureTextEntry={true}
        />
        <TextBoxCus
          label="Confirm New Password"
          placeholder="repeat password"
          secureTextEntry={true}
        />
      </View>

      {/* Spacer */}
      <View style={{ flex: 1 }} />

      <View style={{ width: "100%" }}>
        <BtnCus
          onPress={() =>
            navigation.navigate("SuccessScreen", {
              title: "Password Changed",
              text: "Your password has been changed successfully",
              buttonText: "Back to Login",
              onPressType: "navigateToLogin",
            })
          }
          text="Reset Password"
          google={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default PersonalDetails;

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
    marginTop: 15,
  },
});
