import { useState } from "react";
import { Text, View } from "react-native"
import { Divider, TextInput } from "react-native-paper"

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
            <TextInput
                label="Mensagem"
                value={text}
                onChangeText={(text) => setText(text)}
            />
            <Text>Diretrizes</Text>
    <Divider />
    <Text>Ajuda</Text>
    <Divider />
        </View>
    );
}

