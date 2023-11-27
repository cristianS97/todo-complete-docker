import { View, StyleSheet } from 'react-native';
import { AppHeader } from './AppHeader';
import { NewTodo } from './NewTodo';

export const ToDosView = ({navigation}) => {
    return (
        <View style={styles.container}>
            <AppHeader navigation={navigation} />
            <NewTodo />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});