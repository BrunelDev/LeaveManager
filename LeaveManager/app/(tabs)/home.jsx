import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";
import DayCard from "../../components/dayCard";
import React, { useEffect, useState } from "react";
import EventCard from "../../components/eventCard";
import DaysList from "../../components/daysList";
import EventList from "../../components/eventList";
import Header from "../../components/header";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalStorage } from "../../hooks/context";
import FilterButton from "../../components/onglet";

// First, set the handler that will cause the notification
// to show the alert

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

// Second, call the method

Notifications.scheduleNotificationAsync({
  content: {
    title: "Nouvelle notification",
    body: "Bientot en congés",
  },
  trigger: { seconds: 5 },
});

const Home = () => {
  const { eventsDatas } = useLocalStorage();

  const color = ["blue", "red", "yellow"];
  const [employeesDatas, setEmployeesDatas] = useState([
    { poste: "Caissier", nom: "TOSSOU Roger", motif: "congés" },
  ]);
  const getDatas = async () => {
    let data = await AsyncStorage.getItem("@myapp:list");
    console.log(data);
    if (!data) {
      return;
    } else {
      data = JSON.parse(data);
      console.log(data);
      return data;
    }
  };
  const [tempData, setTempData] = useState(employeesDatas);
  useEffect(() => {
    getDatas().then((res) => {
      setEmployeesDatas(res);
      console.log(eventsDatas);
    });
  }, [eventsDatas]);
  const [filterAll, setFilterAll] = useState(false);
  const [filterOngoing, setFilterOngoing] = useState(false);
  const [filterComing, setFilterComing] = useState(false);
  return (
    <View>
      <Header />

      <SafeAreaView className="bg-white h-full">
        <FlatList
          className="h-full mb-[230px]"
          data={employeesDatas}
          keyExtractor={(item) => {
            item.nom;
          }}
          renderItem={({ item, index }) => {
            return (
              <View className="my-3 w-full flex justify-center items-center">
                <EventCard
                  poste={item.poste}
                  motif={item.motif}
                  nom={item.nom}
                  color={color[index % 3]}
                />
              </View>
            );
          }}
          ListHeaderComponent={() => {
            return (
              <View className="">
                <DaysList />
                <View className="flex flex-row justify-between mx-[5%]">
                  <FilterButton
                    title={"Tout"}
                    setIsSelected={() => {
                      if (filterOngoing) {
                        setFilterOngoing(false);
                      }
                      if (filterComing) {
                        setFilterComing(false);
                      }
                      setFilterAll((v) => !v);
                    }}
                    isSelected={filterAll}
                  />
                  <FilterButton
                    title={"En cours"}
                    setIsSelected={() => {
                      if (filterAll) {
                        setFilterAll(false);
                      }
                      if (filterComing) {
                        setFilterComing(false);
                      }
                      setFilterOngoing((v) => !v);
                    }}
                    isSelected={filterOngoing}
                  />
                  <FilterButton
                    title={"A venir"}
                    setIsSelected={() => {
                      if (filterAll) {
                        setFilterAll(false);
                      }
                      if (filterOngoing) {
                        setFilterOngoing(false);
                      }
                      setFilterComing((v) => !v);
                    }}
                    isSelected={filterComing}
                  />
                </View>
              </View>
            );
          }}
        />
        {/*
      <View className="w-full">
        <DaysList />
      </View>
      */}
      </SafeAreaView>
    </View>
  );
};
export default Home;
