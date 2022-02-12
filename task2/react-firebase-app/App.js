import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Auth from './screens/Auth';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Auth' options={{headerShown: false}} component={Auth} />
        <Stack.Screen name='Home' options={{headerShown: false}} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
