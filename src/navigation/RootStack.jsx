import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabNavigator from "./BottomTabNavigator";
import LoginScreen from "../screens/LoginSignup/LoginScreen";
import CreateAccount from "../screens/LoginSignup/CreateAccount";
import VerifyCode from "../screens/LoginSignup/VerifyCode";
import ResetPwd from "../screens/LoginSignup/ResetPwd";
import SuccessScreen from "../screens/LoginSignup/SuccessScreen";
import PersonalDetails from "../screens/Account/PersonalDetails";
import ChangePassword from "../screens/Account/ChangePassword";
import ShippingDetails from "../screens/Account/ShippingDetails";
import OrderHistory from "../screens/Account/OrderHistory";
import ProductDetail from "../screens/ProductDetail";

const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        animation: "slide_from_right",
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VerifyCode"
        component={VerifyCode}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPwd"
        component={ResetPwd}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SuccessScreen"
        component={SuccessScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PersonalDetails"
        component={PersonalDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ShippingDetails"
        component={ShippingDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderHistory"
        component={OrderHistory}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
