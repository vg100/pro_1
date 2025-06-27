import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function OnboardingStack() {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Onboard1' component={WelcomeScreen} />
      </Stack.Navigator>
  );
}