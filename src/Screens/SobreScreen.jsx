import { Text, View } from "react-native";
import { style } from "../lib/styles";

export const SobreScreen = () => {
  return (
    <View style={style.containerSobre}>
      <Text
        style={{
          fontSize: 30,
          marginBottom: "100px",
          color: "#f7c49c",
          fontWeight: "bold",
        }}
      >
        Sobre
      </Text>
    </View>
  );
};
