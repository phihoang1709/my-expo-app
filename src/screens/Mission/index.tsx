import React, {useMemo, useState} from "react";
import {View, FlatList, Text, Pressable, RefreshControl} from "react-native";
import {styles} from "./styles";
import {Linking} from "react-native";
import {
  useClaimTaskMutation,
  useGetEarnTaskQuery,
  useStartTaskMutation,
} from "@/services/mission.api";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import FastImage from "react-native-fast-image";
import {
  Images,
  Logo_Instagram,
  Logo_Site,
  Logo_Telegram,
  Logo_Tiktok,
  Logo_X,
  Logo_Ytb_Watch,
} from "@/assets";
import PopupModal from "@/components/Modal";
import {EarnTaskItem} from "@/services/type";
import {ReferralType, SocialType, TaskStatus} from "@/constants/enum";
import LinearGradient from "react-native-linear-gradient";
const TABS = ["Daily", "Events"];
const MissionScreen = () => {
  const insets = useSafeAreaInsets();
  const [visible, setVisible] = useState(false);
  // const [refreshing, setRefreshing] = useState(false);
  const [selectedTab, setSelectedTab] = useState<string>("Daily");
  const [taskItem, setTaskItem] = useState<EarnTaskItem | null>(null);
  const [startTask] = useStartTaskMutation();
  const [claimTaskRequest] = useClaimTaskMutation();
  const {data, isLoading, error, refetch, isFetching} = useGetEarnTaskQuery({
    page: 1,
    limit: 50,
  });
  console.log("🔥 data:", data);
  console.log("❌ error:", error);
  const handlePress = (tab: string) => {
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedTab(tab);
  };
  const taskData = useMemo(() => {
    if (data) {
      if (selectedTab === "Daily") {
        return data?.data?.items.filter(o => o.frequency === "daily");
      } else {
        return data?.data?.items.filter(o => o.frequency === "permanent");
      }
    }
  }, [data, selectedTab]);
  const countDailyBage = useMemo(() => {
    return data?.data?.items.filter(
      o => o.frequency === "daily" && o.status === "open",
    ).length;
  }, [data]);
  const countEventBage = useMemo(() => {
    if (data) {
      return data?.data?.items.filter(
        o => o.frequency === "permanent" && o.status === "open",
      ).length;
    }
  }, [data]);
  const renderItem = ({item, index}: {item: EarnTaskItem; index: number}) => {
    const handlePress = () => {
      setTaskItem(item);
      setVisible(true);
    };

    const renderRight = () => {
      switch (item.status) {
        case TaskStatus.PENDING:
          return (
            <Pressable style={styles.reward} onPress={handlePress}>
              <Text style={styles.pending}>Pending</Text>
            </Pressable>
          );

        case TaskStatus.CLAIM:
          return (
            <View style={{overflow: "hidden", borderRadius: 16}}>
              <LinearGradient
                colors={["#9CFF8F", "#92FDB9", "#83FEE4"]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <Pressable style={styles.claimButton} onPress={handlePress}>
                  <Text style={styles.claimText}>Claim</Text>
                </Pressable>
              </LinearGradient>
            </View>
          );

        case TaskStatus.OPEN:
          return (
            <Pressable style={styles.reward} onPress={handlePress}>
              <FastImage source={Images.coin} style={{width: 24, height: 24}} />
              <Text style={styles.rewardText}>{" +" + item.pointsReward}</Text>
            </Pressable>
          );

        case TaskStatus.COMPLETED:
          return (
            <Pressable style={styles.reward} onPress={handlePress}>
              <Text style={styles.rewardText}>{item.status}</Text>
            </Pressable>
          );

        default:
          return null;
      }
    };

    const renderTaskIcon = (iconName: string) => {
      const commonSize = {width: 38, height: 38};

      if (
        [
          SocialType.YouTubeWatch,
          SocialType.YoutubeLike,
          SocialType.YoutubeComment,
        ].includes(iconName as SocialType)
      ) {
        return <Logo_Ytb_Watch {...commonSize} />;
      }

      if (
        [
          SocialType.InstagramFollow,
          SocialType.InstagramComment,
          SocialType.InstagramLike,
        ].includes(iconName as SocialType)
      ) {
        return <Logo_Instagram />;
      }

      if (
        [
          SocialType.XComment,
          SocialType.XLike,
          SocialType.XFollow,
          SocialType.XShare,
        ].includes(iconName as SocialType)
      ) {
        return <Logo_X {...commonSize} />;
      }

      if (
        [
          SocialType.TikTokWatch,
          SocialType.TikTokComment,
          SocialType.TikTokLike,
        ].includes(iconName as SocialType)
      ) {
        return <Logo_Tiktok {...commonSize} />;
      }

      if (
        [
          ReferralType.Invite_5,
          ReferralType.Invite_10,
          ReferralType.Invite_20,
        ].includes(iconName as ReferralType)
      ) {
        return <Logo_Site {...commonSize} />;
      }

      if (iconName === SocialType.TelegramJoin) {
        return <Logo_Telegram />;
      }

      return null;
    };

    const isFirst = index === 0;
    const isLast = taskData && index === taskData.length - 1;

    return (
      <View
        style={[
          styles.itemContainer,
          {
            borderTopLeftRadius: isFirst ? 12 : 0,
            borderTopRightRadius: isFirst ? 12 : 0,
            borderBottomLeftRadius: isLast ? 12 : 0,
            borderBottomRightRadius: isLast ? 12 : 0,
            marginBottom: isLast ? 12 : 0,
            borderBottomWidth: 1,
            borderBottomColor: "#24E6F399",
          },
        ]}>
        <View style={{marginRight: 10}}>
          {renderTaskIcon(
            (item.task?.socialTaskType ||
              item.task?.referralTaskType) as string,
          )}
        </View>
        <Text style={styles.title}>{item.title}</Text>
        {renderRight()}
      </View>
    );
  };

  return (
    <View className="flex-1">
      <FlatList
        data={taskData || []}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={[
          styles.listContainer,
          {paddingBottom: insets.top + 100},
        ]}
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={refetch} />
        }
        ListHeaderComponent={() => (
          <View>
            <View style={{alignItems: "center", marginBottom: 24}}>
              <FastImage
                source={Images.mission_fox}
                style={{width: 320, height: 270}}
                resizeMode="contain"
              />
              <Text className="text-4xl font-bold color-white">
                {"Mission daily"}
              </Text>
              <Text className="text-base color-white">
                {"Complete the missions to earn coins"}
              </Text>
            </View>
            <View style={styles.tabContainer}>
              {TABS.map(tab => {
                const isActive = selectedTab === tab;
                return (
                  <Pressable
                    key={tab}
                    onPress={() => handlePress(tab)}
                    style={[styles.tab, isActive && styles.activeTab]}>
                    <Text
                      style={[
                        styles.tabText,
                        isActive && styles.activeTabText,
                      ]}>
                      {tab}
                    </Text>
                    {tab === "Daily" && (
                      <View style={styles.badge}>
                        <Text style={styles.badgeText}>{countDailyBage}</Text>
                      </View>
                    )}
                    {tab === "Events" && (
                      <View style={styles.badge}>
                        <Text style={styles.badgeText}>{countEventBage}</Text>
                      </View>
                    )}
                  </Pressable>
                );
              })}
            </View>
          </View>
        )}
      />
      <PopupModal
        visible={visible}
        onClose={() => setVisible(false)}
        title={taskItem?.title ?? ""}
        description={taskItem?.description ?? ""}
        pointsReward={String(taskItem?.pointsReward) ?? ""}
        icon={Images.coin}
        actionText={taskItem?.status as string}
        status={taskItem?.status as TaskStatus}
        onActionPress={async () => {
          if (!taskItem?.id) return;

          const {id, status, task} = taskItem;

          switch (status) {
            case TaskStatus.OPEN:
              await startTask({userTaskId: id});
              Linking.openURL(task.actionUrl);
              break;
            case TaskStatus.PENDING:
            case TaskStatus.COMPLETED:
              Linking.openURL(task.actionUrl);
              break;
            case TaskStatus.CLAIM:
              await claimTaskRequest({userTaskId: id});
              break;
            default:
              Linking.openURL(task.actionUrl);
              break;
          }

          setVisible(false);
        }}
      />
    </View>
  );
};

export default MissionScreen;
