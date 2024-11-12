import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

const AppHeader = () => {
  const goToEventsPage = () => {
    router.push("/");
  };
  const goToBookmarksPage = () => {
    router.push("/bookmarks");
  };
  return (
    <LinearGradient
      colors={["#313136", "#e30b0b"]}
      style={{
        height: 80,
        padding: 8,
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          paddingTop: 12,
        }}
      >
        <MaterialIcons
          name="event-seat"
          size={32}
          color="white"
          onPress={goToEventsPage}
        />
        <Ionicons
          name="bookmarks"
          size={24}
          color="white"
          onPress={goToBookmarksPage}
        />
      </View>
    </LinearGradient>
  );
};
export default AppHeader;
