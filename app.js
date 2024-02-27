import * as React from 'react'; 
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


function HomeScreen({ navigation }) {
return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Almeida Testing</Text>
        <Button
        title="Isinha"
        onPress={() => navigation.navigate('Isinhabolinha')} />

        <Button
        title="Vitinho"
        onPress={() => navigation.navigate('Vitinho')} />
    </View>
 );
}


function IsinhabolinhaScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Isinha bolinha</Text>
            <Text>
            eu confio na isotas porque são mais de 10 anos juntas,eu amo ela e ela compartilha todas as minhas loucuras e ainda vai junto.
            </Text>
            <Text>
            quero que ela imite uma coruja
            </Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')}  />
        </View>
    );
}


function VitinhoScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Vitinho</Text>
            <Text>
            eu confio nele pq sempre esteve comigo em todas as dores e momentos bons tbm! amo você muitão
            </Text>

            <Text>
            quero que ele imite um canguru
            </Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')}  />
        </View>
    );
}


function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Isinhabolinha" component={IsinhabolinhaScreen} />
            <Stack.Screen name="Vitinho" component={VitinhoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default App;

