import {Images} from "@/assets";
import React, {useState, useEffect, useCallback} from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Animated,
} from "react-native";
// import FastImage from "react-native-fast-image";
import { Image } from 'expo-image';

Dimensions.get("window");

const COIN_SIZE = 40;
const SPAWN_BOX_SIZE = 400;

interface Coin {
  id: string;
  x: number;
  y: number;
  fade: Animated.Value;
  color: string;
}

const AirdropScreen: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [score, setScore] = useState<number>(0);
  const [floatingScores, setFloatingScores] = useState<
    {
      id: string;
      x: number;
      y: number;
      opacity: Animated.Value;
      scale: Animated.Value;
    }[]
  >([]);
  const startGame = useCallback(() => {
    setScore(0);
    setCoins(Array(3).fill(null).map(generateCoin));
  }, []);

  useEffect(() => {
    startGame();
  }, [startGame]);

  const generateCoin = (): Coin => {
    const randomColor = `hsl(${Math.random() * 360}, 100%, 70%)`;

    const randX = Math.random() * (SPAWN_BOX_SIZE - COIN_SIZE);
    const randY = Math.random() * (SPAWN_BOX_SIZE - COIN_SIZE);

    return {
      id: Math.random().toString(),
      x: randX,
      y: randY,
      fade: new Animated.Value(1),
      color: randomColor,
    };
  };

  const handleCoinTap = (id: string) => {
    const coin = coins.find(c => c.id === id);
    if (!coin) return;

    // Cập nhật score
    setScore(prev => prev + 8);

    // Tạo animated values riêng cho mỗi coin
    const fade = new Animated.Value(1);
    const scale = new Animated.Value(1);
    const newId = Math.random().toString(); // Đảm bảo mỗi animated score có một ID duy nhất

    // Thêm hiệu ứng vào mảng floatingScores
    setFloatingScores(prev => [
      ...prev,
      {id: newId, x: coin.x, y: coin.y, opacity: fade, scale},
    ]);

    // Animation cho hiệu ứng +8: phóng to và mờ dần
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1.5,
        duration: 700,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Sau khi animation xong, xóa hiệu ứng +8 khỏi mảng
      setFloatingScores(prev => prev.filter(score => score.id !== newId));
    });

    // Xóa coin khỏi danh sách sau khi bấm vào
    Animated.timing(coin.fade, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setCoins(prev => {
        const remaining = prev.filter(c => c.id !== id);
        let newCoins: Coin[] = [];

        if (remaining.length <= 2) {
          const randomCount = Math.floor(Math.random() * 3) + 3;
          newCoins = Array(randomCount).fill(null).map(generateCoin);
        }

        return [...remaining, ...newCoins];
      });
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.spawnBox}>
        <View>
          <Image
            source={Images.jfox}
            style={{
              width: 420,
              height: 420,
            }}
          />
        </View>
        {coins.map(coin => (
          <Animated.View
            key={coin.id}
            style={[
              styles.coin,
              {
                top: coin.y,
                left: coin.x,
                opacity: coin.fade,
              },
            ]}>
            <TouchableOpacity onPress={() => handleCoinTap(coin.id)}>
              <Image
                source={Images.coin}
                style={{
                  width: 34,
                  height: 34,
                }}
              />
            </TouchableOpacity>
          </Animated.View>
        ))}
        {floatingScores.map(fs => (
          <Animated.View
            key={fs.id}
            style={{
              position: "absolute",
              top: fs.y,
              left: fs.x,
              opacity: fs.opacity,
              transform: [{scale: fs.scale}],
            }}>
            <Text
              style={{
                color: "yellow",
                fontSize: 20,
                fontWeight: "bold",
                textShadowColor: "#000",
                textShadowOffset: {width: 1, height: 1},
                textShadowRadius: 2,
              }}>
              +8
            </Text>
          </Animated.View>
        ))}
      </View>
      <Text style={styles.score}>Điểm: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  coin: {
    width: COIN_SIZE,
    height: COIN_SIZE,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  coinIcon: {
    fontSize: 26,
  },
  score: {
    position: "absolute",
    top: 40,
    left: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  spawnBox: {
    width: SPAWN_BOX_SIZE,
    height: SPAWN_BOX_SIZE,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AirdropScreen;
