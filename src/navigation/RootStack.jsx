import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginSignup/LoginScreen";
import CreateAccount from "../screens/LoginSignup/CreateAccount";
import VerifyCode from "../screens/LoginSignup/VerifyCode";

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
    </Stack.Navigator>
  );
};

export default RootStack;
