import React, {useState} from "react";
import {Dropdown, Images, Trunk} from "@/assets";
import {Pressable, View, Text} from "react-native";
import FastImage from "react-native-fast-image";
import PopupModal from "../Modal";
import {useNavigation} from "@react-navigation/native";
import {SETTING_ROUTES} from "@/navigation/routes";
import {useAppSelector} from "@/hooks/useAppSelector";

const Header: React.FC = () => {
  const navigation = useNavigation();
  const {user} = useAppSelector(state => state.auth);
  const [visible, setVisible] = useState(true);
  const [openSetting, setOpenSetting] = useState(false);
  return (
    <View>
      <FastImage
        source={Images.mission_header}
        style={{width: "100%", height: 60}}>
        <View className="flex-row justify-between items-center">
          <FastImage
            source={Images.mission_buffer}
            style={{
              width: 80,
              height: 40,
              margin: 10,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Pressable
              onPress={() => setVisible(true)}
              style={{paddingRight: 8}}>
              <Trunk width={44} height={44} />
            </Pressable>
          </FastImage>
          <View className="flex-row justify-center, items-center ">
            <FastImage
              source={Images.avatar}
              style={{
                width: 31,
                height: 35,
                // padding: 2,
                marginRight: 4,
                // marginRight: 8,
              }}
            />
            <View>
              <Text className="color-white text-lg font-semibold leading-4 ">
                {user.lastName}
              </Text>
              <View className="flex-row justify-center, items-center">
                <Text className="color-white text-xs font-semibold">
                  {"LVL. "}
                </Text>
                <Text
                  style={{
                    backgroundColor: "#24E6F3",
                    paddingHorizontal: 5,
                    borderRadius: 4,
                  }}>
                  {"4"}
                </Text>
              </View>
            </View>
          </View>
          <FastImage
            source={Images.mission_buffer}
            style={{
              width: 78,
              height: 40,
              margin: 10,
              justifyContent: "center",
              alignItems: "center",
              transform: [{scaleX: -1}],
            }}>
            <Pressable
              onPress={() => setOpenSetting(!openSetting)}
              style={{
                // paddingTop: 0,
                transform: [{rotate: openSetting ? "-90deg" : "90deg"}],
              }}>
              <Dropdown width={30} height={30} />
            </Pressable>
          </FastImage>
        </View>
      </FastImage>
      <PopupModal
        visible={visible}
        onClose={() => setVisible(false)}
        title="Your Items"
        description="No Item 12321321312312312312."
        icon={Images.coin}
        actionText="Start"
        status="start"
        onActionPress={() => {
          setVisible(false);
          // go to task...
        }}
      />
      {openSetting && (
        <View
          style={{
            position: "absolute",
            bottom: -100,
            right: 0,
            width: 120,
            margin: 10,
            backgroundColor: "rgba(28, 46, 74, 0.9)",
            borderColor: "rgba(58, 104, 176, 0.7)",
            borderWidth: 1,
            borderRadius: 8,
          }}>
          <Pressable
            style={{
              padding: 10,
              zIndex: 1,
              flexDirection: "row",
              justifyContent: "center",
            }}
            onPress={() => {
              navigation.navigate(SETTING_ROUTES.SETTING_STACK as never);
            }}>
            <FastImage
              source={Images.activity}
              style={{
                width: 24,
                height: 24,
                marginEnd: 4,
              }}
            />
            <Text className="color-white font-semibold">Activities</Text>
          </Pressable>

          <Pressable
            style={{
              padding: 6,
              zIndex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              navigation.navigate(SETTING_ROUTES.SETTING_STACK as never);
            }}>
            <FastImage
              source={Images.setting}
              style={{
                width: 24,
                height: 24,
                marginEnd: 4,
              }}
            />
            <Text className="color-white font-semibold">Settings</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};
export default Header;
