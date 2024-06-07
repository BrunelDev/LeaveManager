import { Text, View, TouchableOpacity } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { useEventSelection } from "../hooks/context";
import { deleteEvent } from "../lib/functions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalStorage } from "../hooks/context";

const EventCard = ({ poste, motif, nom, color, startDate, endDate, id }) => {
  const getPercentage = (startDate, endDate) => {
    if (!startDate || !endDate) {
      return 0;
    }
    const start = new Date(startDate);
    const end = new Date(endDate);

    return ((new Date().getTime() - start.getTime()) * 100) /
      (end.getTime() - start.getTime()) <
      0
      ? 0
      : ((new Date().getTime() - start.getTime()) * 100) /
          (end.getTime() - start.getTime());
  };
  const formatDate = (date) => {
    data = new Date(date).toDateString;

    date = date.split(" ").reverse();
    date.pop();
    date = date.reverse();

    switch (date[0]) {
      case "Jan":
        date[0] = "Janvier";
        break;
      case "Feb":
        date[0] = "Février";
        break;
      case "Mar":
        date[0] = "Mars";
        break;
      case "Apr":
        date[0] = "Avril";
        break;
      case "May":
        date[0] = "Mai";
        break;
      case "Jun":
        date[0] = "Juin";
        break;
      case "Jul":
        date[0] = "Juillet";
        break;
      case "Aug":
        date[0] = "Août";
        break;
      case "Sep":
        date[0] = "Septembre";
        break;
      case "Oct":
        date[0] = "Octobre";
        break;
      case "Nov":
        date[0] = "Novembre";
        break;
      case "Dec":
        date[0] = "Decembre";
        break;
    }
    const res = date[1] + " " + date[0] + " " + date[2];

    return res;
  };

  const [isSelected, setIsSelected] = useState(false);
  const { setEventData } = useLocalStorage();
  const { inSelection, setInSelection, setSelectionList, selectionList } =
    useEventSelection();
  useEffect(() => {
    if (!inSelection) {
      setIsSelected(false);
    }
  }, [inSelection]);

  return (
    <TouchableOpacity
      className="w-[90%]  relative shadow-md"
      activeOpacity={0.7}
      onLongPress={() => {
        setInSelection(true);
        // deleteEvent(id, setEventData);
        AsyncStorage.getItem("@myapp:list").then((res) => {});
      }}
      onPress={() => {
        if (inSelection) {
          if (isSelected) {
            let temp = [];
            selectionList.slice().map((item) => {
              if (item !== id) {
                temp.push(item);
              }
            });
            setSelectionList(temp);
            setIsSelected(false);
            return;
          } else {
            let temp = selectionList.slice();
            temp.push(id);
            setSelectionList(temp);
            setIsSelected(true);
            return;
          }
        }
      }}
    >
      {inSelection ? (
        <View
          onPress={() => {
            setIsSelected((v) => !v);
          }}
          className={`absolute z-50 top-[50%] 
          translate-y-[-7px] left-[-5%] border-[2px] rounded-full h-[13px] w-[13px] ${
            isSelected && inSelection ? "bg-blue-500" : ""
          }`}
        ></View>
      ) : null}

      <View
        className={`absolute z-10 top-[50%] -translate-y-[12px] h-[24px] w-[5px] ${
          color === "red"
            ? "bg-red-500"
            : color === "blue"
            ? "bg-blue-500"
            : color === "orange"
            ? "bg-yellow-500"
            : null
        } rounded-tr-[10px] rounded-br-[10px] `}
      ></View>
      <View className="bg-secondary-card h-100px flex flex-col rounded-xl p-4">
        <View className="flex flex-row justify-between">
          <Text className="mb-4">{poste}</Text>
          <View className="absolute right-0">
            <CircularProgress
              value={getPercentage(startDate, endDate)}
              radius={26}
              valueSuffix="%"
              activeStrokeColor={"#2051E5"}
              inActiveStrokeColor={"#EEF2FF"}
              activeStrokeWidth={9}
              inActiveStrokeOpacity={0.2}
            />
          </View>
        </View>
        <Text className="mb-4 font-psemibold text-gray">Motif - {motif}</Text>
        <View className="flex flex-col ml-3">
          <View className="flex flex-row">
            <View>
              <Text className="mr-[85px] mb-2">Nom :</Text>
              <Text className="w-[120px]">{nom}</Text>
            </View>

            <View className="flex flex-col">
              <Text className="text-gray mb-2">Date de fin</Text>
              <View className="flex flex-row">
                <View className="mr-1 w-[20px]">
                  <Ionicons
                    name="calendar"
                    size={20}
                    color={color === "orange" ? "rgb(234 179 8)" : color}
                  />
                </View>

                <Text>
                  {endDate && formatDate(new Date(endDate).toDateString())}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
