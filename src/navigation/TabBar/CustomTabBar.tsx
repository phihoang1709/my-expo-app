import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Game,Mission
  ,Friend,Airdrop,
  Chat
} from '@/assets/index';

const icons = {
  Missions: () => <Mission width={28} height={28} />,
  Games: () => <Game width={28} height={28} />,
  Airdrop: () => <Airdrop width={28} height={28} />,
  Friends: () => <Friend width={28} height={28} />,
  Settings: () => <Chat width={28} height={28} />,
};

export default function CustomTabBar({state, navigation}: BottomTabBarProps) {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const label = route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const IconComponent = icons[route.name as keyof typeof icons];
        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[styles.tabButton, isFocused && styles.activeTab]}>
            
            <View style={{marginBottom: 4}}>
              {IconComponent()}
            </View>
            
            <Text style={[styles.label, isFocused && {color: '#fff'}]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    backgroundColor: '#4cc9f0',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
  },
  tabButton: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 4,
    width: 60,
    borderRadius: 16,
  },
  activeTab: {
    backgroundColor: '#40B5DB',
  },
  label: {
    fontSize: 12,
    color: '#ccc',
  },
});
