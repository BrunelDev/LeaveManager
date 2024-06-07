import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { icons } from "../constants";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { deleteReminder } from "../lib/functions";
import { useLocalStorage } from "../hooks/context";
const NotificationComponent = ({ title, body, id }) => {
  const { setNotifsDatas } = useLocalStorage();

  return (
    <Swipeable
      renderRightActions={() => (
        <View className="bg-black-100 h-16 w-[110%]"></View>
      )}
      onSwipeableOpen={async (direction) => {
        if (direction === "right") {
          await deleteReminder(id, setNotifsDatas);
        }
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        className={` rounded-xl flex flex-row justify-between bg-[#dde0e4ce] border-b  border-gray-300 p-3`}
      >
        <View className="flex flex-row">
          <Image
            source={icons.work}
            resizeMode="contain"
            className="w-[30px] h-[30px] mr-2"
          />

          <View>
            <Text className="text-black-200 font-bold font-pextrabold">
              {title}
            </Text>

            <Text>{body}</Text>
          </View>
        </View>
        <TouchableOpacity className="justify-self-end">
          <SimpleLineIcons name="options-vertical" size={20} color="black" />
        </TouchableOpacity>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default NotificationComponent;

const styles = StyleSheet.create({});
