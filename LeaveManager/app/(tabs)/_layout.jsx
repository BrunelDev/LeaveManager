import { Tabs } from "expo-router";
import React from "react";
import { View, Text, Platform } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Feather } from "@expo/vector-icons";

export default function TabLayout() {
  let isAndroid = Platform.OS === "android";
  const colorScheme = useColorScheme();
  const TabBarIcon = ({ icon, title, color }) => {
    return (
      <View
        className={`flex justify-center items-center ${
          isAndroid ? "" : "translate-y-2"
        }`}
      >
        {icon}
        {<Text style={{ color: color }}>{title}</Text>}
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#2051E5",
        tabBarInactiveTintColor: "#445668",
        tabBarStyle: {
          //backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#EEF0F3",
          height: isAndroid ? 52 : 80,
        },
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              color={color}
              title={"Accueil"}
              icon={
                <Entypo name="home" size={isAndroid ? 28 : 30} color={color} />
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          title: "Create",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              color={color}
              title={""}
              icon={
                <View
                  className={`bg-[#2051E5] ${
                    isAndroid ? "w-[44px] h-[44px]" : "w-[50px] h-[50px]"
                  }
                 flex justify-center items-center p-1 ${
                   isAndroid ? "translate-y-2" : "translate-y-1"
                 } rounded-full`}
                >
                  <Feather
                    name="plus"
                    size={isAndroid ? 35 : 40}
                    color="white"
                  />
                </View>
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarHideOnKeyboard: true,

          headerShown: false,
          title: "Account",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              color={color}
              title={"Compte"}
              icon={
                <MaterialCommunityIcons
                  name="account"
                  size={isAndroid ? 28 : 30}
                  color={color}
                />
              }
            />
          ),
        }}
      />
    </Tabs>
  );
}
