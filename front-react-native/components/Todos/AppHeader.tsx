import { Text, View, Pressable, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

export const AppHeader = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                <FontAwesome5 name="clipboard-list" size={24} color="#ff5945"/> To-do App
            </Text>
            <Pressable onPress={() => navigation.navigate('login')}>
                <Text style={styles.cierre}>Cerrar sesión</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        minWidth: '100%',
        alignItems: 'center',
        padding: 20,
        textAlign: 'center',
        justifyContent: 'center',
        maxHeight: '15%'
    },
    title: {
        color: '#002765',
        fontSize: 25,
        fontWeight: 'bold',
        marginRight: 15
    },
    cierre: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});
