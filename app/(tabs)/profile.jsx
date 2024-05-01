import { View, Text, TouchableOpacity, Image } from "react-native";
import { icons } from "../../constants";
import { signOut } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";
import { router } from "expo-router";

const Profile = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();
  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLoggedIn(false);

    router.replace("/sign-in");
  };

  return (
    <View>
      <Text>Profile</Text>
      <View className="flex items-center justify-center w-full h-full">
        <TouchableOpacity onPress={logout}>
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
