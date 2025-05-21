import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import BackBtnCus from "../../components/BackBtnCus";
import OTPInput from "../../components/OTPInput";

const RESEND_TIME = 30; // seconds
const CORRECT_CODE = "25017"; // replace this with your logic/backend

const VerifyCode = () => {
  const [enteredCode, setEnteredCode] = useState("");
  const [error, setError] = useState(false);
  const [timer, setTimer] = useState(RESEND_TIME);

  // Countdown timer
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleCodeFilled = (code) => {
    setEnteredCode(code);
    if (code === CORRECT_CODE) {
      setError(false);
      Alert.alert("Success", "Code verified!");
      // Navigate or continue...
    } else {
      setError(true);
    }
  };

  const handleResend = () => {
    if (timer === 0) {
      setError(false);
      setEnteredCode("");
      setTimer(RESEND_TIME);
      // TODO: Trigger backend to resend the OTP here
      Alert.alert("Code resent", "A new code has been sent to your phone.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%" }}>
        <BackBtnCus />
        <Text style={[styles.title, { marginTop: 15 }]}>Enter Code</Text>
      </View>

      <Text style={styles.subTitle}>
        We’ve sent an SMS with an activation code to your phone +94 76 123 4567
      </Text>

      <View style={{ marginTop: 25 }}>
        <OTPInput onCodeFilled={handleCodeFilled} hasError={error} />
        {error && (
          <Text style={styles.errorText}>Wrong code, please try again</Text>
        )}
      </View>

      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
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
    </SafeAreaView>
  );
};

export default VerifyCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "14%",
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
    marginVertical: "10%",
    fontSize: 14,
    textAlign: "center",
  },

  resendText: {
    fontFamily: "Roboto",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
  },
});
