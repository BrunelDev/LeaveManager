import { Tabs } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Plus, History, Home } from "lucide-react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const TabBaricon = ({ icon, title, color }) => {
    return (
      <View className="mt-[10px] flex justify-center items-center">
        {icon}
        <Text style={{ color: color }}>{title}</Text>
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
          height: 84,
        },
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBaricon
              color={color}
              title={"Accueil"}
              icon={<Home size={32} color={color} className="mt-3" />}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          headerShown: false,
          title: "Create",
          tabBarIcon: ({ color, focused }) => (
            <TabBaricon
              color={color}
              title={""}
              icon={
                <View className="bg-[#2051E5] w-full p-1 rounded-full mt-3 scale-[1.1]">
                  <Plus size={45} color="white" className="" />
                </View>
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          headerShown: false,
          title: "Historique",
          tabBarIcon: ({ color, focused }) => (
            <TabBaricon
              color={color}
              title={"Historique"}
              icon={<History size={32} color={color} className="mt-3" />}
            />
          ),
        }}
      />
    </Tabs>
  );
}
