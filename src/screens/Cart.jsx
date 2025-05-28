import React, { useState } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

import { SwipeListView } from "react-native-swipe-list-view";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import BtnCus from "../components/BtnCus";

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
    quantity: 2,
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

  const renderItem = (data) => (
    <View style={styles.card}>
      <Image source={data.item.image} style={styles.image} />

      <View style={styles.details}>
        <Text style={styles.title}>{data.item.title}</Text>
        <Text style={styles.subtitle}>{data.item.subtitle}</Text>
        <Text style={styles.price}>LKR {data.item.price.toFixed(2)}</Text>
      </View>

      <View style={styles.quantityContainer}>
        <TouchableOpacity
          onPress={() => updateQuantity(data.item.id, -1)}
          style={styles.qtyButton}
        >
          <Text style={styles.qtyText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.qtyCount}>{data.item.quantity}</Text>

        <TouchableOpacity
          onPress={() => updateQuantity(data.item.id, 1)}
          style={styles.qtyButton}
        >
          <Text style={styles.qtyText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderHiddenItem = (data) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={styles.deleteBtn}
        onPress={() => deleteItem(data.item.id)}
      >
        <Ionicons name="trash" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>My Cart</Text>

      <View style={{ flex: 1 }}>
        <SwipeListView
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-75}
          disableRightSwipe
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
        />
      </View>

      {/* Fixed Footer */}
      <View style={styles.fixedFooter}>
        <View style={styles.footerRow}>
          <Text style={styles.totalLabel}>
            Total ({cartItems.length} item{cartItems.length !== 1 ? "s" : ""}) :
          </Text>
          <Text style={styles.totalValue}>LKR {totalAmount.toFixed(2)}</Text>
        </View>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  header: {
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "600",
    alignSelf: "center",
    marginBottom: 30,
    color: "#4D3E3E",
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#F9F9F9",
    borderRadius: 13,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 16,
  },

  image: {
    width: 65,
    height: 65,
    borderRadius: 5,
    marginRight: 10,
  },

  details: {
    flex: 1,
  },

  title: {
    fontFamily: "Roboto",
    fontWeight: "600",
    fontSize: 15,
    color: "#161616",
  },

  subtitle: {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 12,
    color: "#161616",
  },

  price: {
    marginTop: 4,
    fontFamily: "Roboto",
    fontWeight: "600",
    fontSize: 15,
    color: "#161616",
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEE",
    borderRadius: 30,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  qtyButton: {
    paddingHorizontal: 6,
    backgroundColor: "#EEE",
  },

  qtyText: {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 20,
    color: "#161616",
  },

  qtyCount: {
    marginHorizontal: 6,
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 14,
    color: "#161616",
  },

  deleteBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#161616",
    width: 75,
    height: "100%",
    borderRadius: 15,
  },

  rowBack: {
    alignItems: "center",
    backgroundColor: "#FFF",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 16,
    borderRadius: 12,
  },

  fixedFooter: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "#fff",
    paddingTop: 10,
  },

  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  totalLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#161616",
  },

  totalValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#161616",
  },
});

export default Cart;
