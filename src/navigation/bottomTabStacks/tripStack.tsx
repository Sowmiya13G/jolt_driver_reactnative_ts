import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SCREENS} from '../../constant';
import ScreenName from '../screensNames';
interface ScreenComponent {
  ScreenName: string;
  Component: React.ComponentType<any>;
}

const TripStack: React.FC = () => {
  const Stack = createNativeStackNavigator();

  const ScreensComponentArr: ScreenComponent[] = [
    {
      ScreenName: SCREENS.MY_TRIP,
      Component: ScreenName?.MyTripScreen,
    },
    {
      ScreenName: SCREENS.TICKET_DETAILS,
      Component: ScreenName.TicketDetails,
    },
    {
      ScreenName: SCREENS.STOP_DETAILS,
      Component: ScreenName.StopDetails,
    },
    {
      ScreenName: SCREENS.NOTIFICATION_SCREEN,
      Component: ScreenName.NotificationScreen,
    },
  ];

  return (
    <Stack.Navigator initialRouteName={SCREENS.MY_TRIP}>
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

export default TripStack;
