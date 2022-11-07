import { useState } from "react";
import { Text, View } from "react-native";
import { RadioButton, Searchbar, Switch, TextInput } from "react-native-paper";
import { style } from "../lib/styles";

export const ContatoScreen = () => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const [checked, setChecked] = useState("first");
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View style={style.containerContato}>
      <Text
        style={{
          fontSize: 30,
          marginBottom: "100px",
          color: "black",
          fontWeight: "200",
          letterSpacing: 4
        }}
      >
        Contato
      </Text>
      <Searchbar
        style={style.espaco}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <TextInput
        style={style.inputs}
        label="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={style.inputs}
        label="Mensagem"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <View style={style.pairadio}>
        <View style={style.radios}>
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <Text>F</Text>
        </View>
        <View style={style.radios}>
          <RadioButton
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text>M</Text>
        </View>
      </View>
      <View style={style.nightmode}>
        <Text>Maior de 18</Text>
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      </View>
    </View>
  );
};
