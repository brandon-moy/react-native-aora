import { View, Text, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";

const Home = () => {
  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text className="text-3xl text-white">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="px-4 my-6 space-y-6">
            <View className="flex-row items-start justify-between mb-6">
              <View>
                <Text className="text-sm text-gray-100 font-pmedium">
                  Welcome Back
                </Text>
                <Text className="text-2xl text-white font-psemibold">
                  brandon
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="h-10 w-9"
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchInput />
            <View className="flex-1 w-full pt-5 pb-8">
              <Text className="mb-3 text-lg text-gray-100 font-pregular">
                Latest Videos
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
