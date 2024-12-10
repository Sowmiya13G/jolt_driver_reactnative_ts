import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SCREENS} from '../../constant';
import ScreenName from '../screensNames';
interface ScreenComponent {
  ScreenName: string;
  Component: React.ComponentType<any>;
}

const DashboardStack: React.FC = () => {
  const Stack = createNativeStackNavigator();

  const ScreensComponentArr: ScreenComponent[] = [
    {
      ScreenName: SCREENS.DASHBOARD,
      Component: ScreenName.HomeScreen,
    },
    {
      ScreenName: SCREENS.NOTIFICATION_SCREEN,
      Component: ScreenName.NotificationScreen,
    },
  ];

  return (
    <Stack.Navigator initialRouteName={SCREENS.DASHBOARD}>
      {ScreensComponentArr.map(({ScreenName, Component}) => (
        <Stack.Screen
          key={ScreenName}
          name={ScreenName}
          component={Component}
          options={{headerShown: false}}
        />
      ))}
    </Stack.Navigator>
  );
};

export default DashboardStack;
