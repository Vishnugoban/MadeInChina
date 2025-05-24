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

const CategoryItem = ({ image, title }) => (
  <TouchableOpacity style={styles.categoryItem}>
    <Image source={image} style={styles.categoryImage} />
    <Text style={styles.categoryText}>{title}</Text>
  </TouchableOpacity>
);

const Category = () => {
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
      </ScrollView>
    </View>
  );
};

export default Category;

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
});
