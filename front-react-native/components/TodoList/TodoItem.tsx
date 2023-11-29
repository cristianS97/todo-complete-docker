import { Text, StyleSheet } from 'react-native';

export const TodoItem = ({todo}) => {
    return (
        <Text>{todo.todo}</Text>
    )
}
