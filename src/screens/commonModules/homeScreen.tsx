import React from 'react';
import {FlatList, Text, View} from 'react-native';

// navigation
import navigationService from '../../navigation/navigationService';

//packages
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

// components
import Button from '../../components/button';
import TotalEarnCard from '../../components/cards/totalEarnCard';
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';
import Spacer from '../../components/spacer';

// constant
import {dashboard, strings} from '../../constant/strings';
import {baseStyle, colors, sizes} from '../../constant/theme';

// utils
import {getSessionText} from '../../utils/helperFunctions';

// styles
import styles from '../styles/homeScreen';

// svg imports
import {SvgProps} from 'react-native-svg';
import COMPLETED from '../../assets/svg/completed.svg';
import REVIEW from '../../assets/svg/review.svg';
import SCAN from '../../assets/svg/scan.svg';
import TRIP_BUS from '../../assets/svg/tripBus.svg';
import TicketCard from '../../components/cards/ticketCard';
import TripCard from '../../components/cards/tripCard';

type MyItem = {
  id: number;
  title: string;
  color: string;
  point: number;
};

type ItemType = {
  color: string;
  img: React.FC<SvgProps>;
  title: string;
  point?: number;
};

const data = [
  {
    img: REVIEW,
    point: 4.3,
    title: 'Rating',
    color: '#FCB35140',
  },
  {
    img: COMPLETED,
    title: 'Completed Trip',
    color: '#3AB72F33',
  },
  {
    img: TRIP_BUS,
    title: 'Upcoming Trip',
    color: '#274FF52E',
  },
];

const ticketData = {
  from: 'Chennai CMBT',
  to: 'Bengalore BS',
  fromTime: 'Oct 10, 5:50am',
  toTime: 'Oct 10, 11:15am',
  kmsAndHrs: '654kms,8.21Hrs',
  passengersCount: 45,
  stopsCount: 28,
  start: 'Ashok Pillar',
  end: 'Majestic Bus Station ',
  duration: '6:30 Hours lest',
};
const HomeScreen = () => {
  //props

  // local states

  // use effects

  // ------------------ FUNCTIONALITIES ----------------------

  const headerData = {
    session: getSessionText(),
    user: dashboard.name,
  };

  // ------------------ RENDER UI ----------------------

  const renderItem = ({item}: {item: ItemType}) => {
    return (
      <View style={[styles.card, {backgroundColor: item.color}]}>
        <item.img
          width={widthPercentageToDP('7.5%')}
          height={widthPercentageToDP('7.5%')}
        />
        <Spacer height={hp('1%')} />
        <Text
          numberOfLines={2}
          style={[
            baseStyle.txtStyleOutInterRegular(sizes.size011, colors.black_39),
            styles.texAlignMargin,
          ]}>
          {item.title}
        </Text>
        {item.point && (
          <>
            <Spacer height={hp('0.5%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(
                  sizes.size011,
                  colors.black_39,
                ),
              ]}>
              {item.point}
            </Text>
          </>
        )}
      </View>
    );
  };

  const renderBody = () => {
    return (
      <View style={styles.subContainer}>
        <Spacer height={hp('1%')} />
        <TotalEarnCard todayEarn={'200.90'} totalEarn={'12.000.32'} />
        <Spacer height={hp('3%')} />

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          horizontal={true}
          ItemSeparatorComponent={() => (
            <Spacer width={widthPercentageToDP('2%')} />
          )}
        />
        <Spacer height={hp('3%')} />
        <Text
          style={[
            baseStyle.txtStyleOutInterMedium(sizes.size2, colors.black_39),
            styles.marginHorizontal,
          ]}>
          {dashboard.upcomingJourney}
        </Text>
        <Spacer height={hp('2%')} />
        <TripCard data={ticketData} />
        <Spacer height={hp('2%')} />
        <Button
          onPress={() => {}}
          text={dashboard.scanBus}
          buttonStyle={styles.button}
          textStyle={styles.textStyle}
          icon={SCAN}
        />
      </View>
    );
  };

  return (
    <CustomSafeArea style={styles.container} statusBarBGColor={colors.white_FF}>
      <Header
        goBack={() => {
          navigationService.goBack();
        }}
        title={strings.forgotPasswordTitle}
        color={colors.grey_085}
        isLeftIcon={false}
        isCommonHeader={false}
        titleData={headerData}
        isHomeHeader={true}
        sessionColor={colors.black_28}
      />
      <FlatList
        data={['HOME_SCREEN']}
        renderItem={renderBody}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </CustomSafeArea>
  );
};
export default HomeScreen;
