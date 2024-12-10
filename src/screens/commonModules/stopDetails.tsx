import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';

// navigation
import navigationService from '../../navigation/navigationService';

// packages
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// components
import Button from '../../components/button';
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';
import Spacer from '../../components/spacer';

// constants
import {SCREENS} from '../../constant';
import {baseStyle, colors, sizes} from '../../constant/theme';

// styles
import styles from '../styles/stopDetails';

// SVG Imports
import NOTIFICATION from '../../assets/svg/notification.svg';
import SCAN from '../../assets/svg/scan_orange.svg';
import StopDetailsCard from '../../components/cards/stopDetails';

interface TicketDetailsProps {
  route: {
    params: {
      details: {
        passengersCount: number;
        routeDetails: {
          from: string;
          fromTime: string;
          to: string;
          toTime: string;
        };
        stopsCount: number;
      };
    };
  };
}

const routeDataSample = {
  routes: [
    {place: 'K.K.Nagar', time: '9:30', total: 12, in: 12, out: 12},
    {place: 'Sriperumbudur', time: '11:30', total: 12, in: 12, out: 12},
    {place: 'Kolar', time: '2:00', total: 12, in: 12, out: 12},
    {place: 'Vellore', time: '3:00', total: 12, in: 12, out: 12},
    {place: 'Kirshnarajapuram', time: '3:00', total: 12, in: 12, out: 12},
    {place: 'Bangalore', time: '3:00', total: 12, in: 12, out: 12},
    {place: 'Majestic Bus Stand', time: '7:30', total: 12, out: 12},
  ],
  kiloMeter: 654,
  time: '04.27',
  currentStop: "Vellore"
};
const StopDetails: React.FC<TicketDetailsProps> = ({route}) => {
  // props
  const {details} = route.params;

  const [startJourney, setStartJourney] = useState<boolean>(false);
  const [scan, setScan] = useState<boolean>(false);

  // Render Body
  const renderBody = ({item}: ListRenderItemInfo<string>) => {
    return (
      <View style={styles.subContainer}>
        <StopDetailsCard data={routeDataSample} viewMap={() => {}} />
      </View>
    );
  };

  return (
    <CustomSafeArea style={styles.container} statusBarBGColor={colors.grey_F1}>
      <Header
        goBack={() => {
          navigationService.goBack();
        }}
        title="Stop Details"
        isRightIcon={true}
        rightIcon={NOTIFICATION}
        rightIconView={styles.iconView}
        rightIconPress={() =>
          navigationService.navigate(SCREENS.NOTIFICATION_SCREEN)
        }
      />
      <Spacer height={hp('4%')} />
      <View style={styles.row}>
        <View>
          <Text
            style={[
              baseStyle.txtStyleOutInterSemiBold(sizes.size3, colors.black_28),
              styles.width,
            ]}>
            {details?.routeDetails?.from} to {details?.routeDetails?.to}
          </Text>
          <Spacer height={hp('1%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size011, colors.grey_55),
            ]}>
            {details.passengersCount} Passengers | {details.stopsCount} Stops
          </Text>
        </View>
        <View style={styles.starts}>
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size01, colors.white_FF),
            ]}>
            Start in 6:30 Minutes
          </Text>
        </View>
      </View>
      <Spacer height={hp('2%')} />
      <FlatList
        data={['MY_TRIP']}
        renderItem={renderBody}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
      <Spacer height={hp('2%')} />
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => setStartJourney(!startJourney)}
          text={Boolean(startJourney) ? 'Emergency Stop' : 'Start to Journey'}
          buttonStyle={
            Boolean(startJourney)
              ? styles.callPassenger
              : styles.callPassengerBtn
          }
          textStyle={styles.text}
        />
        <Button
          onPress={() => setScan(!scan)}
          buttonStyle={!Boolean(scan) ? styles.button : styles.endJourney}
          textStyle={Boolean(scan) ? styles.textStyle : styles.iconText}
          text={!Boolean(scan) ? 'Scan Ticket' : 'End Journey'}
          icon={Boolean(scan) ? undefined : SCAN}
        />
      </View>
      <Spacer height={hp('10%')} />
    </CustomSafeArea>
  );
};

export default StopDetails;
