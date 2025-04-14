import {View, Image, ImageBackground} from 'react-native';
import React from 'react';

const HomeScreen: React.FC = () => {
  const fox = require('@/assets/png/fox.png');
  const bg = require('@/assets/png/bg.png');
  return (
    <ImageBackground source={bg} resizeMode='cover' className="flex-1">
    <View className="flex-1 justify-center items-center">
      <Image source={fox} className="flex-col"/>
    </View>
    </ImageBackground>
  );
};
export default HomeScreen;
