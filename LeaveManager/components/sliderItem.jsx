import { Text, View, Image, useWindowDimensions } from "react-native";
import React from "react";
import ButtonComponent from "./button";
import { router } from "expo-router";
import { images } from "../constants";

const SliderItem = ({ image, text, isFinal }) => {
  const { width } = useWindowDimensions();
  return (
    <View className="flex justify-center items-center" style={{ width }}>
      <Image source={image} resizeMode="contain" className="w-full" />
      <View className="w-[90%] absolute bottom-[70px] bg-secondary-card rounded-lg p-3">
        <Text className="text-center w-full text-black-100 font-pmedium">
          {text}
        </Text>
      </View>

      {isFinal ? (
        <View className="absolute bottom-0 left-[5%] w-[90%]">
          <ButtonComponent
            value={"Commencer"}
            action={() => {
              router.replace("home");
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default SliderItem;
