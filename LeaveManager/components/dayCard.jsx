import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const DayCard = ({ day, date }) => {
  const isToday = new Date().getDate() === date;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`${
        isToday ? "bg-blue-600 scale-95" : " bg-primary-card text-black"
      } flex justify-center items-center h-16 w-16 rounded-lg mr-2`}
    >
      <Text className={`${isToday ? "text-white" : "text-black-100"} mb-3`}>
        {day}
      </Text>
      <Text className={`${isToday ? "text-white" : "text-black-100"}`}>
        {date}
      </Text>
    </TouchableOpacity>
  );
};

export default DayCard;
