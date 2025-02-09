import React, { useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {StyleSheet, Platform } from 'react-native';
import { Card, Button } from "react-native-paper";
import {TabTransition} from "@/components/rankingAnimation";

export default function TabTwoScreen() {
  const rankingDataToday = [
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
  
  const rankingDataWeek = [
    {
      id: 1,
      username: "CarlosLopez",
      avatar: "https://i.pravatar.cc/150?img=3",
      timeSpent: "15 h 30 min",
      minutes: 930,
    },
    {
      id: 2,
      username: "MariaGomez",
      avatar: "https://i.pravatar.cc/150?img=2",
      timeSpent: "20 h 10 min",
      minutes: 1210,
    },
    {
      id: 3,
      username: "JuanPerez",
      avatar: "https://i.pravatar.cc/150?img=1",
      timeSpent: "25 h 45 min",
      minutes: 80
    },
  ];
  
  const rankingDataMonth = [
    {
      id: 1,
      username: "CarlosLopez",
      avatar: "https://i.pravatar.cc/150?img=3",
      timeSpent: "60 h 30 min",
      minutes: 3630,
    },
    {
      id: 2,
      username: "MariaGomez",
      avatar: "https://i.pravatar.cc/150?img=2",
      timeSpent: "75 h 15 min",
      minutes: 4515,
    },
    {
      id: 3,
      username: "JuanPerez",
      avatar: "https://i.pravatar.cc/150?img=1",
      timeSpent: "90 h 50 min",
      minutes: 5450,
    },
  ];
  
  const sortedRankingToday = [...rankingDataToday].sort((a, b) => a.minutes - b.minutes);
  const sortedRankingWeek = [...rankingDataWeek].sort((a, b) => a.minutes - b.minutes);
  const sortedRankingMonth = [...rankingDataMonth].sort((a, b) => a.minutes - b.minutes);
  const [selectedTab, setSelectedTab] = useState("Today");

    const getRankingData = () => {
      switch (selectedTab) {
        case "Last Week":
          return sortedRankingWeek;
        case "Last Month":
          return sortedRankingMonth;
        default:
          return sortedRankingToday;
      }
    };

    const getCardStyle = (index) => {
      if (index === 0) {
        return styles.goldCard;
      } else if (index === 1) {
        return styles.silverCard;
      } else if (index === 2) {
        return styles.bronzeCard;
      } else {
        return styles.card;
      }
    };
  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <Button mode={selectedTab === "Today" ? "contained" : "outlined"} onPress={() => setSelectedTab("Today")}>
          Today
        </Button>
        <Button mode={selectedTab === "Last Week" ? "contained" : "outlined"} onPress={() => setSelectedTab("Last Week")}>
          Last Week
        </Button>
        <Button mode={selectedTab === "Last Month" ? "contained" : "outlined"} onPress={() => setSelectedTab("Last Month")}>
          Last Month
        </Button>
      </View>
      <TabTransition selectedTab={selectedTab}>
        <FlatList
          data={getRankingData()}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <Card style={[styles.card, getCardStyle(index)]}>
              <View style={styles.row}>
                <Text style={styles.position}>{index + 1}</Text>
                <Image source={{ uri: item.avatar }} style={styles.avatar} />
                <Text style={styles.username}>{item.username}</Text>
                <Text style={styles.timeSpent}>{item.timeSpent}</Text>
              </View>
            </Card>
          )}
        />
      </TabTransition>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f4f4f4",
  },
  card: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  position: {
    fontSize: 18,
    fontWeight: "bold",
    width: 30,
    textAlign: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  username: {
    flex: 1,
    fontSize: 16,
  },
  timeSpent: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  goldCard: {
    backgroundColor: '#FFD700', // Oro
  },
  silverCard: {
    backgroundColor: '#C0C0C0', // Plata
  },
  bronzeCard: {
    backgroundColor: '#CD7F32', // Bronce
  },
});