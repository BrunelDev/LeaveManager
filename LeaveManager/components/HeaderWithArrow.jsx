import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { icons, images } from "../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Sidebar from "./sidebar";

import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const HeaderWithArrow = ({ title, arrowAction }) => {
  const [displaySidebar, setDisplaySidebar] = useState(false);
  return (
    <View className="fixed flex justify-center items-center top-0 left-0 w-full gradient z-50 bg-[#2051e5] h-[110px] rounded-br-xl rounded-bl-xl">
      <Image
        source={images.bubbles}
        resizeMode="cover"
        className="absolute top-[-20px] left-0"
      />

      <View className="pt-12 flex flex-row justify-between w-[90%]">
        <TouchableOpacity
          onPress={() => {
            arrowAction();
          }}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-base font-psemibold">{title}</Text>

        <View>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setDisplaySidebar((v) => !v);
            }}
          >
            <MaterialCommunityIcons name="menu" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      {displaySidebar ? (
        <View className="absolute w-full -bottom-10 left-0-0 ml-auto">
          <Sidebar />
        </View>
      ) : null}
    </View>
  );
};

export default HeaderWithArrow;

const styles = StyleSheet.create({});
