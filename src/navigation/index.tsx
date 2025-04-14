import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import RootStack from "./RootStack";
import {ImageBackground, SafeAreaView} from "react-native";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function Navigation() {
  return (
    <ImageBackground
      className="flex-1"
      source={require("@/assets/png/bg.png")}
      resizeMode="cover">
      <SafeAreaView className="flex-1">
        <NavigationContainer theme={navTheme}>
          <RootStack />
        </NavigationContainer>
      </SafeAreaView>
    </ImageBackground>
  );
}
