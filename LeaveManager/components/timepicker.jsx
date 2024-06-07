import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Link,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";

const TimePicker = ({ isVisible, setIsVisible, setDate }) => {
  const [selected, setSelected] = useState("");
  LocaleConfig.locales["fr"] = {
    monthNames: [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ],
    monthNames: [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ],
    monthNamesShort: [
      "Janv.",
      "Févr.",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juil.",
      "Août",
      "Sept.",
      "Oct.",
      "Nov.",
      "Déc.",
    ],
    dayNames: [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ],
    dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
    today: "Aujourd'hui",
  };
  LocaleConfig.defaultLocale = "fr";
  return (
    <View
      className={`w-full p-4  ${
        isVisible ? "" : "hidden"
      } bg-blue-50 rounded-2xl h-[100vh]`}
    >
      <View className="flex justify-between flex-row text-blue-700 mb-8 border-b pb-5">
        <TouchableOpacity
          onPress={() => {
            setIsVisible(false);
          }}
        >
          <Text className="text-blue-600 text-lg p-1">Retour</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsVisible(false);
          }}
        >
          <Text className="text-black-100 text-base">Date et heure</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsVisible(false);
          }}
        >
          <Text className="text-blue-600 text-lg p-1">Appliquer</Text>
        </TouchableOpacity>
      </View>

      <Calendar
        className="bg-blue-100 text-black-100 shadow-sm shadow-blue-950"
        onDayPress={(day) => {
          setDate(day.dateString);
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            selectedTextColor: "white",
            disableTouchEvent: true,
            selectedColor: "rgb(37 99 235)",
          },
        }}
      />
    </View>
  );
};

export default TimePicker;
