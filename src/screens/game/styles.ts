import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
    borderTopLeftRadius:12,
    borderTopRightRadius:12,
    
  },
  itemContainer: {
    backgroundColor:"rgba(0, 188, 212, 0.8)",
    borderRadius: 12,
    // borderTopLeftRadius:12,
    // borderTopRightRadius:12,
    padding: 10,
    // marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  title: {
    color: "white",
    fontSize: 16,
    flex: 1,
  },
  reward: {
    backgroundColor: "#004a7c",
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
   
  },
  rewardText: {
    color: "#fff",
    fontWeight: "600",
  },
  pending: {
    color: "#ccc",
    fontWeight: "bold",
  },
  claimButton: {
    padding:8,
    paddingHorizontal:28
  },
  claimText: {
    color: "#003b2f",
    fontWeight: "600",
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor:"rgba(0, 188, 212, 0.8)",
    borderRadius: 30,
    padding: 4,
    alignSelf: "center",
    marginVertical: 10,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  activeTab: {
    backgroundColor: "#fff",
  },
  tabText: {
    color: "#fff",
    fontWeight: "500",
  },
  activeTabText: {
    color: "#000",
  },
  badge: {
    position: "absolute",
    top: -4,
    right: 18,
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
