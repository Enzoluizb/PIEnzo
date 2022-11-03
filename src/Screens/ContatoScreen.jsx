import { useState } from "react";
import { StyleSheet, Text, View } from "react-native"
import { Divider, RadioButton, Searchbar, Switch, TextInput } from "react-native-paper"
import { style } from "../lib/styles"

export const ContatoScreen = () => {
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [checked, setChecked] = useState('first');
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return (
        <View style={style.containerContato}>
            <Text style={style.tituloContato}>Página de Contato</Text>
            <Searchbar style={style.espaco}
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <TextInput style={style.inputs}
                label="Email"
                value={email}
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput style={style.inputs}
                label="Mensagem"
                value={text}
                onChangeText={(text) => setText(text)}
            />
            <RadioButton
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
            />
            <RadioButton 
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
            />
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />

        </View>
    );
}

