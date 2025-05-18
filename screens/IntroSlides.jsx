import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";

import IntroImg1 from "../assets/intro1.svg";
import IntroImg2 from "../assets/intro2.svg";
import IntroImg3 from "../assets/intro3.svg";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Choose Products",
    text: "Browse a wide range of items and pick what you love to get started - it's quick, easy, and tailored just for you.",
    image: IntroImg1,
    backgroundColor: "#FFFFFF",
  },
  {
    id: "2",
    title: "Make Payment",
    text: "Choose your preferred payment method and complete your purchase - secure, seamless, and designed for convenience.",
    image: IntroImg2,
    backgroundColor: "#FFFFFF",
  },
  {
    id: "3",
    title: "Get Your Order",
    text: "Choose your preferred payment method and complete your purchase - secure, seamless, and designed for convenience.",
    image: IntroImg3,
    backgroundColor: "#FFFFFF",
  },
];

const IntroSlides = ({ onDone }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef();

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    } else {
      onDone();
    }
  };

  const renderItem = ({ item, index }) => {
    const SvgImage = item.image;

    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        <SvgImage width={300} height={300} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>

        {/* Pagination Dots under text */}
        <View style={styles.pagination}>
          {slides.map((_, dotIndex) => (
            <View
              key={dotIndex}
              style={[
                styles.dot,
                currentIndex === dotIndex && styles.activeDot,
              ]}
            />
          ))}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      />

      {/* Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.skipBtn} onPress={onDone}>
          <Text style={styles.skipBtnText}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNext}>
          <FontAwesome name="arrow-circle-right" size={35} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default IntroSlides;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  slide: {
    width,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontFamily: "Roboto",
    fontSize: 24,
    color: "#000000",
    fontWeight: "700",
    textAlign: "center",
  },

  text: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "#000000",
    fontWeight: "400",
    textAlign: "center",
    marginTop: 20,
  },

  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },

  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },

  dot: {
    height: 8,
    width: 8,
    backgroundColor: "#aaa",
    margin: 5,
    borderRadius: 4,
  },

  activeDot: {
    backgroundColor: "black",
    width: 40,
  },

  skipBtnText: {
    fontFamily: "Roboto",
    fontWeight: "500",
    textAlign: "center",
    fontSize: 18,
    color: "#1D1D1D",
  },

  skipBtn: {},

  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: "10%",
  },
});
