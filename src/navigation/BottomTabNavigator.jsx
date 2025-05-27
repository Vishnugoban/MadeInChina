import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  StyleSheet,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import HomeScreen from "../screens/HomeScreen";
import Category from "../screens/Category";
import Shop from "../screens/Shop";
import Cart from "../screens/Cart";
import Account from "../screens/Account/Account";

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get("window");

const TAB_ICONS = {
  Home: "home",
  Category: "view-grid",
  Shop: "magnify",
  Cart: "cart",
  Account: "account",
};

function CustomTabBar({ state, descriptors, navigation }) {
  const translateX = useRef(new Animated.Value(0)).current;
  const tabWidth = width / state.routes.length;
  const insets = useSafeAreaInsets();

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: state.index * tabWidth,
      useNativeDriver: true,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.index]);

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      {/* Orange bar indicator at top of tab bar */}
      <Animated.View
        style={[
          styles.animateCont,
          { width: tabWidth, transform: [{ translateX }] },
        ]}
      />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const color = isFocused ? "#F85605" : "#484C52";

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            style={{
              flex: 1,
              alignItems: "center",
              paddingVertical: 10,
              paddingTop: 12,
            }}
          >
            <MaterialCommunityIcons
              name={TAB_ICONS[route.name]}
              size={24}
              color={color}
            />
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 12,
                color,
                marginTop: 4,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderTopColor: "#ddd",
    borderTopWidth: 1,
    backgroundColor: "white",
    position: "relative",
  },

  animateCont: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 3,
    backgroundColor: "#F85605",
    borderRadius: 2,
    zIndex: 10,
  },
});

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
