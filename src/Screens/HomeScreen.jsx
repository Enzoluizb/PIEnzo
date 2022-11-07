import { Text, View } from "react-native";
// import { Button } from "react-native-paper";
import { style } from "../lib/styles";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Text
        style={{
          fontSize: 30,
          marginBottom: "100px",
          color: "black",
          fontWeight: "200",
          letterSpacing: 4
        }}
      >
        Home 
      </Text>
    </View>
  );
};
