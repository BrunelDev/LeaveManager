import { Tabs } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Plus, History, Home } from "lucide-react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const TabBaricon = ({ icon, title }) => {
    return (
      <View className="mt-[10px] flex justify-center items-center">
        {icon}
        <Text>{title}</Text>
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
              title={"Accueil"}
              icon={<Home size={36} color={color} />}
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
              title={"Ajouter"}
              icon={
                <View className="bg-[#2051E5] w-full p-1 rounded-full">
                  <Plus size={36} color="white" />
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
              title={"Historique"}
              icon={<History size={36} color={color} />}
            />
          ),
        }}
      />
    </Tabs>
  );
}
