import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const initialCartItems = [
  {
    id: "1",
    title: "Leather Handbag",
    subtitle: "Classic Elegance",
    price: 5990,
    quantity: 1,
    image: require("../assets/handbag.png"),
  },
  {
    id: "2",
    title: "Women Printed Kurta",
    subtitle: "Casual Wear",
    price: 2300,
    quantity: 1,
    image: require("../assets/kurta.png"),
  },
  {
    id: "3",
    title: "Ladies Watch",
    subtitle: "Quartz Dailywear",
    price: 1700,
    quantity: 1,
    image: require("../assets/watch.jpg"),
  },
];

const Cart = () => {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>My Cart</Text>

      {cartItems.map((item) => (
        <View key={item.id} style={innerStyles.card}>
          <Image source={item.image} style={innerStyles.image} />

          <View style={innerStyles.details}>
            <Text style={innerStyles.title}>{item.title}</Text>
            <Text style={innerStyles.subtitle}>{item.subtitle}</Text>
            <Text style={innerStyles.price}>LKR {item.price.toFixed(2)}</Text>
          </View>

          <View style={innerStyles.quantityContainer}>
            <TouchableOpacity
              onPress={() => updateQuantity(item.id, -1)}
              style={innerStyles.qtyButton}
            >
              <Text style={innerStyles.qtyText}>-</Text>
            </TouchableOpacity>

            <Text style={innerStyles.qtyCount}>{item.quantity}</Text>

            <TouchableOpacity
              onPress={() => updateQuantity(item.id, 1)}
              style={innerStyles.qtyButton}
            >
              <Text style={innerStyles.qtyText}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => deleteItem(item.id)}
            style={innerStyles.deleteBtn}
          >
            <Ionicons name="trash" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      ))}

      <View style={innerStyles.footer}>
        <Text style={innerStyles.totalLabel}>
          Total ({cartItems.length} item{cartItems.length !== 1 ? "s" : ""}) :
        </Text>
        <Text style={innerStyles.totalValue}>LKR {totalAmount.toFixed(2)}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    flexGrow: 1,
  },

  header: {
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "600",
    alignSelf: "center",
    marginBottom: 30,
    color: "#4D3E3E",
  },
});

const innerStyles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    marginBottom: 16,
    position: "relative",
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 8,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 12,
    color: "#777",
  },
  price: {
    marginTop: 4,
    fontSize: 14,
    color: "#000",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEE",
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  qtyButton: {
    paddingHorizontal: 6,
  },
  qtyText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  qtyCount: {
    marginHorizontal: 6,
    fontSize: 14,
    fontWeight: "500",
  },
  deleteBtn: {
    position: "absolute",
    right: -10,
    top: "30%",
    backgroundColor: "#E74C3C",
    borderRadius: 16,
    padding: 8,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  totalValue: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
});

export default Cart;
