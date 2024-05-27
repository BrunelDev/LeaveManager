import EventCard from "./eventCard";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import React from "react";

const EventList = () => {
  const employees = [
    { poste: "Caissier", nom: "TOSSOU Roger", motif: "congés" },
    { poste: "Caissier", nom: "TOSSOU Roger", motif: "congés" },
    { poste: "Caissier", nom: "TOSSOU Roger", motif: "congés" },
    { poste: "Caissier", nom: "TOSSOU Roger", motif: "congés" },
    { poste: "Caissier", nom: "TOSSOU Roger", motif: "congés" },
    { poste: "Caissier", nom: "TOSSOU Roger", motif: "congés" },
    { poste: "Caissier", nom: "TOSSOU Roger", motif: "congés" },
  ];
  return (
    <SafeAreaView className="w-full">
      <FlatList
        className="mx-3"
        data={employees}
        keyExtractor={(item) => {
          item.nom;
        }}
        renderItem={({ item }) => {
          return (
            <View className="my-3 w-full flex justify-center items-center">
              <EventCard poste={item.poste} motif={item.motif} nom={item.nom} />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default EventList;
