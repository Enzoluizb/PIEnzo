import { useState } from "react";
import { Text, View } from "react-native"
import { TextInput } from "react-native-paper"

export const ContatoScreen = () => {
    const [text, setText] = useState("");
    return (
        <View>
            <Text>Página de Contato</Text>
            <TextInput
      label="Email"
      value={text}
      onChangeText={(text) => setText(text)}
    />
        </View>
    )
}