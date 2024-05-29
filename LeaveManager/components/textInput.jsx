import { Text, View, TextInput, Image } from "react-native";
import React from "react";

const TextInputComponent = ({
  value,
  setValue,
  maxChar,
  placeholder,
  icon,
}) => {
  return (
    <View className="w-[90%] h-[70px] mb-6">
      <View className="absolute left-5 top-[10px] z-50 flex flex-row">
        <Image source={icon} resizeMode="contain" className="mr-1" />
        <Text className="text-gray-600 font-psemibold text-xs">
          {placeholder}
        </Text>
      </View>

      <TextInput
        className="bg-[#E0E0E0] w-full text-black-200 h-full rounded-lg pt-3 px-3"
        maxLength={maxChar ? maxChar : undefined}
        value={value}
        onChangeText={(e) => {
          setValue(e);
        }}
      />
    </View>
  );
};

export default TextInputComponent;
