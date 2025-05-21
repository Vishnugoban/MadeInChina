import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import BackBtnCus from "../../components/BackBtnCus";
import OTPInput from "../../components/OTPInput";
import BtnCus from "../../components/BtnCus";

const RESEND_TIME = 30;
const CORRECT_CODE = "25017";

const VerifyCode = () => {
  const [enteredCode, setEnteredCode] = useState("");
  const [error, setError] = useState(false);
  const [timer, setTimer] = useState(RESEND_TIME);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleCodeFilled = (code) => {
    setEnteredCode(code);
    // Only set error status here, no alerts
    setError(code !== CORRECT_CODE);
  };

  const handleResend = () => {
    if (timer === 0) {
      setError(false);
      setEnteredCode("");
      setTimer(RESEND_TIME);
      Alert.alert("Code resent", "A new code has been sent to your phone.");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={20}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={{ width: "100%" }}>
            <BackBtnCus />
            <Text style={[styles.title, { marginTop: 15 }]}>Enter Code</Text>
          </View>

          <Text style={styles.subTitle}>
            We’ve sent an SMS with an activation code to your phone +94 76 123
            4567
          </Text>

          <View style={{ marginTop: 25 }}>
            <OTPInput onCodeFilled={handleCodeFilled} hasError={error} />
            {error && (
              <Text style={styles.errorText}>Wrong code, please try again</Text>
            )}
          </View>

          <View style={styles.resendContainer}>
            {timer === 0 ? (
              <>
                <Text style={[styles.resendText, { color: "#999" }]}>
                  I didn’t receive a code{" "}
                </Text>
                <TouchableOpacity onPress={handleResend}>
                  <Text style={[styles.resendText, { color: "#000000" }]}>
                    Resend
                  </Text>
                </TouchableOpacity>
              </>
            ) : (
              <Text style={[styles.resendText, { color: "#999" }]}>
                Send code again 00:{timer < 10 ? `0${timer}` : timer}
              </Text>
            )}
          </View>

          <View style={{ flex: 1 }} />

          <View style={{ width: "100%", marginTop: 20 }}>
            <BtnCus
              onPress={() => {
                if (enteredCode.length !== 5) {
                  setError(true);
                  Alert.alert("Invalid", "Please enter the full 5-digit code.");
                } else if (enteredCode !== CORRECT_CODE) {
                  setError(true);
                  Alert.alert("Error", "Wrong code, please try again.");
                } else {
                  setError(false);
                  Alert.alert("Success", "Code verified!");
                  // Navigate or continue...
                }
              }}
              text="Verify"
              google={false}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default VerifyCode;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },

  flex: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    padding: "4%",
  },

  title: {
    fontFamily: "Roboto",
    fontSize: 28,
    color: "#000",
    fontWeight: "600",
    textAlign: "left",
  },
  subTitle: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#000",
    fontWeight: "400",
    lineHeight: 24,
    marginTop: 15,
  },
  errorText: {
    fontFamily: "Roboto",
    color: "#F54135",
    fontWeight: "400",
    marginVertical: 20,
    fontSize: 14,
    textAlign: "center",
  },
  resendText: {
    fontFamily: "Roboto",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
  },
  resendContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
