import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { images } from "../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEventSelection, useLocalStorage } from "../hooks/context";
import { Feather } from "@expo/vector-icons";
import { getAccount } from "../lib/functions";
const Header = () => {
  const { inSelection, setInSelection, deleteSelection, selectionList } =
    useEventSelection();
  const [confirmDelete, setConfirmDelete] = useState(false);
  useEffect(() => {
    if (confirmDelete && selectionList) {
      deleteSelection(selectionList, setEventData);
    }
    return setConfirmDelete(false);
  }, [selectionList, confirmDelete]);
  const { setEventData } = useLocalStorage();
  const [name, setName] = useState({ name: "", firstname: "" });
  useEffect(() => {
    getAccount().then((res) => {
      setName(res);
    });
  }, []);
  return (
    <View className="fixed flex justify-center items-center top-0 left-0 w-full gradient z-50 bg-[#2051e5] h-[110px] rounded-br-xl rounded-bl-xl">
      <Image
        source={images.bubbles}
        resizeMode="cover"
        className="absolute top-[-20px] left-0"
      />

      <View className="pt-12 flex flex-row justify-between w-[90%]">
        <Text className="text-white">
          {name.firstname} {name.surname}
        </Text>

        {inSelection ? (
          <View className="flex flex-row">
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                setConfirmDelete(true);
              }}
            >
              <MaterialCommunityIcons name="delete" size={28} color="red" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              className="ml-2"
              onPress={() => {
                setInSelection(false);
              }}
            >
              <Feather name="x" size={28} color="white" />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity activeOpacity={1}>
            <Feather
              name="bell"
              size={24}
              color="white"
              onPress={() => {
                router.push("(stack)/notifications");
              }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
