import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashBoardStack from './DashBoardStack';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="DashboardStack" component={DashBoardStack} />
    </Tab.Navigator>
  );
};

export default AppStack;
