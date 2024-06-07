import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import NotificationComponent from "../../components/notificationComponent";
import HeaderWithArrow from "../../components/HeaderWithArrow";
import { router } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { addReminder, createID } from "../../lib/functions";
import { useLocalStorage } from "../../hooks/context";

const Notifications = () => {
  const [notifs, setNotifs] = useState();
  const { notifsDatas, setNotifsDatas } = useLocalStorage();

  useEffect(() => {
    setNotifs(notifsDatas);
  }, [notifsDatas]);

  return (
    <GestureHandlerRootView>
      <HeaderWithArrow
        title="Notifications"
        arrowAction={() => {
          router.back();
        }}
      />

      <SafeAreaView className="w-full flex h-[100vh]  justify-center items-center">
        <FlatList
          className={`w-full mt-1 mx-[2%] mb-[100px]`}
          data={notifs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <NotificationComponent
              title={item.title}
              body={item.body}
              id={item.id}
            />
          )}
          ItemSeparatorComponent={() => {
            <View className="h-4"></View>;
          }}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
