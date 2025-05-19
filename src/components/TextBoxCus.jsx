import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import Feather from "@expo/vector-icons/Feather";

const TextBoxCus = ({ ...props }) => {
  const [text, setText] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setText(value)}
          value={text}
          editable={props.editable}
          placeholder={props.placeholder}
          placeholderTextColor="#8E8E93"
          textContentType={props.textContentType}
          secureTextEntry={props.secureTextEntry && !showPassword}
          autoCapitalize={props.autoCapitalize}
          autoFocus={props.autoFocus}
          onSubmitEditing={props.onSubmitEditing}
          keyboardType={props.keyboardType}
        />
        {props.secureTextEntry && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.iconContainer}
          >
            <Feather
              name={!showPassword ? "eye" : "eye-off"}
              size={20}
              color={"#000"}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TextBoxCus;

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },

  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#000",
    fontFamily: "Roboto",
    fontWeight: "600",
    textAlign: "left",
    marginTop: 15,
  },

  input: {
    height: 55,
    borderRadius: 10,
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    fontSize: 15,
    borderColor: "#000",
    borderWidth: 0.5,
  },

  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
  },

  iconContainer: {
    position: "absolute",
    right: "3%",
  },
});
