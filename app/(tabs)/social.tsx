import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {StyleSheet, Platform } from 'react-native';

export default function TabTwoScreen() {
  const rankingData = [
    {
      id: 1,
      username: "CarlosLopez",
      avatar: "https://i.pravatar.cc/150?img=3",
      timeSpent: "3 h 45 min",
      minutes: 225,
    },
    {
      id: 2,
      username: "MariaGomez",
      avatar: "https://i.pravatar.cc/150?img=2",
      timeSpent: "4 h 15 min",
      minutes: 255,
    },
    {
      id: 3,
      username: "JuanPerez",
      avatar: "https://i.pravatar.cc/150?img=1",
      timeSpent: "5 h 30 min",
      minutes: 330,
    },
  ];
  return (
    <SafeAreaView className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold text-center mb-4">Ranking de Amigos</Text>
      <FlatList
        data={rankingData.sort((a, b) => a.minutes - b.minutes)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View className="flex-row items-center bg-white p-4 rounded-2xl shadow-md mb-3">
            <Text className="text-lg font-bold text-gray-700 w-8">{index + 1}</Text>
            <Image source={{ uri: item.avatar }} className="w-12 h-12 rounded-full mr-4" />
            <Text className="flex-1 text-lg font-semibold text-gray-900">{item.username}</Text>
            <Text className="text-lg font-medium text-gray-600">{item.timeSpent}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
