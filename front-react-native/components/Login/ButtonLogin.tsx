import { StyleSheet, Pressable, Text } from 'react-native';

interface ButtonProps {
    text: string;
    onPress: () => void
}

export const ButtonLogin = ({text, onPress}:ButtonProps) => {
    return (
        <Pressable style={styles.boton} onPress={onPress}>
            <Text style={styles.botonText}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    boton: {
        border: 'none',
        outline: 'none',
        height: 40,
        backgroundColor: '#262626',
        alignItems: 'center',
        justifyContent: 'center'
    },
    botonText: {
        color: '#fff',
        fontSize: 16
    }
});