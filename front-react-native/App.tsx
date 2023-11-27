import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginView from './components/Login/LoginView';
import { ToDosView } from './components/Todos/ToDosView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login" screenOptions={{headerShown:false}}>
        <Stack.Screen name="login" component={LoginView} />
        <Stack.Screen name="todos" component={ToDosView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
