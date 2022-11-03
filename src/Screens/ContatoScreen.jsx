import { useState } from "react";
import { StyleSheet, Text, View } from "react-native"
import { Divider, RadioButton, Searchbar, Switch, TextInput } from "react-native-paper"

export const ContatoScreen = () => {
    const [text, setText] = useState("");
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [checked, setChecked] = useState('first');
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return (
        <View>
            <Text>Página de Contato</Text>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
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
            <Text>Diretrizes</Text>
            <Divider />
            <Text>Ajuda</Text>
            <Divider />
        </View>
    );
}

const styles = StyleSheet.create({
    surface: {
        padding: 8,
        height: 80,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

