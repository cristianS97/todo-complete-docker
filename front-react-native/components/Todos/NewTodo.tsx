import { View, TextInput, Text, Pressable, StyleSheet } from 'react-native';

export const NewTodo = ({newTodo, setNewTodo}) => {
    return (
        <View style={styles.row}>
            <TextInput
                style={styles.todo}
                value={newTodo}
                onChangeText={setNewTodo}
                placeholder='Agrega una tarea'
            />
            <Pressable style={styles.boton}>
                <Text style={styles.textoBoton}>Agregar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#edeef0',
        borderRadius: 40,
        maxWidth: '90%',
        minWidth: '90%',
        maxHeight: '10%'
    },
    todo: {
        maxWidth: '60%',
        minWidth: '60%',
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        backgroundColor: 'transparent',
        height: '100%',
        padding: 8
    },
    boton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '40%',
        minWidth: '40%',
        borderRadius: 40,
        backgroundColor: '#ff5945',
        height: '100%'
    },
    textoBoton: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17
    }
});

