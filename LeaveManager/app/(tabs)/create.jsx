import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import TextInputComponent from "../../components/textInput";
import { icons } from "../../constants";
import ButtonComponent from "../../components/button";
import { router } from "expo-router";
import { useLocalStorage } from "../../hooks/context";
import Header from "../../components/header";
import TimePicker from "../../components/timepicker";
import TimeInput from "../../components/timeInput";
import { createID, storeData } from "../../lib/functions";
const Create = () => {
  const { setEventData } = useLocalStorage();

  const [motif, setMotif] = useState("");
  const [poste, setPoste] = useState("");
  const [nom, setNom] = useState("");
  const [isStartVisible, setStartIsVisible] = useState(false);
  const [isEndVisible, setEndIsVisible] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  return (
    <View className="bg-white">
      <Header />

      <SafeAreaView className="h-[100vh] w-full flex items-center">
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
          <View className="flex flex-row w-[90%] justify-between">
            <TouchableOpacity
              className="w-[48%]"
              activeOpacity={0.7}
              onPress={() => {
                setStartIsVisible(true);
              }}
            >
              <TimeInput
                placeholder={"Début"}
                icon={icons.calendar}
                date={startDate}
              />
            </TouchableOpacity>
            <TouchableOpacity
              className="w-[48%]"
              activeOpacity={0.7}
              onPress={() => {
                setEndIsVisible(true);
              }}
            >
              <TimeInput
                placeholder={"Fin"}
                icon={icons.calendar}
                date={endDate}
              />
            </TouchableOpacity>
          </View>

          <View
            className="w-full flex justify-center items-center"
            activeOpacity={0.7}
          >
            {/*<TextInputComponent
              value={description}
              setValue={setDescription}
              placeholder="Description"
            />*/}
          </View>
          <View className="w-[90%]">
            <ButtonComponent
              value="Ajouter"
              action={() => {
                if (new Date(endDate).getTime() <= new Date(startDate)) {
                  Alert.alert("Veuillez choisir des dates valides.", "");
                } else if (motif && poste && nom && startDate && endDate) {
                  storeData(
                    {
                      poste: poste,
                      nom: nom,
                      motif: motif,
                      startDate: startDate,
                      endDate: endDate,
                      description: description,
                      id: createID(),
                    },
                    setEventData
                  ).then(() => {
                    setNom("");
                    setPoste("");
                    setMotif("");
                    router.replace("(tabs)/home");
                  });
                } else {
                  Alert.alert("Tous les champs sont obligatoires", "");
                }
              }}
            />
          </View>
        </View>
        <View className="absolute top-20 left-[2%] w-[96%] z-50">
          <TimePicker
            isVisible={isStartVisible}
            setIsVisible={setStartIsVisible}
            setDate={setStartDate}
          />

          <TimePicker
            isVisible={isEndVisible}
            setIsVisible={setEndIsVisible}
            setDate={setEndDate}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({});
