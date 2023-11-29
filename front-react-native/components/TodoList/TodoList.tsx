import { View, StyleSheet, FlatList } from 'react-native';
import { TodoItem } from './TodoItem';

const data = [
    {id: 1, todo: 'Pendiente 1', complete: false},
    {id: 2, todo: 'Pendiente 2', complete: true},
    {id: 3, todo: 'Pendiente 3', complete: true},
    {id: 4, todo: 'Pendiente 4', complete: false}
];

export const TodoList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({item}) => <TodoItem todo={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        minWidth:'100%',
        maxWidth: '100%'
    }
});
