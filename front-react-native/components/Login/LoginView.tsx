import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { InputLogin } from './InputLogin';
import { ButtonLogin } from './ButtonLogin';

export default function LoginView({navigation}) {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const doLogin = async () => {
        const ipv4 = '';

        if(username.trim() !== '' && password.trim() !== '') {
            var raw = JSON.stringify({
                "username": username,
                "password": password
            });
            const resp = await fetch(`http://${ipv4}:8000/auth/login/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: raw,
                redirect: 'follow'
            });
            const body = await resp.json();
            if(resp.ok) {
                //navigation.navigate('todos')
                alert(`Login exitoso, token: ${body.token}`)
            } else {
                alert(`Error login, ${body.detail}`)
            }
        }
    }

    return (
        <View style={styles.body}>
            <ImageBackground source={require('../../assets/mias/coffeeBGBlur.jpg')} style={styles.body}>
                <View style={styles.container}>
                    <Text style={styles.title}>Login</Text>
                    <InputLogin
                        label="Usuario"
                        value={username}
                        onChange={setUsername}
                        security={false}
                    />
                    <InputLogin
                        label="Contraseña"
                        value={password}
                        onChange={setPassword}
                        security={true}
                    />
                    <ButtonLogin
                        text="Ingresar"
                        onPress={doLogin}
                    />
                    <StatusBar style="light" />
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        margin: 0,
        padding: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        fontFamily: 'sans-serif',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
    },
    container: {
        backgroundColor: '#fff',
        margin: 'auto',
        border: '2px solid #fff',
        boxShadow: '0 15px 40px rgba(0, 0, 0, .5)',
        width: '80%',
        paddingVertical: 40,
        paddingHorizontal: 30
    },
    title: {
        marginBottom: 25,
        textAlign: 'center',
        color: '#df6536',
        fontSize: 40,
        fontWeight: 'bold'
    }
});
