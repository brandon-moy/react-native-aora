import { View, Text, Image } from "react-native";
import { images } from "../constants";
import CustomButton from "./CustomButton";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="flex items-center justify-center px-4">
      <Image
        className="w-[270px] h-[215px]"
        resizeMode="contain"
        source={images.empty}
      />
      <Text className="text-sm text-gray-100 font-pmedium">{subtitle}</Text>
      <Text className="text-2xl text-white font-psemibold">{title}</Text>
      <CustomButton
        title="Upload video"
        handlePress={() => router.push("/create")}
        containerStyles="w-full my-5"
      />
    </View>
  );
};

export default EmptyState;
