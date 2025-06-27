import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashBoard from '../screens/DashBoard';

const Stack = createNativeStackNavigator();

export default function DashBoardStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Dashboard' component={DashBoard} />
        </Stack.Navigator>
    );
}