import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CustomTabBar from "./TabBar/CustomTabBar";
import MissionScreen from "@/screens/Mission";
import GameScreen from "@/screens/game";
import AirdropScreen from "@/screens/Airdrop";
import FriendScreen from "@/screens/Friend";
import SettingScreen from "@/screens/Setting";
import {View} from "react-native";
import Header from "../components/Header";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <View style={{flex: 1}}>
      <Header />
      <View style={{flex: 1}}>
        <Tab.Navigator
          tabBar={props => <CustomTabBar {...props} />}
          screenOptions={{headerShown: false}}>
          <Tab.Screen name="Missions" component={MissionScreen} />
          <Tab.Screen name="Games" component={GameScreen} />
          <Tab.Screen name="Airdrop" component={AirdropScreen} />
          <Tab.Screen name="Friends" component={FriendScreen} />
          <Tab.Screen name="Settings" component={SettingScreen} />
        </Tab.Navigator>
      </View>
    </View>
  );
}
