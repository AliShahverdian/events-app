import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const AppHeader = () => {
  return (
    <LinearGradient
      colors={["#e30b0b", "#313136"]}
      style={{ height: 60, padding: 8 }}
    ></LinearGradient>
  );
};
export default AppHeader;
