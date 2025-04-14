import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FriendScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Missions Screen</Text>
    </View>
  );
};

export default FriendScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
