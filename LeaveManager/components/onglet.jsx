import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const FilterButton = ({ title, handlePress, setIsSelected, isSelected }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        setIsSelected();
        handlePress();
      }}
      className={`${
        isSelected ? "bg-[#2051e5]" : "bg-secondary-card"
      } px-4 py-2 rounded-md`}
    >
      <Text className={`${isSelected ? "text-white" : "text-black-200"}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default FilterButton;
