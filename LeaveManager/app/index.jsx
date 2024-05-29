import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import { Link } from "expo-router";
import SliderItem from "../components/sliderItem";
import { images } from "../constants";

const Index = () => {
  const { width } = useWindowDimensions();
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
        "Consultez et mettez à jour vos enregistrements d'absences où que vous soyez. Accédez à votre calendrier d'absences et apportez des modifications en toute simplicité.",
    },
    {
      id: 3,
      image: images.watchNotifications,
      message:
        "Restez informé(e) et ne manquez jamais une absence importante. Recevez des notifications pour vous rappeler les absences à venir ou celles qui se terminent bientôt, afin de rester toujours à jour.",
    },
  ];
  return (
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
        pagingEnabled
        scrollEventThrottle={32}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </SafeAreaView>
  );
};
export default Index;
