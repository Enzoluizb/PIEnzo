import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { style } from "../lib/styles";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Text
        style={{
          fontSize: 30,
          marginBottom: "100px",
          color: "#f7c49c",
          fontWeight: "bold",
        }}
      >
        Home
      </Text>
      <Button
        mode="contained"
        style={{ width: "50%", marginBottom: "20px", backgroundColor: "#f7c49c" }}
        onPress={() => navigation.navigate("Sobre")}
      >
        Sobre
      </Button>
      
      <Button
        mode="contained"
        style={{ width: "50%", marginBottom: "40px", backgroundColor: "#f7c49c"}}
        onPress={() => navigation.navigate("Contato")}
      >
        Contato 
      </Button>
    </View>
  );
};
