import { Text, View, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

export const TodoItem = ({todo, changeState}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.todo} onPress={(e) => changeState(todo.id)}>
                <View style={[todo.complete ? styles.circleComplete : styles.circle]}></View>
                <View>
                    <Text>{todo.todo}</Text>
                </View>
            </Text>
            <View style={{marginRight: 10, maxWidth:'10%', minWidth:'10%'}}>
                <FontAwesome5 name="edit" size={24} color="#ff5945"/>
            </View>
            <View style={{maxWidth:'10%', minWidth:'10%'}}>
                <FontAwesome5 name="trash" size={24} color="#ff5945"/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10
    },
    todo: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        maxWidth: '80%',
        minWidth: '80%'
    },
    circle: {
        position: 'absolute',
        content: '',
        width: 20,
        height: 20,
        borderRadius: 100,
        left: 0,
        borderColor: '#ff5945',
        borderWidth: 2,
        marginRight: 50
    },
    circleComplete: {
        position: 'absolute',
        content: '',
        width: 20,
        height: 20,
        borderRadius: 100,
        left: 0,
        borderColor: '#ff5945',
        backgroundColor: '#ff5945',
        borderWidth: 2,
        marginRight: 50
    }
});
