import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <Text>{item.id}</Text>}
      />
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
