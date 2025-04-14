// import React from "react";
// import {View, Text, Pressable} from "react-native";
// import {useDispatch, useSelector} from "react-redux";
// import {RootState} from "@/src/store";
// import {addScore} from "@/src/store/slices/gameSlice";
// import {clearToken} from "@/src/services/tokenManager";
// import {setIsLoggedIn} from "@/src/store/slices/authSlice";

// const SettingScreen = () => {
//   const dispatch = useDispatch();
//   const score = useSelector((state: RootState) => state.game.score);
//   return (
//     <View className="flex-1 justify-center items-center bg-stone-500">
//       <Text className="text-3xl font-bold mb-4 text-primary">
//         Score: {score}
//       </Text>

//       <Pressable
//         onPress={() => dispatch(addScore(10))}
//         className="bg-amber-800 px-6 py-3 rounded-full mb-3">
//         <Text className="text-white text-lg">+10 điểm</Text>
//       </Pressable>

//       <Pressable
//         onPress={() => {
//           // dispatch(resetGame());
//           clearToken();
//           dispatch(setIsLoggedIn(false));
//         }}
//         className="bg-primary px-6 py-3 rounded-full">
//         <Text className="text-white text-lg">Reset game</Text>
//       </Pressable>
//     </View>
//   );
// };

// export default SettingScreen;
import {Images} from "@/assets";
import {SETTING_ROUTES} from "@/navigation/routes";
import {useNavigation} from "@react-navigation/native";
import React from "react";
import {View, Text, Pressable, Switch} from "react-native";
import FastImage from "react-native-fast-image";

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [isSoundOn, setIsSoundOn] = React.useState(true);

  return (
    <View style={{flex: 1, padding: 20, marginTop: 50}}>
      <View style={{alignItems: "center", marginBottom: 20}}>
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 10,
          }}>
          Settings
        </Text>
      </View>

      {/* Language Setting */}
      <Pressable
        style={{
          backgroundColor: "rgba(5, 162, 198, 0.8)",
          borderColor: "rgba(58, 104, 176, 0.7)",
          borderWidth: 1,
          borderRadius: 16,
          padding: 16,
          marginBottom: 12,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <FastImage
            source={Images.translate}
            style={{width: 40, height: 40, marginRight: 12}}
          />
          <View>
            <Text style={{color: "white", fontWeight: "bold"}}>
              Select your language
            </Text>
            <Text style={{color: "#D0F2FF"}}>English</Text>
          </View>
        </View>
        <FastImage
          source={Images.arrow_right}
          style={{width: 24, height: 24, marginRight: 12}}
        />
      </Pressable>

      {/* Sound Toggle */}
      <View
        style={{
          backgroundColor: "rgba(5, 162, 198, 0.8)",
          borderColor: "rgba(58, 104, 176, 0.7)",
          borderWidth: 1,
          borderRadius: 16,
          padding: 16,
          marginBottom: 12,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <FastImage
            source={Images.sound}
            style={{width: 40, height: 40, marginRight: 12}}
          />
          <Text style={{color: "white", fontWeight: "bold"}}>Sound</Text>
        </View>
        <Switch
          value={isSoundOn}
          onValueChange={setIsSoundOn}
          trackColor={{false: "#999", true: "#00ECFF"}}
          thumbColor="#fff"
        />
      </View>

      {/* Terms and Policy */}
      <Pressable
        onPress={() => {
          navigation.navigate(SETTING_ROUTES.TERMS_POLICY as never);
        }}
        style={{
          backgroundColor: "rgba(5, 162, 198, 0.8)",
          borderColor: "rgba(58, 104, 176, 0.7)",
          borderWidth: 1,
          borderRadius: 16,
          padding: 16,
          marginBottom: 12,
          flexDirection: "row",
          alignItems: "center",
        }}>
        <FastImage
          source={Images.policy}
          style={{width: 40, height: 40, marginRight: 12}}
        />
        <Text style={{color: "white", fontWeight: "bold"}}>
          Terms and Policy
        </Text>
      </Pressable>

      {/* Delete Account */}
      <Pressable
        style={{
          borderRadius: 16,
          padding: 16,
          marginTop: 12,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "rgba(255, 0, 0, 0.8)",
        }}>
        <FastImage
          source={Images.trash}
          style={{width: 40, height: 40, marginRight: 12}}
        />
        <Text style={{color: "white", fontWeight: "bold"}}>Delete account</Text>
      </Pressable>
    </View>
  );
};

export default SettingsScreen;
