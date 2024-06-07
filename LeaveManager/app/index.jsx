import { View, FlatList, SafeAreaView, Alert, ScrollView } from "react-native";
import { Redirect, router } from "expo-router";
import SliderItem from "../components/sliderItem";
import { images } from "../constants";
import ButtonComponent from "../components/button";
import TextInputComponent from "../components/textInput";
import { useState } from "react";
import { createAccount, haveAccount } from "../lib/functions";
const Index = () => {
  const [surnname, setSurname] = useState("");
  const [firstname, setFirstName] = useState("");
  const [error, setError] = useState("");
  const data = [
    {
      id: 1,
      image: images.profile,
      message:
        "Organisez les absences à venir de vos collègues avec facilité. Planifiez, gérez et suivez les congés et les permissions en un clin d'œil.",
    },
    {
      id: 2,
      image: images.reminder,
      message:
        "Consultez et mettez à jour vos enregistrements d'absences où que vous soyez. Accédez  à votre calendrier d'absences  en toute simplicité.",
    },
    {
      id: 3,
      image: images.watchNotifications,
      message:
        "Restez informé(e) et ne manquez jamais une absence. Recevez des notifications pour vous rappeler les absences à venir ou celles qui se terminent bientôt.",
    },
  ];
  const [isLoggged, setIsLogged] = useState(false);
  haveAccount()
    .then((res) => {
      if (res) {
        setIsLogged(true);
      }
    })
    .catch((error) => {
      console.warn(error);
    });

  if (isLoggged) return <Redirect href={"(tabs)/home"} />;

  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      showsVerticalScrollIndicator={false}
    >
      <SafeAreaView
        className={`h-[100vh] bg-white flex items-center justify-center`}
      >
        <FlatList
          className="w-full bg-white"
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SliderItem
              image={item.image}
              isFinal={item.id === 3}
              text={item.message}
            />
          )}
          bounces={false}
          pagingEnabled
          scrollEventThrottle={32}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
        <View className="w-full  flex justify-center items-center">
          <TextInputComponent
            placeholder={"Nom"}
            taille={55}
            value={firstname}
            setValue={setFirstName}
          />
          <TextInputComponent
            placeholder={"Prenom"}
            taille={55}
            value={surnname}
            setValue={setSurname}
          />

          <View className="w-[90%]">
            <ButtonComponent
              value={"Commencer"}
              action={() => {
                if (!firstname && !surnname) {
                  Alert.alert("Veuillez remplir le formulaire");
                  return;
                }
                createAccount(firstname, surnname);
                router.replace("home");
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default Index;
