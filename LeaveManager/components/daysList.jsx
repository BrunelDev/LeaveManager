import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import DayCard from "./dayCard";

const DaysList = () => {
  let days = [
    { day: "Lun", date: 27 },
    { day: "Mar", date: 28 },
    { day: "Mer", date: 29 },
    { day: "Jeu", date: 30 },
    { day: "Ven", date: 31 },
    { day: "Sam", date: 1 },
    { day: "Dim", date: 2 },
  ];
  return (
    <FlatList
      className="px-1
       my-3 bg-transparent"
      data={days}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <View>
            <DayCard day={item.day} date={item.date} />
          </View>
        );
      }}
      horizontal
    />
  );
};

export default DaysList;

const styles = StyleSheet.create({});
