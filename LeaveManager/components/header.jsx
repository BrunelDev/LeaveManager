import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import React from "react";
import "./header.css";
import { icons, images } from "../constants";
import { Menu, BellDotIcon, Bell, MenuSquareIcon } from "lucide-react-native";

const Header = () => {
  return (
    <View className="fixed  flex justify-center items-center top-0 left-0 w-full gradient z-50 bg-[#2051e5] h-[110px] rounded-br-xl rounded-bl-xl">
      <Image
        source={images.bubbles}
        resizeMode="cover"
        className="absolute top-[-20px] left-0"
      />
      <View className="pt-12 flex flex-row justify-between w-[90%]">
        <Text className="text-white">CODJIA Bignon</Text>
        <View className="flex flex-row">
          <Bell color={"white"} />
          <Menu color={"white"} className="ml-1" />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
