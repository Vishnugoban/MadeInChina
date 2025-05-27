import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import BackBtnCus from "../../components/BackBtnCus";
import TextBoxCus from "../../components/TextBoxCus";
import BtnCus from "../../components/BtnCus";
import { MaterialIcons } from "@expo/vector-icons";

const PersonalDetails = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%" }}>
        <BackBtnCus />
        <Text style={[styles.title, { marginTop: 15 }]}>Personal Details</Text>
      </View>

      <View style={styles.profileSection}>
        <View>
          <Image
            source={{
              uri: "https://www.w3schools.com/howto/img_avatar.png",
            }}
            style={styles.profileImage}
          />
          <View style={styles.editIcon}>
            <MaterialIcons name="edit" size={18} color="#fff" />
          </View>
        </View>
      </View>

      {/* Input Fields */}
      <View style={{ width: "100%" }}>
        <TextBoxCus label="Name" placeholder="Zara Zynna" />
        <TextBoxCus label="Email" placeholder="zara@gmail.com" />
        <TextBoxCus label="Phone Number" placeholder="+94 76 123 4567" />
        <TextBoxCus
          label="Password"
          placeholder="********"
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={() => navigation.navigate("ChangePassword")}>
          <Text style={styles.changePwdText}>Change password?</Text>
        </TouchableOpacity>
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
          text="Save Changes"
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

  changePwdText: {
    fontFamily: "Roboto",
    fontSize: 12,
    color: "#F54135",
    fontWeight: "500",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textAlign: "right",
    marginTop: 10,
  },

  profileSection: {
    alignItems: "center",
    marginVertical: 10,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  editIcon: {
    position: "absolute",
    bottom: 0,
    right: -5,
    backgroundColor: "#4392F9",
    padding: 6,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#fff",
  },
});
