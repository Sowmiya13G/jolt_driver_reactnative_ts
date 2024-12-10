import React from 'react';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';

// navigation
import navigationService from '../../navigation/navigationService';

// packages
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// components
import Button from '../../components/button';
import BusDataCard from '../../components/cards/busDataCard';
import PaymentDetails from '../../components/cards/paymentDetails';
import RouteDetailsCard from '../../components/cards/routeDeatilsCard';
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';
import Spacer from '../../components/spacer';

// constants
import {ticketDetails} from '../../constant/strings';
import {baseStyle, colors, sizes} from '../../constant/theme';

// styles
import styles from '../styles/ticketDetails';

// SVG Imports
import ORANGE_BELL from '../../assets/svg/orange_bell.svg';
import CALL from '../../assets/svg/whiteCall.svg';
import OPTIONS from '../../assets/svg/options.svg';
import QR from '../../assets/svg/qr.svg';

interface RouteDetails {
  from: string;
  fromTime: string;
  to: string;
  toTime: string;
}

interface BusData {
  status: string;
  bus: string;
  routeDetails: RouteDetails;
}

interface Trip {
  name: string;
  bus: string;
  routeDetails: {
    from: string;
    fromTime: string;
    to: string;
    toTime: string;
  };
  status: string;
  passengerName: string;
  seatNo: string;
  fare: number;
  bookedOn?: string;
}
interface BusData {
  status: string;
  bus: string;
  routeDetails: RouteDetails;
}

// Example RouteDetails structure
interface RouteDetails {
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
}

interface PaymentDetailsProps {
  data: {
    price: string;
    discount: string;
    tax: string;
    convenience: string;
  };
}
interface TicketDetailsProps {
  route: {
    params: {
      details: object;
    };
  };
}
const paymentDetails: PaymentDetailsProps = {
  data: {
    price: '1030',
    discount: '530',
    tax: '100',
    convenience: '30',
  },
};

const TicketDetails: React.FC<TicketDetailsProps> = ({route}) => {
  // props
  const {details} = route.params;

  // Render Body
  const renderBody = ({item}: ListRenderItemInfo<string>) => {
    return (
      <View style={styles.subContainer}>
        <Spacer height={hp('5%')} />
        <BusDataCard data={details as BusData} />
        <Spacer height={hp('3%')} />
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size3, colors.black_28),
            styles.marginHorizontal,
          ]}>
          {ticketDetails.passengerInfo}
        </Text>
        <Spacer height={hp('2%')} />
        <View style={styles.borderView}>
          <View style={styles.column}>
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size2, colors.grey_32),
                styles.marginHorizontal,
              ]}>
              Mobile
            </Text>
            <Spacer height={hp('2%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size2, colors.grey_32),
                styles.marginHorizontal,
              ]}>
              Email
            </Text>
          </View>
          <View style={styles.column60}>
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size2, colors.grey_32),
                styles.marginHorizontal,
              ]}>
              +6282198761234
            </Text>
            <Spacer height={hp('2%')} />

            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size2, colors.grey_32),
                styles.marginHorizontal,
              ]}>
              oliviarhye@gmail.com
            </Text>
          </View>
        </View>
        <Spacer height={hp('2%')} />
        <View style={styles.borderView2}>
          <View>
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_32),
                styles.marginHorizontal,
              ]}>
              Passenger 1
            </Text>
            <Spacer height={hp('1%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterMedium(sizes.size2, colors.black_23),
                styles.marginHorizontal,
              ]}>
              Olivia Rhye
            </Text>
            <Spacer height={hp('1%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_32),
                styles.marginHorizontal,
              ]}>
              Male, 32
            </Text>
          </View>
          <View style={styles.verticalLine} />
          <View>
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_32),
                styles.marginHorizontal,
              ]}>
              Seat(s)
            </Text>
            <Spacer height={hp('1%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterMedium(sizes.size2, colors.black_23),
                styles.marginHorizontal,
              ]}>
              US2
            </Text>
            <Spacer height={hp('1%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_32),
                styles.marginHorizontal,
              ]}>
              Shared Upper single
            </Text>
          </View>
        </View>
        <Spacer height={hp('2%')} />
        <View style={styles.borderView2}>
          <View>
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_32),
                styles.marginHorizontal,
              ]}>
              Passenger 1
            </Text>
            <Spacer height={hp('1%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterMedium(sizes.size2, colors.black_23),
                styles.marginHorizontal,
              ]}>
              Olivia Rhye
            </Text>
            <Spacer height={hp('1%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_32),
                styles.marginHorizontal,
              ]}>
              Male, 32
            </Text>
          </View>
          <View style={styles.verticalLine} />
          <View>
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_32),
                styles.marginHorizontal,
              ]}>
              Seat(s)
            </Text>
            <Spacer height={hp('1%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterMedium(sizes.size2, colors.black_23),
                styles.marginHorizontal,
              ]}>
              US2
            </Text>
            <Spacer height={hp('1%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_32),
                styles.marginHorizontal,
              ]}>
              Shared Upper single
            </Text>
          </View>
        </View>
        <Spacer height={hp('2%')} />

        <Button
          onPress={() => {}}
          text={'Call Passenger'}
          buttonStyle={styles.callPassengerBtn}
          textStyle={styles.text}
          icon={CALL}
        />
        <Spacer height={hp('2%')} />

        <View style={styles.horizontalLine} />
        <RouteDetailsCard data={details as Trip} />
        <View style={styles.horizontalLine} />
        <PaymentDetails data={paymentDetails.data} />
        <View style={styles.horizontalLine} />
        <Button
          onPress={() => {}}
          text={'Notify Passenger'}
          buttonStyle={styles.button}
          textStyle={styles.textStyle}
          icon={ORANGE_BELL}
        />
        <Spacer height={hp('5%')} />
      </View>
    );
  };

  return (
    <CustomSafeArea style={styles.container} statusBarBGColor={colors.white_FF}>
      <Header
        goBack={() => {
          navigationService.goBack();
        }}
        isRightIcon={true}
        rightIcon={OPTIONS}
        rightIconView={styles.iconView}
        rightIconPress={() => {}}
        title={ticketDetails.ticketDetail}
      />
      <FlatList
        data={['MY_TRIP']}
        renderItem={renderBody}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </CustomSafeArea>
  );
};

export default TicketDetails;

{
  /* <Spacer height={hp('3%')} />
<View style={styles.horizontalLine} /> */
}
