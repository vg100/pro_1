import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import OnboardingStack from './OnboardingStack';
import AuthStack from './AuthStack';
import AppStack from './DashBoardStack';
import { completeOnboarding, login } from '../redux/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from '../screens/SplashScreen';

const AppNavigator = () => {
    const dispatch = useDispatch();
    const { isLoggedIn, onboardingDone } = useSelector((state) => state.user);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const onboarded = await AsyncStorage.getItem('onboarded');
                const token = await AsyncStorage.getItem('token');
                if (onboarded === 'true') dispatch(completeOnboarding());
                if (token) dispatch(login());
            } catch (e) {
                console.error('Failed to load async data:', e);
            } finally {
                setTimeout(() => setLoading(false), 1000);
            }
        })()
    }, [dispatch]);

    if (loading) {
        return <SplashScreen />
    }

    return (
        <NavigationContainer>
            {!onboardingDone && <OnboardingStack />}
            {onboardingDone && !isLoggedIn && <AuthStack />}
            {onboardingDone && isLoggedIn && <AppStack />}
        </NavigationContainer>
    );
};

export default AppNavigator;
