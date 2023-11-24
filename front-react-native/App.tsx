import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ImageBackground, Pressable } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.body}>
      <ImageBackground source={require('./assets/mias/coffeeBGBlur.jpg')} style={styles.body}>
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.contenedorInputs}>
            <Text style={styles.formLabel}>Usuario</Text>
            <TextInput
              value={username}
              onChangeText={setUsername}
              style={styles.textInput}
            />
          </View>
          <View style={styles.contenedorInputs}>
            <Text style={styles.formLabel}>Contraseña</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              style={styles.textInput}
            />
          </View>
          <Pressable style={styles.boton}>
            <Text style={styles.botonText}>Ingresar</Text>
          </Pressable>
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
  },
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
  },
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
