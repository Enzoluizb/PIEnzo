import { Button, Text, View } from "react-native"

export const SobreScreen = ({navigation}) => {
    return (
        <View>
            <Text>Sobre o app</Text>
            <Button title="Vá para o Céu"
            onPress={()=>navigation.navigate("Home")}/>
        </View>
    )
}