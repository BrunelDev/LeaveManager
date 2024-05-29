import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const FilterButton = ({ title, action, setIsSelected, isSelected }) => {
  return (
    <View
      onTouchStart={() => {
        setIsSelected();
      }}
      className={`${
        isSelected ? "bg-[#2051e5]" : "bg-secondary-card"
      } px-4 py-2 rounded-md`}
    >
      <Text className={`${isSelected ? "text-white" : "text-black-200"}`}>
        {title}
      </Text>
    </View>
  );
};

export default FilterButton;
