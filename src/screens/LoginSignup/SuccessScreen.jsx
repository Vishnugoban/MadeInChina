import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";

import SvgImage from "../../assets/ok_image.svg";
import BtnCus from "../../components/BtnCus";

const SuccessScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { title, text, buttonText, onPressType } = route.params;

  const handlePress = () => {
    if (onPressType === "navigateToLogin") {
      navigation.navigate("Login");
    } else if (onPressType === "goBack") {
      navigation.goBack();
    } else {
      // fallback if no type matches
      navigation.navigate("Home");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.slide}>
        <SvgImage width={300} height={300} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>

      <View style={{ width: "100%", marginTop: 50 }}>
        <BtnCus onPress={handlePress} text={buttonText} google={false} />
      </View>
    </SafeAreaView>
  );
};

export default SuccessScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },

  slide: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontFamily: "Roboto",
    fontSize: 24,
    color: "#000000",
    fontWeight: "700",
    textAlign: "center",
  },

  text: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "#000000",
    fontWeight: "400",
    textAlign: "center",
    marginTop: 20,
  },
});
