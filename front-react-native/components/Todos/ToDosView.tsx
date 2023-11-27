import { Text, View, Button } from 'react-native';

export const ToDosView = ({navigation}) => {
    return (
        <View style={{justifyContent: 'center',
        alignItems: 'center',
        flex:1}}>
            <Text>Hola mundo desde una nueva ventana</Text>
            <Button onPress={() => navigation.navigate('login')} title="Cerrar sesión" />
        </View>
    )
}