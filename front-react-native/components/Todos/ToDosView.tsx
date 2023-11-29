import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { AppHeader } from './AppHeader';
import { NewTodo } from './NewTodo';
import { TodoList } from '../TodoList/TodoList';
import { LinearGradient } from 'expo-linear-gradient';

export const ToDosView = ({navigation}) => {
    const [ newTodo, setNewTodo ] = useState('');

    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.0, 0.99]}
            colors={['#153677', '#4e085f']}
            style={styles.linearGradient}
        >
            <View style={styles.container}>
                <AppHeader navigation={navigation} />
                <NewTodo
                    newTodo={newTodo}
                    setNewTodo={setNewTodo}
                />
                <View style={styles.todos}>
                    <TodoList />
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '90%',
        maxHeight: '80%',
        borderRadius: 10,
        flexDirection: 'column',
        alignItems: 'center'
    },
    todos: {
        maxHeight: '75%'
    }
});