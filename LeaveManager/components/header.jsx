import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import React from "react";
import "./header.css";
import { icons } from "../constants";
const Header = () => {
  return (
    <View className="fixed  flex justify-center items-center top-0 left-0 w-full gradient z-50 bg-[#2051e5] h-[110px] rounded-br-md rounded-bl-md">
      {/*
      <StatusBar hidden />
*/}
      <View className="pt-12 flex flex-row justify-between w-[90%]">
        <Text className="text-white">CODJIA Bignon</Text>
        <Image source={icons.notificationBell} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
