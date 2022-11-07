import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ContatoScreen } from "../Screens/ContatoScreen";
import { HomeScreen } from "../Screens/HomeScreen";
import { SobreScreen } from "../Screens/SobreScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
export const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicial" component={RootNavigationTab} />
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();
export const RootNavigationTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={20} />
          ),
        }}/>
      <Tab.Screen name="Contato" component={ContatoScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={20} />
          ),
        }}/>
      <Tab.Screen name="Sobre" component={SobreScreen} options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-city-outline" color={color} size={20} />
          ),
        }}/>
    </Tab.Navigator>
  );
};
