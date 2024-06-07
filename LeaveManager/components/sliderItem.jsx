import { Text, View, Image, useWindowDimensions } from "react-native";
import React from "react";
import ButtonComponent from "./button";
import { router } from "expo-router";
import { images } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SliderItem = ({ image, text, isFinal }) => {
  const { width } = useWindowDimensions();
  return (
    <View
      className="flex justify-center items-center h-[65vh]"
      style={{ width }}
    >
      <Image source={image} resizeMode="contain" className="w-full" />
      <View className="w-[90%] absolute bottom-[10px] bg-secondary-card rounded-lg p-3">
        <Text className="text-center w-full text-black-100 font-pmedium">
          {text}
        </Text>
      </View>
    </View>
  );
};

export default SliderItem;
