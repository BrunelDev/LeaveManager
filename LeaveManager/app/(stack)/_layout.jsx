import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const NotificationLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="notifications"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default NotificationLayout;

const styles = StyleSheet.create({});
