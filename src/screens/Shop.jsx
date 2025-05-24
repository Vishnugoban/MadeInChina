import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Platform,
  FlatList,
  useWindowDimensions,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const categories = [
  {
    title: "Accessories",
    image: require("../assets/category/accessories_cate.png"),
  },
  { title: "Mens", image: require("../assets/category/mens_cate.png") },
  { title: "Beauty", image: require("../assets/category/beauty_cate.png") },
  { title: "Electronics", image: require("../assets/category/elect_cate.png") },
  { title: "Shoes", image: require("../assets/category/shoes_cate.png") },
  { title: "Womens", image: require("../assets/category/women_cate.png") },
  { title: "Bags", image: require("../assets/category/bags_cate.png") },
  { title: "Security", image: require("../assets/category/security_cate.png") },
  { title: "Kids", image: require("../assets/category/kids_cate.png") },
  { title: "Bags", image: require("../assets/category/bags_cate.png") },
  { title: "Security", image: require("../assets/category/security_cate.png") },
  { title: "Kids", image: require("../assets/category/kids_cate.png") },
];

const products = [
  {
    id: 1,
    title: "Women Printed Kurta",
    price: 2490,
    image: require("../assets/kurta1.jpg"),
  },
  {
    id: 2,
    title: "Leather Handbag",
    price: 990,
    image: require("../assets/bag.jpg"),
  },
  {
    id: 3,
    title: "Women Printed Kurta",
    price: 2100,
    image: require("../assets/kurta2.jpg"),
  },
  {
    id: 4,
    title: "Ladies Watch",
    price: 1700,
    image: require("../assets/watch.jpg"),
  },
  {
    id: 5,
    title: "Women Printed Kurta",
    price: 2000,
    image: require("../assets/kurta3.png"),
  },
  {
    id: 6,
    title: "Women Printed Kurta",
    price: 1900,
    image: require("../assets/kurta4.png"),
  },
  {
    id: 7,
    title: "Women Printed Kurta",
    price: 1850,
    image: require("../assets/kurta5.png"),
  },
];

const CategoryItem = ({ image, title }) => (
  <TouchableOpacity style={styles.categoryItem}>
    <Image source={image} style={styles.categoryImage} />
    <Text style={styles.categoryText}>{title}</Text>
  </TouchableOpacity>
);

const ProductCard = ({ item, cardWidth }) => (
  <View style={[styles.productCard, { width: cardWidth }]}>
    <Image source={item.image} style={styles.productImage} />
    <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
      <Text numberOfLines={2} style={styles.productTitle}>
        {item.title}
      </Text>
      <Text style={styles.productPrice}>LKR {item.price}.00</Text>
      <Text style={styles.delivery}>
        Est Delivery: Next day / 14 days seller / 30 - 45 days delivery
      </Text>
    </View>
  </View>
);

const Shop = () => {
  const { width } = useWindowDimensions();
  const cardWidth = (width - 40) / 2;
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search */}
        <View style={styles.searchContainer}>
          <MaterialCommunityIcons name="magnify" size={25} color="#A2A2A2" />
          <TextInput
            placeholder="Search any product..."
            style={styles.searchInput}
            placeholderTextColor="#A2A2A2"
          />
        </View>

        {/* Categories header */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Category</Text>
          <TouchableOpacity style={styles.sortBtn}>
            <Text style={styles.sortText}>Sort</Text>
            <MaterialCommunityIcons name="filter-variant" size={16} />
          </TouchableOpacity>
        </View>

        {/* Categories grid */}
        <FlatList
          data={categories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <CategoryItem image={item.image} title={item.title} />
          )}
          numColumns={4} // 4 items per row
          scrollEnabled={false}
          contentContainerStyle={styles.categoryGrid}
        />

        <View style={{ marginVertical: 15 }} />
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          renderItem={({ item }) => (
            <ProductCard item={item} cardWidth={cardWidth} />
          )}
          scrollEnabled={false}
        />
      </ScrollView>
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 35 : 20,
    paddingHorizontal: 10,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
  },

  searchInput: {
    fontFamily: "Roboto",
    fontWeight: "400",
    marginLeft: 10,
    flex: 1,
    fontSize: 14,
  },

  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  sectionTitle: {
    fontFamily: "Roboto",
    fontWeight: "600",
    fontSize: 18,
  },

  sortBtn: {
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    gap: 10,
  },

  sortText: {
    fontFamily: "Roboto",
    fontWeight: "400",
    marginLeft: 5,
    fontSize: 14,
  },

  categoryGrid: {
    // paddingBottom: 15, // optional
  },

  categoryItem: {
    flex: 1,
    margin: 5,
    alignItems: "center",
    paddingVertical: 5,
  },

  categoryImage: {
    width: 65,
    height: 65,
    borderRadius: 50,
    resizeMode: "contain",
  },

  categoryText: {
    fontFamily: "Roboto",
    fontWeight: "400",
    marginTop: 5,
    fontSize: 14,
    color: "#161616",
    textAlign: "center",
  },

  productCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: "#E2E2E2",
  },

  productImage: {
    width: "100%",
    height: 130,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    resizeMode: "cover",
  },

  productTitle: {
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 14,
    color: "#161616",
  },

  productPrice: {
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 14,
    color: "#161616",
  },

  delivery: {
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 12,
    color: "#666666",
    marginTop: 4,
  },
});
