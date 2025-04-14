import React from "react";
import SettingScreen from "@/screens/Setting";
import {createStackNavigator} from "@react-navigation/stack";
import {useNavigation} from "@react-navigation/native";
import {IconButton} from "../components/Button";
import {Arrow_Left} from "@/assets";
import {SETTING_ROUTES, SettingStackParamList} from "./routes";
import TermsAndPolicyScreen from "@/screens/Setting/TermsAndPolicy";

const Stack = createStackNavigator<SettingStackParamList>();

const HeaderBack = (initialRouteName?: string) => {
  const navigation = useNavigation<any>();
  return (
    <IconButton
      icon={<Arrow_Left />}
      onPress={() => {
        let canGoBack = navigation.canGoBack();
        if (canGoBack) {
          navigation.goBack();
        } else {
          navigation.replace(initialRouteName);
        }
      }}
      style={{marginLeft: 8}}
    />
  );
};

const SettingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SETTING_ROUTES.SETTING}
      screenOptions={() => ({
        headerShown: false,
        headerTitleAlign: "center",
        headerTransparent: true,
      })}>
      <Stack.Screen
        name={SETTING_ROUTES.SETTING}
        component={SettingScreen}
        options={() => ({
          headerShown: true,
          headerLeft: () => HeaderBack(),
          headerTitleAlign: "left",
          headerTitleStyle: {
            color: "white",
          },
          title: "Settings",
        })}
      />
      <Stack.Screen
        name={SETTING_ROUTES.TERMS_POLICY}
        component={TermsAndPolicyScreen}
        options={() => ({
          headerShown: true,
          headerLeft: () => HeaderBack(),
          headerTitleAlign: "left",
          headerTitleStyle: {
            color: "white",
          },
          title: "Terms & Policy",
        })}
      />
    </Stack.Navigator>
  );
};

export default SettingStack;
