import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import HomeScreen from "../screens/HomeScreen";
import Category from "../screens/Category";
import Shop from "../screens/Shop";
import Cart from "../screens/Cart";
import Account from "../screens/Account";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Category") {
            iconName = "view-grid";
          } else if (route.name === "Shop") {
            iconName = "magnify";
          } else if (route.name === "Cart") {
            iconName = "cart";
          } else if (route.name === "Account") {
            iconName = "account";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "#F85605",
        tabBarInactiveTintColor: "#484C52",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
