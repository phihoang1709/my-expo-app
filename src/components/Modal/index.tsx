import {Close} from "@/assets";
import {TaskStatus} from "@/constants/enum";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  GestureResponderEvent,
  Pressable,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

type Props = {
  visible: boolean;
  onClose: (event: GestureResponderEvent) => void;
  onActionPress: () => void;
  title: string;
  description: string;
  icon: any;
  actionText: string;
  status: TaskStatus;
  pointsReward: string;
};

const PopupModal = ({
  visible,
  onClose,
  onActionPress,
  title,
  pointsReward,
  description,
  icon,
  actionText,
  status,
}: Props) => {
  const renderActionButton = (
    status: TaskStatus,
    actionText: string,
    onActionPress: (event: GestureResponderEvent) => void,
  ) => {
    switch (status) {
      case TaskStatus.OPEN:
        return (
          <TouchableOpacity
            style={{backgroundColor: "#B7F8FF"}}
            className="px-10 py-3 rounded-full"
            onPress={onActionPress}>
            <Text style={{color: "#005387"}} className="font-semibold">
              {"Start"}
            </Text>
          </TouchableOpacity>
        );
      case TaskStatus.CLAIM:
        return (
          // <TouchableOpacity
          //   style={{backgroundColor: "#B7F8FF"}}
          //   className="px-5 py-2 rounded-full"
          //   onPress={onActionPress}>
          //   <Text style={{color: "#00481F"}}>{"Claim"}</Text>
          // </TouchableOpacity>
          <TouchableOpacity style={{overflow: "hidden", borderRadius: 16}}>
            <LinearGradient
              colors={["#9CFF8F", "#92FDB9", "#83FEE4"]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Pressable
                className="px-10 py-3 rounded-full pressed:opacity-60"
                onPress={onActionPress}>
                <Text style={{color: "#00481F", fontWeight: "600"}}>{"Claim"}</Text>
              </Pressable>
            </LinearGradient>
          </TouchableOpacity>
        );
      case TaskStatus.PENDING:
        return (
          <Pressable
            onPress={onActionPress}
            className="bg-yellow-400 px-10 py-3 rounded-full">
            <Text style={{color: "#684600"}} className="font-semibold">
              {status.toLocaleUpperCase()}
            </Text>
          </Pressable>
        );
      case TaskStatus.COMPLETED:
        return (
          <Pressable
            onPress={onActionPress}
            style={{backgroundColor: "rgba(22, 39, 54, 0.6)"}}
            className="bg-yellow-400 px-5 py-2 rounded-full">
            <Text style={{color: "#fff"}} className="font-semibold">
              {status}
            </Text>
          </Pressable>
        );
      default:
        null;
    }
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className="flex-1 items-center justify-center bg-black/60 px-6">
        <LinearGradient
          colors={[
            "#92e3fa",
            "#47c3e6",
            "#32bae0",
            "#1594b8",
            "#13a0c8",
            "#24e6f3",
          ]}
          start={{x: 2, y: -1}}
          end={{x: 1, y: 0}}
          style={{
            borderRadius: 12,
            backgroundColor: "#fff",
            shadowColor: "#000000",
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.2,
            shadowRadius: 20,
            elevation: 5,
          }}>
          <View className="rounded-2xl p-5 w-full items-center relative">
            <TouchableOpacity
              className="absolute top-0 right-0 p-5"
              onPress={onClose}
              hitSlop={10}>
              <Close />
            </TouchableOpacity>
            <Text className="text-lg font-bold text-center text-white mb-3">
              {title}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 12,
                marginVertical: 6,
                backgroundColor: "rgba(22, 39, 54, 0.6)",
              }}>
              <Image source={icon} className="w-10 h-10" resizeMode="contain" />
              <Text className="color-white font-semibold">
                {"+" + pointsReward}
              </Text>
            </View>
            <Text
              style={{marginHorizontal: 30}}
              className="text-center text-lg font-bold text-white mb-4">
              {description}
            </Text>
            {renderActionButton(status, actionText, onActionPress)}
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
};

export default PopupModal;
