import { View, Text, TouchableOpacity, Image } from "react-native";
import { icons } from "../../constants";

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
      <View className="flex items-center justify-center w-full h-full">
        <TouchableOpacity>
          <Image
            source={icons.logout}
            resizeMode="contain"
            className="w-6 h-6"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
