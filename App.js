import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";

import IntroSlider from "./src/screens/IntroSlides";
import RootStack from "./src/navigation/RootStack";

export default function App() {
  const [showRealApp, setShowRealApp] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check if intro has already been shown
  useEffect(() => {
    const checkIntro = async () => {
      const hasSeenIntro = await AsyncStorage.getItem("hasSeenIntro");
      if (hasSeenIntro === "true") {
        setShowRealApp(true);
      }
      setLoading(false);
    };
    checkIntro();
  }, []);

  // useEffect(() => {
  //   const clearCache = async () => {
  //     await AsyncStorage.removeItem("hasSeenIntro"); // or AsyncStorage.clear() to remove all keys
  //     console.log("Intro cache cleared");
  //   };
  //   clearCache();
  // }, []);

  const handleDone = async () => {
    await AsyncStorage.setItem("hasSeenIntro", "true");
    setShowRealApp(true);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return showRealApp ? (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  ) : (
    <IntroSlider onDone={handleDone} />
  );
}
