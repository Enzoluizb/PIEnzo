import { Button, Text, View } from "react-native"
import { style } from "../lib/styles"

export const HomeScreen = ({navigation}) => {
    return (
        <View
        style={style.container}>
            <Text>HOME SCREEN</Text>
            <Button
                title="Ir para Sobre"
                onPress={() => navigation.navigate("Sobre")}
            />
            <Button
                title="Ir para Contato"
                onPress={() => navigation.navigate("Contato")}
            />
        </View>
    )
}