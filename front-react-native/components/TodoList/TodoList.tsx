import { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { TodoItem } from './TodoItem';

let data = [
    {id: 1, todo: 'Pendiente 1', complete: false},
    {id: 2, todo: 'Pendiente 2', complete: true},
    {id: 3, todo: 'Pendiente 3', complete: true},
    {id: 4, todo: 'Pendiente 4', complete: false}
];

export const TodoList = () => {
    const [ datos, setDatos ] = useState(data);

    const changeState = (id:number) => {
        let element = data.find(item => item.id === id)
        setDatos([
            ...datos.filter(item => item.id !== id),
            {
                ...element,
                complete: !element.complete
            }
        ]);
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={datos}
                renderItem={
                    ({item}) => (
                        <TodoItem
                            todo={item}
                            changeState={changeState}
                        />
                    )
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        minWidth:'90%',
        maxWidth: '90%'
    }
});
