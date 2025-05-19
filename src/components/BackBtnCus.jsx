import { TouchableOpacity, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const BackBtnCus = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.backBtn}
    >
      <Ionicons name="chevron-back" size={24} color="#000" />
    </TouchableOpacity>
  );
};


export default BackBtnCus;

const styles = StyleSheet.create({
 backBtn: {
  width: 40,
  height: 40,
  borderRadius: 12,
  borderWidth: 1,
  borderColor: "#E4E4E4",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
},

});
