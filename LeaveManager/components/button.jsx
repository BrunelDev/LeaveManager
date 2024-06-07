import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
const ButtonComponent = ({ value, action }) => {
  return (
    <View className="h-[42px] ">
      <TouchableOpacity
        className="rounded-lg"
        onPress={() => {
          action();
        }}
        activeOpacity={0.9}
      >
        <View
          className="bg-[#2051e5] flex 
    justify-center items-center h-full rounded-lg w-full"
        >
          <Text className="text-center w-full text-white text-base">
            {value}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({});
