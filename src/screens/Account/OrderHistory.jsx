import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import BackBtnCus from "../../components/BackBtnCus";
import TextBoxCus from "../../components/TextBoxCus";
import BtnCus from "../../components/BtnCus";

const OrderHistory = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%" }}>
        <BackBtnCus />
        <Text style={[styles.title, { marginTop: 15 }]}>Order History</Text>
      </View>

      {/* Input Fields */}
      <View style={{ width: "100%" }}>
        <TextBoxCus label="Street Address" placeholder="45/3 Galle Road" />
        <TextBoxCus
          label="Apartment / Suite / Unit (Optional)"
          placeholder="Apt 6B"
        />
        <TextBoxCus label="City / Town" placeholder="Colombo" />
        <TextBoxCus
          label="State / Province / Region"
          placeholder="Western Province"
        />
        <TextBoxCus label="Zip / Postal Code" placeholder="00300" />
      </View>

      {/* Spacer */}
      <View style={{ flex: 1 }} />

      <View style={{ width: "100%" }}>
        <BtnCus
          onPress={() =>
            navigation.navigate("HomeScreen", { screen: "Account" })
          }
          text="Save Changes"
          google={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default OrderHistory;

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
});
