/* 
Instalar o react-navigation na máquina: 
    - "npm install @react-navigation/native"
    - "npm install @react-navigation/bottom-tabs"
    - "npx expo install react-native-screens react-native-safe-area-context"

 Link da página da documentação: "https://reactnavigation.org/"
*/
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from './(tabs)/home'
import { PasswordsPage } from "./(tabs)/passwords";

// Icones
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

// Sistema de rotas com react-navigation
export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                // Define o nome da página
                name='Home'
                // Define qual é o componente que será rederizado na rota
                component={Home}
                // Chama as opções das rotas:
                options={{
                    // Bloqueia a label que fica logo abaixo do ícone
                    // tabBarShowLabel: false, 
                    // Bloqueia o cabeçalho padrão da rota
                    headerShown: false,
                    // Adiciona um ícone para a rota
                    tabBarIcon: ({ focused, size, color }) => {
                        // Verifica se o campo está focado para chamar um determinado tipo de ícone
                        if (focused) {
                            return <Ionicons size={size} color={color} name="home" />
                        } else {
                            return <Ionicons size={size} color={color} name="home-outline" />
                        }
                    }
                }}
            />

            <Tab.Screen
                name='Passwords'
                component={PasswordsPage}
                options={{
                    // Bloqueia a label que fica logo abaixo do ícone
                    // tabBarShowLabel: false, 
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        // Verifica se o campo está focado para chamar um determinado tipo de ícone
                        if (focused) {
                            return <Ionicons size={size} color={color} name="lock-closed" />
                        } else {
                            return <Ionicons size={size} color={color} name="lock-closed-outline" />
                        }
                    }
                }}
            />
        </Tab.Navigator>
    )
}