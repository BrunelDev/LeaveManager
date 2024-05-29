import { StyleSheet, Text, View, Button, Platform } from "react-native";
import React from "react";
const ButtonComponent = ({ value, action }) => {
  return (
    <View className="bg-[#2051e5] rounded-lg text-white w-full py-1">
      <Button
        className="rounded-lg"
        color={Platform.OS === "android" ? "#2051e5" : "white"}
        title={value}
        onPress={() => {
          action();
        }}
      />
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({});
