import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";

import { Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const categories = [
  { title: "Accessories", icon: "headset" },
  { title: "Mens", icon: "man" },
  { title: "Beauty", icon: "rose" },
  { title: "Electronics", icon: "tv" },
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
];

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>Made in China</Text>
          <View style={styles.icons}>
            <Feather
              name="bell"
              size={20}
              color="#000"
              style={{ marginRight: 10 }}
            />
            <Feather name="shopping-cart" size={20} color="#000" />
          </View>
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="gray" />
          <TextInput
            placeholder="Search any product..."
            style={styles.searchInput}
          />
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <Image
            source={require("../assets/banner.jpg")}
            style={styles.bannerImage}
          />
          <View style={styles.bannerText}>
            <Text style={styles.flashText}>Flash Deal!</Text>
            <Text style={styles.flashSubText}>
              Get 50% OFF on your favorite picks
            </Text>
            <TouchableOpacity style={styles.shopNowBtn}>
              <Text style={styles.shopNowText}>Shop Now →</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>All Featured</Text>
          <TouchableOpacity style={styles.sortBtn}>
            <Feather name="filter" size={16} />
            <Text style={styles.sortText}>Sort</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
        >
          {categories.map((item, index) => (
            <View key={index} style={styles.categoryItem}>
              <Ionicons name={item.icon} size={24} color="#000" />
              <Text style={styles.categoryText}>{item.title}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Products */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Products</Text>
          <Text style={styles.viewMore}>View More</Text>
        </View>

        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={styles.productGrid}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productPrice}>LKR {item.price}.00</Text>
              <Text style={styles.delivery}>
                Est Delivery: Next day / 14 days seller / 30 - 45 days delivery
              </Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },
  header: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
  },
  icons: {
    flexDirection: "row",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 10,
    padding: 10,
    marginVertical: 15,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
  },
  banner: {
    backgroundColor: "#ff5722",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
  },
  bannerImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  bannerText: {
    position: "absolute",
    top: 20,
    left: 15,
  },
  flashText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  flashSubText: {
    color: "#fff",
    marginTop: 5,
  },
  shopNowBtn: {
    marginTop: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
  },
  shopNowText: {
    color: "#ff5722",
    fontWeight: "bold",
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  sortBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  sortText: {
    marginLeft: 5,
  },
  categoryScroll: {
    marginBottom: 20,
  },
  categoryItem: {
    alignItems: "center",
    marginRight: 20,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 12,
  },
  viewMore: {
    fontSize: 12,
    color: "blue",
  },
  productGrid: {
    paddingBottom: 60,
  },
  productCard: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    width: (width - 50) / 2,
  },
  productImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  productTitle: {
    fontWeight: "bold",
    marginTop: 10,
  },
  productPrice: {
    color: "green",
    fontWeight: "bold",
    marginTop: 5,
  },
  delivery: {
    fontSize: 10,
    marginTop: 5,
    color: "#888",
  },
});
