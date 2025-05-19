import { StyleSheet, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import TextBoxCus from "../../components/TextBoxCus";

import BtnCus from "../../components/BtnCus";
import BackBtnCus from "../../components/BackBtnCus";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%" }}>
        <BackBtnCus />
        <Text style={[styles.title, { marginTop: 15 }]}>Hi, Welcome! 👋</Text>
      </View>

      {/* Form Inputs */}
      <View style={{ width: "100%", marginTop: 20 }}>
        <TextBoxCus
          label="Email or phone number"
          placeholder="enter email or phone number"
        />
        <TextBoxCus
          label="Password"
          placeholder="must be 8 characters"
          secureTextEntry={true}
        />
      </View>

      {/* Spacer to push footer to bottom */}
      <View style={{ flex: 1 }} />

      {/* Footer Buttons */}
      <View style={{ width: "100%" }}>
        <BtnCus
          onPress={() => navigation.navigate("Login")}
          text="Login"
          google={false}
        />

        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>Or</Text>
          <View style={styles.separatorLine} />
        </View>

        <BtnCus
          onPress={() => navigation.navigate("Login")}
          google
          text="Sign up with Google"
        />

        <Text style={styles.subText}>
          Don&apos;t have an account?{" "}
          <Text
            style={[styles.subText, { color: "#F85605", fontWeight: "700" }]}
            onPress={() => navigation.navigate("CreateAccount")}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "15%",
  },

  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: "5%",
  },

  separatorLine: {
    flex: 1,
    height: 0.5,
    backgroundColor: "#D8DADC",
  },

  separatorText: {
    marginHorizontal: 15,
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 14,
    color: "#000",
  },

  subText: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 14,
    color: "#000",
    fontWeight: "400",
    fontFamily: "Roboto",
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
