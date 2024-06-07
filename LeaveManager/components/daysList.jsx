import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import DayCard from "./dayCard";

const DaysList = () => {
  const date = new Date();
  const month = date.getMonth();
  date.setMonth(month + 1, 1);
  date.setDate(date.getDate() - 1);
  const maxDays = date.getDate();
  let daysList = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
  let days = [];
  let monthList = [
    "Déc",
    "Jan",
    "Fév",
    "Mar",
    "Avr",
    "Mai",
    "Juin",
    "Juil",
    "Août",
    "Sep",
    "Oct",
    "Nov",
  ];
  for (let i = 1; i <= maxDays; i++) {
    date.setDate(i);
    days.push({ day: daysList[date.getDay()], date: date.getDate() });
  }

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
