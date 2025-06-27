import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import OTPVerification from '../screens/OtpScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Splash'>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Otp' component={OTPVerification} />
      </Stack.Navigator>
  );
}