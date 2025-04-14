import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AUTH_ROUTES, AuthStackParamList} from "./routes";
import LoginScreen from "../screens/login";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStacks() {
  return (
    <Stack.Navigator initialRouteName={AUTH_ROUTES.LOGIN}>
      <Stack.Screen options={{headerShown: false}} name={AUTH_ROUTES.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
}
