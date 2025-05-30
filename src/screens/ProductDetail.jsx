import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-paper";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("#c4912e"); // mustard

  const sizes = ["S", "M", "L", "XL", "XXL"];
  const colors = ["#000000", "#ffffff", "#c4912e"];

  return (
    <ScrollView style={styles.container}>
      {/* Product Image */}
      <Image
        source={{ uri: "https://i.imgur.com/kxWhsDG.png" }} // Replace with your actual image URL
        style={styles.productImage}
      />

      <View style={styles.card}>
        {/* Title */}
        <Text style={styles.title}>Women Printed Kurta</Text>
        <Text style={styles.subtitle}>Casual Wear</Text>

        {/* Quantity & Stock */}
        <View style={styles.row}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={() => setQuantity((prev) => Math.max(1, prev - 1))}
              style={styles.qtyBtn}
            >
              <Text style={styles.qtyBtnText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qtyText}>{quantity}</Text>
            <TouchableOpacity
              onPress={() => setQuantity((prev) => prev + 1)}
              style={styles.qtyBtn}
            >
              <Text style={styles.qtyBtnText}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.stockText}>03 Available in stock</Text>
        </View>

        {/* Size Selector */}
        <Text style={styles.sectionTitle}>Size</Text>
        <View style={styles.row}>
          {sizes.map((size) => (
            <TouchableOpacity
              key={size}
              onPress={() => setSelectedSize(size)}
              style={[
                styles.sizeCircle,
                selectedSize === size && styles.selectedCircle,
              ]}
            >
              <Text
                style={[
                  styles.sizeText,
                  selectedSize === size && styles.selectedText,
                ]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Color Selector */}
        <Text style={styles.sectionTitle}>Color</Text>
        <View style={styles.row}>
          {colors.map((color) => (
            <TouchableOpacity
              key={color}
              onPress={() => setSelectedColor(color)}
              style={[
                styles.colorCircle,
                { backgroundColor: color },
                selectedColor === color && styles.selectedColorBorder,
              ]}
            />
          ))}
        </View>

        {/* Description */}
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          Stay stylish with this women&apos;s printed kurta, perfect for casual
          wear. Made with soft, breathable fabric and designed for all-day
          comfort, it&apos;s your go-to choice for a relaxed yet chic look.
        </Text>

        {/* Pricing */}
        <Text style={styles.price}>
          Price : LKR 2100.00 <Text style={styles.strike}>LKR 2900.00</Text>
        </Text>
        <Text style={styles.delivery}>
          Est Delivery: Next day / 14 days delivery / 30 - 45 days delivery
        </Text>
        <Text style={styles.bulkOrder}>
          Bulk Order: Orders start from a minimum of 10 or 15 items
        </Text>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <Button mode="outlined" style={styles.btn} textColor="#ff5400">
            Add to Cart
          </Button>
          <Button mode="contained" style={styles.btn} buttonColor="#ff5400">
            Buy Now
          </Button>
        </View>

        <TouchableOpacity style={styles.whatsappBtn}>
          <Ionicons name="logo-whatsapp" size={20} color="green" />
          <Text style={styles.whatsappText}>Inquire Via Whatsapp</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff" },
  productImage: {
    width: "100%",
    height: 380,
    resizeMode: "cover",
  },
  card: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -20,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  title: { fontSize: 20, fontWeight: "600" },
  subtitle: { fontSize: 14, color: "gray", marginBottom: 10 },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    flexWrap: "wrap",
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 10,
    paddingHorizontal: 8,
  },
  qtyBtn: {
    padding: 6,
  },
  qtyBtnText: { fontSize: 18, fontWeight: "bold" },
  qtyText: { fontSize: 16, marginHorizontal: 8 },
  stockText: { marginLeft: 20, fontSize: 14, color: "green" },

  sectionTitle: { marginTop: 10, fontWeight: "bold", fontSize: 15 },
  sizeCircle: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    padding: 10,
    marginRight: 10,
  },
  selectedCircle: {
    borderColor: "#000",
    backgroundColor: "#000",
  },
  sizeText: { fontSize: 14 },
  selectedText: { color: "#fff" },

  colorCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  selectedColorBorder: {
    borderWidth: 2,
    borderColor: "#000",
  },

  description: { fontSize: 14, marginVertical: 10, color: "#444" },
  price: { fontSize: 16, fontWeight: "bold", marginTop: 5 },
  strike: {
    textDecorationLine: "line-through",
    color: "gray",
    fontWeight: "normal",
  },
  delivery: { fontSize: 13, color: "gray", marginTop: 5 },
  bulkOrder: { fontSize: 13, color: "gray", marginBottom: 15 },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 10,
  },

  whatsappBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 10,
  },
  whatsappText: { marginLeft: 8, color: "green", fontWeight: "bold" },
});
