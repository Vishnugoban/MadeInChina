import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

import BackBtnCus from "../../components/BackBtnCus";
import { SafeAreaView } from "react-native-safe-area-context";

const orders = [
  {
    id: 1,
    image: require("../../assets/handbag.png"),
    title: "Leather Handbag",
    price: "LKR 990.00",
    status: "Awaiting Delivery",
    statusColor: "#FFEFE9",
    statusTextColor: "#FF6B00",
    total: "990.00",
    deliveryDate: "3rd May 2025",
  },
  {
    id: 2,
    image: require("../../assets/kurta.png"),
    title: "Women Printed Kurta",
    price: "LKR 2300.00",
    status: "Completed",
    statusColor: "#E6F6EC",
    statusTextColor: "#2ECC71",
    total: "2300.00",
    deliveryDate: "20th April 2025",
  },
  {
    id: 3,
    image: require("../../assets/sneakers.png"),
    title: "Women Sneakers",
    price: "LKR 4890.00",
    status: "Cancelled",
    statusColor: "#FFEFEF",
    statusTextColor: "#E74C3C",
    total: "4890.00",
    deliveryDate: "21st April 2025",
  },
];

const OrderHistory = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={{ width: "100%" }}>
        <BackBtnCus />
        <Text style={[styles.headerTitle, { marginTop: 15 }]}>
          Order History
        </Text>
      </View>

      {/* Order Cards */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {orders.map((order) => (
          <View key={order.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Image source={order.image} style={styles.image} />
              <View style={styles.details}>
                <Text style={styles.title}>{order.title}</Text>
                <Text style={styles.price}>{order.price}</Text>
                <View
                  style={[
                    styles.statusBadge,
                    { backgroundColor: order.statusColor },
                  ]}
                >
                  <Text style={{ color: order.statusTextColor, fontSize: 12 }}>
                    {order.status}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoText}>Total: {order.total}</Text>
              <Text style={styles.infoText}>
                Ship to: 45/3 Galle Road , Apt 5B, Colombo, Western Province,
                00300
              </Text>
              <Text style={styles.infoText}>Recipient: Zara Zynna</Text>
              <Text style={styles.infoText}>
                Est Delivery: {order.deliveryDate}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "15%",
  },

  headerTitle: {
    fontFamily: "Roboto",
    fontSize: 28,
    color: "#000",
    fontWeight: "600",
    textAlign: "left",
    marginBottom: "3%",
  },

  scrollContainer: {
    paddingBottom: 20,
  },

  card: {
    backgroundColor: "#F9F9F9",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    elevation: 1,
  },

  cardHeader: {
    flexDirection: "row",
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },

  details: {
    flex: 1,
    justifyContent: "space-between",
  },

  title: {
    fontWeight: "600",
    fontSize: 16,
  },

  price: {
    marginVertical: 4,
    color: "#333",
  },

  statusBadge: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 12,
    alignSelf: "flex-start",
  },

  info: {
    marginTop: 10,
  },

  infoText: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },
});
