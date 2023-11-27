import { Text, View, Pressable, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

export const AppHeader = ({navigation}) => {
    return (
        <View>
            <View>
                <Text style={styles.title}>
                    <FontAwesome5 name="clipboard-list" size={24} color="#ff5945"/> To-do App
                </Text>
                <Pressable onPress={() => navigation.navigate('login')}>
                    <Text style={styles.cierre}>Cerrar sesión</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#002765',
        fontSize: 25
    },
    cierre: {
        fontSize: 16
    }
});
