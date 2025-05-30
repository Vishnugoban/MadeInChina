import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
  Dimensions,
  Modal,
} from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("#c4912e");
  const [imageIndex, setImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const sizes = ["S", "M", "L", "XL", "XXL"];
  const colors = ["#000000", "#ffffff", "#c4912e"];
  const maxStock = 3;

  const images = [
    require("../assets/kurta1.jpg"),
    require("../assets/kurta2.jpg"),
    require("../assets/kurta4.png"),
  ];
  const { width } = Dimensions.get("window");

  const imageUrls = images.map((img) => ({
    url: "", // Required by the library
    props: { source: img },
  }));

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => {
        setImageIndex(index);
        setIsVisible(true);
      }}
    >
      <Image
        source={item}
        style={{ width, height: 380, resizeMode: "cover" }}
      />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Image Carousel */}
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const newIndex = Math.round(e.nativeEvent.contentOffset.x / width);
          setImageIndex(newIndex);
        }}
        style={{ maxHeight: 400 }} // added to ensure height is consistent
      />

      {/* Carousel Dots */}
      <View style={styles.carouselDots}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === imageIndex && styles.activeDot]}
          />
        ))}
      </View>

      {/* Product Details Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Women Printed Kurta</Text>
        <Text style={styles.subtitle}>Casual Wear</Text>

        {/* Quantity */}
        <View style={styles.row}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={() => setQuantity((prev) => Math.max(1, prev - 1))}
              style={styles.qtyBtn}
              disabled={quantity <= 1}
            >
              <Text style={styles.qtyBtnText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qtyText}>{quantity}</Text>
            <TouchableOpacity
              onPress={() =>
                setQuantity((prev) => Math.min(maxStock, prev + 1))
              }
              style={styles.qtyBtn}
              disabled={quantity >= maxStock}
            >
              <Text style={styles.qtyBtnText}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.stockText}>
            {maxStock - quantity} Available in stock
          </Text>
        </View>

        {/* Size & Color */}
        <Text style={styles.sectionTitle}>Size</Text>
        <View style={styles.sizeColorRow}>
          <View style={styles.sizeSelector}>
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

          <View style={styles.colorPill}>
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
        </View>

        {/* Description */}
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          Stay stylish with this womens printed kurta, perfect for casual wear.
          Made with soft, breathable fabric and designed for all-day comfort,
          its your go-to choice for a relaxed yet chic look.
        </Text>

        {/* Price */}
        <Text style={styles.price}>
          Price : LKR 2100.00 <Text style={styles.strike}>LKR 2900.00</Text>
        </Text>
        <Text style={styles.delivery}>
          Est Delivery: Next day / 14 days delivery / 30 - 45 days delivery
        </Text>
        <Text style={styles.bulkOrder}>
          Bulk Order: Orders start from a minimum of 10 or 15 items
        </Text>

        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.addToCartBtn}>
            <MaterialCommunityIcons name="cart" size={20} color="#F85605" />
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyNowBtn}>
            <MaterialCommunityIcons name="wallet" size={20} color="#fff" />
            <Text style={styles.buyNowText}>Buy Now</Text>
          </TouchableOpacity>
        </View>

        {/* WhatsApp Inquiry */}
        <TouchableOpacity style={styles.whatsappBtn}>
          <Ionicons name="logo-whatsapp" size={20} color="green" />
          <Text style={styles.whatsappText}>Inquire Via Whatsapp</Text>
        </TouchableOpacity>
      </View>

      {/* Image Zoom Modal */}
      <Modal
        visible={isVisible}
        transparent={true}
        onRequestClose={() => setIsVisible(false)}
      >
        <ImageViewer
          imageUrls={imageUrls}
          index={imageIndex}
          onCancel={() => setIsVisible(false)}
          enableSwipeDown
        />
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff" },

  carouselDots: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -15,
    marginBottom: 25,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },

  activeDot: { backgroundColor: "red" },

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

  title: { fontFamily: "Roboto", fontSize: 16, fontWeight: "600" },

  subtitle: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "#666666",
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },

  sizeColorRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sizeSelector: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
  },

  colorPill: {
    flexDirection: "column",
    padding: 6,
    backgroundColor: "#f4f4f4",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 30,
    paddingHorizontal: 8,
  },

  qtyBtn: { padding: 6 },

  qtyBtnText: { fontFamily: "Roboto", fontSize: 18, fontWeight: "600" },

  qtyText: { fontFamily: "Roboto", fontSize: 16, marginHorizontal: 8 },

  stockText: {
    fontFamily: "Roboto",
    fontWeight: "600",
    marginLeft: 20,
    fontSize: 14,
    color: "#000000",
  },

  sectionTitle: {
    fontFamily: "Roboto",
    fontWeight: "600",
    marginTop: 25,
    fontSize: 15,
  },

  sizeCircle: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
  },

  selectedCircle: {
    borderColor: "#000",
    backgroundColor: "#000",
  },

  sizeText: {
    fontFamily: "Roboto",
    fontWeight: "600",
    fontSize: 14,
    color: "#888888",
  },

  selectedText: {
    fontFamily: "Roboto",
    fontWeight: "600",
    fontSize: 14,
    color: "#fff",
  },

  colorCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },

  selectedColorBorder: {
    borderWidth: 2,
    borderColor: "#000",
  },

  description: {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 12,
    marginVertical: 10,
    color: "#666666",
    textAlign: "justify",
  },

  price: { fontSize: 16, fontWeight: "bold", marginTop: 5 },

  strike: {
    textDecorationLine: "line-through",
    color: "gray",
    fontWeight: "normal",
  },

  delivery: { fontSize: 13, color: "gray", marginVertical: 15 },

  bulkOrder: { fontSize: 13, color: "gray", marginBottom: 15 },

  buttonRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  addToCartBtn: {
    width: "45%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#F85605",
    borderRadius: 12,
    padding: 10,
  },

  addToCartText: {
    marginLeft: 8,
    color: "#F85605",
    fontWeight: "bold",
  },

  buyNowBtn: {
    width: "45%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    backgroundColor: "#F85605",
    borderRadius: 12,
    padding: 10,
  },

  buyNowText: {
    marginLeft: 8,
    color: "#fff",
    fontWeight: "bold",
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

  whatsappText: {
    marginLeft: 8,
    color: "green",
    fontWeight: "bold",
  },
});
