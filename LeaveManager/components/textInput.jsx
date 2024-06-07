import { Text, View, TextInput, ScrollView } from "react-native";
import React from "react";

const TextInputComponent = ({
  value,
  setValue,
  maxChar,
  placeholder,
  icon,
  taille,
}) => {
  return (
    <View className={`w-[90%] mb-6 h-auto`}>
      <View className="absolute left-5 top-[10px] z-50 flex flex-row">
        {icon ? icon : null}
        <Text className="text-gray-600 font-psemibold text-xs">
          {placeholder}
        </Text>
      </View>

      <TextInput
        keyboardAppearance="dark"
        className={`bg-[#d8dede] text-black-200 rounded-lg pt-3 px-3`}
        style={{ height: taille ? taille : 60 }}
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
