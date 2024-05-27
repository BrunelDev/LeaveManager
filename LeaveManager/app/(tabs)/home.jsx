import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";
import DayCard from "../../components/dayCard";
import React from "react";
import EventCard from "../../components/eventCard";
import DaysList from "../../components/daysList";
import EventList from "../../components/eventList";
import Header from "../../components/header";

const Home = () => {
  let days = [
    { day: "Lun", date: 27 },
    { day: "Mar", date: 28 },
    { day: "Mer", date: 29 },
    { day: "Jeu", date: 30 },
    { day: "Ven", date: 31 },
    { day: "Sam", date: 1 },
    { day: "Dim", date: 2 },
  ];
  const employees = [
    { poste: "Caissier", nom: "TOSSOU Roger", motif: "congés" },
    { poste: "Informaticien", nom: "BADE Pierre", motif: "congés" },
    { poste: "Vigile", nom: "BOSSOU Perin", motif: "congés" },
    { poste: "Banquier", nom: "PLACALI Danialux", motif: "mission" },
    { poste: "Comptable", nom: "OUINSOU Sidney", motif: "mission" },
    { poste: "Caissier", nom: "ADE Bio", motif: "permission" },
    { poste: "Vigile", nom: "ALLE Eric", motif: "-" },
  ];
  const color = ["blue", "red", "yellow"];
  return (
    <View>
      <Header />

      <SafeAreaView className="bg-white h-full">
        <FlatList
          className="h-full mb-[200px]"
          data={employees}
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
