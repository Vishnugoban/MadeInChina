import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons, MaterialIcons, Entypo, Octicons } from "@expo/vector-icons";

const Account = () => {
  const [profileImage, setProfileImage] = useState(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Permission to access gallery is required!"
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.cancelled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>My Account</Text>

      <View style={styles.profileSection}>
        <View>
          <Image
            source={{
              uri:
                profileImage ||
                "https://www.w3schools.com/howto/img_avatar.png",
            }}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editIcon} onPress={pickImage}>
            <MaterialIcons name="edit" size={18} color="#F85605" />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>Zara Zynna</Text>
        <Text style={styles.email}>zarazynna@gmail.com</Text>
      </View>

      <View style={styles.card}>
        <Option
          icon={<Octicons name="person" size={20} color="#F85605" />}
          label="Personal Details"
        />
        <Option
          icon={<MaterialIcons name="apartment" size={20} color="#418DD9" />}
          label="Shipping Details"
        />
        <Option
          icon={<MaterialIcons name="history" size={20} color="#5C5C5C" />}
          label="Order History"
        />
      </View>

      <View style={styles.card}>
        <Option
          icon={<Entypo name="log-out" size={20} color="#E57373" />}
          label="Logout"
        />
      </View>
    </ScrollView>
  );
};

const Option = ({ icon, label }) => (
  <TouchableOpacity style={styles.optionRow}>
    <View style={styles.iconWrapper}>{icon}</View>
    <Text style={styles.optionLabel}>{label}</Text>
    <Ionicons name="chevron-forward" size={18} color="#939393" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    justifyContent:"center",
    flexGrow: 1,
  },

  header: {
    fontFamily:"Roboto",
    fontSize: 24,
    fontWeight: "600",
    alignSelf: "center",
    marginBottom: 30,
    color: "#4D3E3E",
  },

  profileSection: {
    alignItems: "center",
    marginBottom: 30,
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
    backgroundColor: "#FEEEE6",
    padding: 6,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#fff",
  },

  name: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
    color: "#161616",
  },

  email: {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 14,
    color: "#161616",
  },

  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    paddingVertical: 5,
    marginBottom: 20,
  },

  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },

  iconWrapper: {
    width: 30,
  },

  optionLabel: {
    flex: 1,
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 16,
    marginLeft: 10,
    color: "#161616",
  },
});

export default Account;
