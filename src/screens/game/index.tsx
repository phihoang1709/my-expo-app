import {Images, Logo_Tiktok} from "@/assets";
import React from "react";
import {View, Text, FlatList, Pressable} from "react-native";
import FastImage from "react-native-fast-image";
import {styles} from "./styles";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";

const GameScreen: React.FC = () => {
  const insets = useSafeAreaInsets();

  const renderItem = ({item, index}: {item: any; index: number}) => {
    const renderGameIcon = (iconGame: string) => {
      switch (iconGame) {
        // case ReferralType.Invite_20:
        //   return <Logo_Site width={38} height={38} />;
        default:
          return <Logo_Tiktok width={80} height={80} />;
      }
    };
    return (
      <View key={index} style={styles.itemContainer}>
        <View style={{marginRight: 10}}>{renderGameIcon("")}</View>
        <Text style={styles.title}>{item.title}</Text>
        <View style={{overflow: "hidden", borderRadius: 20}}>
          <LinearGradient
            colors={["#9CFF8F", "#92FDB9", "#83FEE4"]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Pressable style={styles.claimButton} onPress={() => {}}>
              <Text className="font-bold text-lg">{"Play"}</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </View>
    );
  };
  return (
    <View className="flex-1">
      <FlatList
        data={[1]}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
        contentContainerStyle={[
          styles.listContainer,
          {paddingBottom: insets.top + 100},
        ]}
        // refreshControl={
        //   <RefreshControl refreshing={isFetching} onRefresh={refetch} />
        // }
        ListHeaderComponent={() => (
          <View style={{alignItems: "center", marginBottom: 24}}>
            <FastImage
              source={Images.mission_fox}
              style={{width: 320, height: 270}}
              resizeMode="contain"
            />
            <Text className="text-4xl font-bold color-white">{"Ganmes"}</Text>
            <Text className="text-base color-white">
              {"Tab to get daily rewards."}
            </Text>
          </View>
        )}
      />
      {/* <PopupModal
        visible={visible}
        onClose={() => setVisible(false)}
        title={taskItem?.title ?? ""}
        description={taskItem?.description ?? ""}
        pointsReward={String(taskItem?.pointsReward) ?? ""}
        icon={Images.coin}
        actionText={taskItem?.status as string}
        status={taskItem?.status as TaskStatus}
        onActionPress={async () => {
          if (taskItem?.id && taskItem?.status !== TaskStatus.CLAIM) {
            await startTask({userTaskId: taskItem?.id});
            Linking.openURL(taskItem?.task.actionUrl);
          } else if (taskItem?.status === TaskStatus.COMPLETED) {
            Linking.openURL(taskItem?.task.actionUrl);
          } else {
            await claimTaskRequest({userTaskId: taskItem?.id as string});
          }
          setVisible(false);
        }}
      /> */}
    </View>
  );
};
export default GameScreen;
