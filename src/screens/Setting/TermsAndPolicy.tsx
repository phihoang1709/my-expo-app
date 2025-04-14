import React, {useState} from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
// Adjust path as needed
import {Terms} from "@/assets";

const TermsAndPolicyScreen = () => {
  const [activeTab, setActiveTab] = useState("terms");

  const handleLinkPress = async (url: string) => {
    await Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Terms width={80} height={120} />
        <Text style={styles.title}>Terms & Policy</Text>
        {/* Tabs */}
        <View style={styles.tabList}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "terms" && styles.activeTab]}
            onPress={() => setActiveTab("terms")}
            accessibilityLabel="Terms of Use">
            <Text
              style={[
                styles.tabText,
                activeTab === "terms" && styles.activeTabText,
              ]}>
              Terms of Use
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === "privacy" && styles.activeTab]}
            onPress={() => setActiveTab("privacy")}
            accessibilityLabel="Privacy Policy">
            <Text
              style={[
                styles.tabText,
                activeTab === "privacy" && styles.activeTabText,
              ]}>
              Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tab Content */}
        {activeTab === "terms" ? (
          <View style={styles.tabContent}>
            <Text style={styles.sectionTitle}>Jfox Terms of Use</Text>
            <Text style={styles.paragraph}>
              <Text style={styles.bold}>Welcome to Jfox (the “Platform”).</Text>{" "}
              By using the Platform, you agree to these Terms of Use (“Terms”).
              If you do not agree, please do not use the Platform and the
              Service.
            </Text>
            <Text style={styles.paragraph}>
              This end user Terms should be read by you (the "User" or "you") in
              its entirety prior to your use of the Platform services or
              products. Be aware that this Terms constitutes a legally binding
              Terms between you and Jfox which operates the Jfox Platform at{" "}
              <Text
                style={styles.link}
                onPress={() => handleLinkPress("https://juniperfox.ai")}>
                https://juniperfox.ai
              </Text>
              .
            </Text>
            <Text style={styles.paragraph}>
              Jfox offers access to a Telegram Mini App (“Service”, “Jfox
              Platform”, “Jfox”, "us" or "we") available at{" "}
              <Text
                style={styles.link}
                onPress={() => handleLinkPress("https://t.me/JFOXCommunity")}>
                https://t.me/JFOXCommunity
              </Text>{" "}
              (the "Service").
            </Text>

            <Text style={styles.subTitle}>Risk Warning</Text>
            <Text style={styles.paragraph}>
              The value of Digital Assets can fluctuate significantly and there
              is a material risk of economic loss when earning, holding, or
              redeeming Digital Assets through activities on the Jfox
              Platform...
            </Text>
            {/* Add more sections as needed, following the same pattern */}
            <Text style={styles.footer}>
              Last updated: March 27, 2025{"\n"}
              For inquiries, contact us at{" "}
              <Text
                style={styles.link}
                onPress={() => handleLinkPress("mailto:ollama@juniperfox.ai")}>
                ollama@juniperfox.ai
              </Text>
            </Text>
          </View>
        ) : (
          <View style={styles.tabContent}>
            <Text style={styles.sectionTitle}>Jfox Privacy Policy</Text>
            <Text style={styles.subTitle}>1. Key Concepts</Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>
                • <Text style={styles.bold}>Application (or Service):</Text> A
                software service published by the Developer on the platform...
              </Text>
              <Text style={styles.listItem}>
                • <Text style={styles.bold}>Developer:</Text> Jfox,
                independently or jointly with other persons...
              </Text>
              {/* Add more list items as needed */}
            </View>
            <Text style={styles.subTitle}>2. General Provisions</Text>
            <Text style={styles.paragraph}>
              2.1. This Policy is an official document of the Developer and
              defines the procedure for processing and protecting information
              about individuals using the Application...
            </Text>
            {/* Add more sections as needed */}
            <Text style={styles.footer}>
              Last updated: March 27, 2025{"\n"}
              For inquiries, contact us at{" "}
              <Text
                style={styles.link}
                onPress={() => handleLinkPress("mailto:ollama@juniperfox.ai")}>
                ollama@juniperfox.ai
              </Text>
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 20,
  },
  contentContainer: {
    marginTop: 16,
    padding: 20,
    borderWidth: 2,
    borderColor: "#47C3E6",
    borderRadius: 8,
    backgroundColor: "#1594B8", // Simplified gradient (use linear-gradient library for true gradients)
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 120,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
    marginVertical: 12,
  },
  tabList: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#05A2C6CC",
    borderWidth: 2,
    borderColor: "#24E6F399",
    borderRadius: 999,
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 999,
  },
  activeTab: {
    backgroundColor: "#fff",
  },
  tabText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  activeTabText: {
    fontSize: 16,
    color: "black",
    fontWeight: "600",
  },
  tabContent: {
    width: "100%",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginBottom: 16,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginVertical: 12,
  },
  paragraph: {
    fontSize: 16,
    color: "#fff",
    textAlign: "justify",
    marginBottom: 12,
  },
  bold: {
    fontWeight: "700",
  },
  link: {
    color: "#fff",
    textDecorationLine: "underline",
  },
  list: {
    marginBottom: 12,
  },
  listItem: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 8,
  },
  footer: {
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
    marginTop: 24,
  },
});

export default TermsAndPolicyScreen;
