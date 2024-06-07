import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import Header from "../../components/header";
import { images } from "../../constants";
import { getAccount } from "../../lib/functions";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { deleteAccount } from "../../lib/functions";
import { router } from "expo-router";
const Account = () => {
  const [name, setName] = useState({ name: "", firstname: "" });
  useEffect(() => {
    getAccount().then((res) => {
      setName(res);
    });
  }, []);
  const listItems = [
    {
      title: "Changer de nom",
      icon: <FontAwesome name="user" size={24} color="rgb(59 130 246)" />,
      action: undefined,
      id: 1,
    },
    {
      title: "Activer les notifications",
      icon: <AntDesign name="notification" size={24} color="rgb(59 130 246)" />,
      action: undefined,
      id: 2,
    },
    {
      title: "A propos",
      icon: (
        <MaterialCommunityIcons
          name="code-braces-box"
          size={24}
          color="rgb(59 130 246)"
        />
      ),
      action: () => {
        router.navigate(
          (href = "https://portfolio-seven-eosin-49.vercel.app/")
        );
      },
      id: 3,
    },
    {
      title: "Se deconnecter",
      icon: <SimpleLineIcons name="logout" size={24} color="rgb(59 130 246)" />,
      action: deleteAccount,
      id: 4,
    },
  ];
  return (
    <View className="">
      <Header />
      <SafeAreaView className="bg-white h-[100vh] flex">
        <FlatList
          bounces={false}
          className="w-full"
          data={listItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                if (item.action) {
                  item.action();
                }
              }}
              activeOpacity={0.6}
              className="h-[50px] flex flex-row pl-3 pt-3 w-[98%] mx-[1%] shadow-sm mb-1 shadow-gray-400 bg-[#fffcfc]
              rounded-lg"
            >
              {item.icon}
              <Text className="text-black-100 ml-4 text-base">
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
          ListHeaderComponent={() => (
            <View className="flex items-center mb-5">
              <Image
                source={images.user}
                resizeMode="contain"
                alt="User icon by Kiranshastry"
                className="w-[100px] h-[100px] mt-10 mb-5"
              />

              <Text className="text-blue-500 text-xl font-psemibold">
                {name.firstname} {name.surname}
              </Text>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
