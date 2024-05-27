import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const DayCard = ({ day, date }) => {
  const [focused, setFocused] = useState(false);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`${
        focused ? "bg-blue-700" : " bg-primary-card"
      } flex justify-center items-center h-16 w-16 text-black rounded-lg mr-2`}
    >
      <Text className="text-gray mb-3">{day}</Text>
      <Text>{date}</Text>
    </TouchableOpacity>
  );
};

export default DayCard;
