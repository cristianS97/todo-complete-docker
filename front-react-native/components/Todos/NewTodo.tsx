import { View, TextInput, Button } from 'react-native';

export const NewTodo = () => {
    return (
        <View>
            <TextInput
                value=""
            />
            <Button
                title="Agregar"
            />
        </View>
    )
}
