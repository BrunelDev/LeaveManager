import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import TextInputComponent from "../../components/textInput";
import { icons } from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ButtonComponent from "../../components/button";
import { router } from "expo-router";
import { useLocalStorage } from "../../hooks/context";
import Header from "../../components/header";
const Create = () => {
  const { setEventData } = useLocalStorage();
  const storeData = async (data) => {
    try {
      let temp = JSON.parse(await AsyncStorage.getItem("@myapp:list")) || [];
      console.log(temp);
      console.log("data: ", data);
      temp.push(data);
      await AsyncStorage.setItem("@myapp:list", JSON.stringify(temp));
      setEventData(temp);
    } catch (error) {
      console.log("erreur de stockage :", error.message);
    }
  };
  const [motif, setMotif] = useState("");
  const [poste, setPoste] = useState("");
  const [nom, setNom] = useState("");
  const date = new Date();
  return (
    <View className="bg-white">
      <Header />
      <SafeAreaView className="h-[100vh] w-full flex">
        <View className="w-full flex justify-center items-center mt-8">
          <TextInputComponent
            value={motif}
            setValue={setMotif}
            placeholder="Motif"
          />
          <TextInputComponent
            value={poste}
            setValue={setPoste}
            placeholder="Poste"
          />
          <TextInputComponent value={nom} setValue={setNom} placeholder="Nom" />
          <View className="w-[90%]">
            <ButtonComponent
              value="Ajouter"
              action={() => {
                if (motif && poste && nom) {
                  storeData({ poste: poste, nom: nom, motif: motif }).then(
                    () => {
                      setNom("");
                      setPoste("");
                      setMotif("");
                      router.replace("(tabs)/home");
                    }
                  );
                }
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({});
