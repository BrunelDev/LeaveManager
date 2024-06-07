import { Text, View, TextInput, Image } from "react-native";
import React from "react";
import { icons } from "../constants";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";

const TimeInput = ({ setValue, placeholder, icon, date }) => {
  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  const customReplace = (str, searchValue, replaceValue) => {
    let res = str;
    while (str.includes(searchValue)) {
      res = res.replace(searchValue, replaceValue);
    }
    return res;
  };
  return (
    <View className="w-full h-[56px] mb-6 bg-[#E0E0E0] rounded-lg pt-3 px-3 text-black-200">
      <View className="absolute top-3 right-3">
        <FontAwesome6 name="caret-down" size={24} color="black" />
      </View>
      <View className="absolute left-5 top-[10px] z-50 flex flex-row">
        <View className="mr-1">
          <Ionicons name="calendar" size={20} color="#2051E5" />
        </View>
        <Text className="text-gray-600 font-psemibold text-xs">
          {placeholder}
        </Text>
      </View>
      <Text className="absolute bottom-1 left-6 text-gray-700">{date}</Text>
    </View>
  );
};

export default TimeInput;
