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

const { width } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Welcome to MyApp",
    text: "Explore the best features of our app.",
    image: IntroImg1,
    backgroundColor: "#59b2ab",
  },
  {
    id: "2",
    title: "Plan with Ease",
    text: "AI-powered itinerary planner at your fingertips.",
    image: IntroImg2,
    backgroundColor: "#febe29",
  },
  {
    id: "3",
    title: "Start Your Journey",
    text: "Book and enjoy your trip stress-free!",
    image: IntroImg3,
    backgroundColor: "#22bcb5",
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

  const renderItem = ({ item }) => {
    const SvgImage = item.image;

    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        <Text style={styles.title}>{item.title}</Text>
        <SvgImage width={300} height={300} /> 
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
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

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View>

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleNext}
        accessible={true}
        accessibilityLabel="Next or Get Started Button"
      >
        <Text style={styles.buttonText}>
          {currentIndex === slides.length - 1 ? "Get Started" : "Next"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default IntroSlides;

const styles = StyleSheet.create({
  container: { flex: 1 },

  slide: {
    width,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
  },

  text: {
    fontSize: 16,
    color: "#fff",
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
    marginBottom: 10,
  },

  dot: {
    height: 8,
    width: 8,
    backgroundColor: "#aaa",
    margin: 5,
    borderRadius: 4,
  },

  activeDot: {
    backgroundColor: "#fff",
    width: 16,
  },

  button: {
    backgroundColor: "#000",
    margin: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
