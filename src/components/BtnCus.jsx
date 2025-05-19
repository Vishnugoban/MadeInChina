import { TouchableOpacity, StyleSheet, Text } from "react-native";

import GoogleIcon from "../assets/Google_Icon.svg";

const BtnCus = ({ onPress, text, google }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonCont,
        google && {
          backgroundColor: "#fff",
          flexDirection: "row",
          gap: 10,
          borderWidth: 0.5,
          borderColor: "#000",
        },
      ]}
    >
      {google ? (
        <>
          <GoogleIcon width={24} height={24} />
          <Text style={styles.text}>{text}</Text>
        </>
      ) : (
        <Text style={[styles.text && { color: "#F9F9F9" }]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default BtnCus;

const styles = StyleSheet.create({
  buttonCont: {
    width: "100%",
    height: 54,
    borderRadius: 12,
    backgroundColor: "#1D1D1D",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
});
