import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { icons } from "../constants";
import CircularProgress from "react-native-circular-progress-indicator";

const EventCard = ({ poste, motif, nom, color }) => {
  console.log(color);
  return (
    <TouchableOpacity className="w-[90%] relative" activeOpacity={0.6}>
      <View
        className={`absolute z-10 top-[50%] -translate-y-[12px] h-[24px] w-[5px] ${
          color === "red"
            ? "bg-red-500"
            : color === "blue"
            ? "bg-blue-500"
            : color === "yellow"
            ? "bg-yellow-500"
            : null
        } rounded-tr-[10px] rounded-br-[10px] `}
      ></View>
      <View className="bg-secondary-card h-100px flex flex-col rounded-xl p-4">
        <View className="flex flex-row justify-between">
          <Text className="mb-4">{poste}</Text>
          <View className="absolute right-0">
            <CircularProgress
              value={90}
              radius={26}
              valueSuffix="%"
              activeStrokeColor={"#2051E5"}
              inActiveStrokeColor={"#EEF2FF"}
              activeStrokeWidth={9}
              inActiveStrokeOpacity={0.2}
            />
          </View>
        </View>
        <Text className="mb-4 font-psemibold text-gray">Motif - {motif}</Text>
        <View className="flex flex-col ml-3">
          <View className="flex flex-row">
            <View>
              <Text className="mr-[85px] mb-2">Nom :</Text>
              <Text>{nom}</Text>
            </View>

            <View className="flex flex-col">
              <Text className="text-gray mb-2">Date de fin</Text>
              <View className="flex flex-row">
                <Image
                  source={icons.calendar}
                  resizeMethod="contain"
                  className="mr-1 w-[20px]"
                />
                <Text>12 Juin 2024</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
