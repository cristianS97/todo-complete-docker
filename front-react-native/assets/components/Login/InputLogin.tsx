import { StyleSheet, Text, View, TextInput } from 'react-native';

interface InputProps {
    label: string;
    value: string;
    onChange: (arg0:string) => void;
    security: boolean;
}

export const InputLogin = ({label, value, onChange, security}: InputProps) => {
    return (
        <View style={styles.contenedorInputs}>
            <Text style={styles.formLabel}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChange}
                secureTextEntry={security}
                style={styles.textInput}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        padding: 2,
        borderBottomColor: '#df6536',
        borderBottomWidth: 1,
        fontSize: 18
    },
    contenedorInputs: {
        marginBottom: 15
    },
    formLabel: {
        margin: 0,
        padding: 0,
        fontWeight: 'bold',
        color: '#df6536',
        fontSize: 17
    }
});