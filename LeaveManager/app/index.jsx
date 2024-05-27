import { Text, View } from "react-native";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View className="h-[100vh] flex items-center justify-center">
      <Link href="(tabs)/home" replace={true}>
        Hello
      </Link>
    </View>
  );
};
export default Index;
