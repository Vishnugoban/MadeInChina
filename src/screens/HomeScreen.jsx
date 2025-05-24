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
  useWindowDimensions,
  Platform,
} from "react-native";

import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import TempLogo from "../assets/tem_logo.svg";

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

const CategoryItem = ({ icon, title }) => (
  <TouchableOpacity style={styles.categoryItem}>
    <Ionicons name={icon} size={22} color="#444" />
    <Text style={styles.categoryText}>{title}</Text>
  </TouchableOpacity>
);

const ProductCard = ({ item, cardWidth }) => (
  <View style={[styles.productCard, { width: cardWidth }]}>
    <Image source={item.image} style={styles.productImage} />
    <Text numberOfLines={2} style={styles.productTitle}>
      {item.title}
    </Text>
    <Text style={styles.productPrice}>LKR {item.price}.00</Text>
    <Text style={styles.delivery}>
      Est Delivery: Next day / 14 days seller / 30 - 45 days delivery
    </Text>
  </View>
);

const HomeScreen = () => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const cardWidth = (width - 60) / 2;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TempLogo width={120} height={40} />
          <MaterialCommunityIcons
            name="bell-ring-outline"
            size={20}
            style={styles.iconSpacing}
          />
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <MaterialCommunityIcons name="magnify" size={25} color="#A2A2A2" />
          <TextInput
            placeholder="Search any product..."
            style={styles.searchInput}
            placeholderTextColor="#A2A2A2"
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
            <Text style={styles.sortText}>Sort</Text>
            <MaterialCommunityIcons name="filter-variant" size={16} />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScroll}
        >
          {categories.map((item, index) => (
            <CategoryItem key={index} icon={item.icon} title={item.title} />
          ))}
        </ScrollView>

        {/* Products */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Products</Text>
          <TouchableOpacity>
            <Text style={styles.viewMore}>View More</Text>
          </TouchableOpacity>
        </View>

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

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 35 : 20,
    paddingHorizontal: 10,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  icons: {
    flexDirection: "row",
  },

  iconSpacing: {
    marginRight: 15,
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

  banner: {
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 25,
  },

  bannerImage: {
    width: "100%",
    height: 170,
    resizeMode: "cover",
  },

  bannerText: {
    fontFamily: "Roboto",
    fontWeight: "400",
    position: "absolute",
    top: 20,
    left: 15,
    right: 15,
  },

  flashText: {
    fontFamily: "Roboto",
    fontWeight: "700",
    color: "#fff",
    fontSize: 28,
  },

  flashSubText: {
    fontFamily: "Roboto",
    fontWeight: "400",
    color: "#fff",
    marginTop: 5,
    fontSize: 16,
  },

  shopNowBtn: {
    marginTop: 10,
    backgroundColor: "transparent",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 5,
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#fff",
  },

  shopNowText: {
    fontFamily: "Roboto",
    fontWeight: "600",
    fontSize: 16,
    color: "#FFFFFF",
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

  categoryScroll: {
    paddingBottom: 15,
  },

  categoryItem: {
    alignItems: "center",
    marginRight: 25,
    paddingVertical: 5,
    marginBottom: 10,
  },

  categoryText: {
    fontFamily: "Roboto",
    fontWeight: "400",
    marginTop: 5,
    fontSize: 14,
    color: "#161616",
  },

  viewMore: {
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 14,
    color: "#F85605",
  },

  productCard: {
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    marginBottom: 20,
    padding: 10,
  },

  productImage: {
    width: "100%",
    height: 130,
    borderRadius: 10,
    resizeMode: "cover",
  },

  productTitle: {
    fontWeight: "600",
    fontSize: 14,
    marginTop: 10,
    color: "#222",
  },

  productPrice: {
    color: "#388e3c",
    fontWeight: "bold",
    marginTop: 6,
    fontSize: 14,
  },

  delivery: {
    fontSize: 11,
    marginTop: 4,
    color: "#777",
  },
});
