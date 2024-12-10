import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// packages
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// Navigation
import navigationService from '../../navigation/navigationService';

// Components
import Button from '../../components/button';
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';
import NoDataComponent from '../../components/noData';
import RBSheetComponent from '../../components/rbSheet';
import Spacer from '../../components/spacer';
import StatusBar from '../../components/tabBar';
import TextInputComponent from '../../components/textInput';

// Constants
import {SCREENS} from '../../constant';
import {tabData} from '../../constant/staticData';
import {myTrip, PLACEHOLDERS} from '../../constant/strings';
import {baseStyle, colors, sizes} from '../../constant/theme';

// styles
import styles from '../styles/myTrip';

// SVG Imports
import CLOSE from '../../assets/svg/cancelBlack.svg';
import NODATA from '../../assets/svg/noData.svg';
import NOTIFICATION from '../../assets/svg/notification.svg';
import POINT_STAR from '../../assets/svg/pointStart.svg';
import STAR from '../../assets/svg/unpointStar.svg';
import TripItemCard from '../../components/cards/tripItem';

interface Trip {
  routeDetails: {
    from: string;
    fromTime: string;
    to: string;
    toTime: string;
  };
  passengersCount: number;
  stopsCount: number;
}

// sample data
const tripList: Trip[] = [
  {
    routeDetails: {
      from: 'Chennai CMBT',
      to: 'Bengalore BS',
      fromTime: 'Oct 10, 5:50am',
      toTime: 'Oct 10, 11:15am',
    },
    passengersCount: 45,
    stopsCount: 28,
  },
  {
    routeDetails: {
      from: 'Chennai CMBT',
      fromTime: 'Oct 09, 11:15am',
      to: 'Bangalore BS',
      toTime: 'Oct 10, 11:15am',
    },
    passengersCount: 45,
    stopsCount: 28,
  },
  {
    routeDetails: {
      from: 'Chennai CMBT',
      fromTime: 'Oct 09, 11:15am',
      to: 'Bangalore BS',
      toTime: 'Oct 10, 11:15am',
    },
    passengersCount: 45,
    stopsCount: 28,
  },
  {
    routeDetails: {
      from: 'Chennai CMBT',
      fromTime: 'Oct 09, 11:15am',
      to: 'Bangalore BS',
      toTime: 'Oct 10, 11:15am',
    },
    passengersCount: 45,
    stopsCount: 28,
  },
];

const MyTripScreen: React.FC = () => {
  // ref
  const reviewSheetRef = useRef<RBSheet>(null);

  // use states
  const [currentTab, setCurrentTab] = useState<{selectedItem: string}>({
    selectedItem: tabData[0]?.title,
  });
  const [updatedTabData, setUpdatedTabData] = useState(tabData);
  const [points, setPoints] = useState(0);
  const [stars, setStars] = useState([false, false, false, false, false]);
  const [feedback, setFeedback] = useState('');

  // ---------------------------------------- variables ----------------------------------------

  const isUpComing = currentTab?.selectedItem == tabData[0]?.title;
  const isCompleted = currentTab?.selectedItem == tabData[1]?.title;
  const isCancelled = currentTab?.selectedItem == tabData[2]?.title;

  // ---------------------------------------- Functionalities ----------------------------------------

  const bookTrip = () => {};

  const handleStarClick = (index: number) => {
    const newStars = [...stars];
    newStars[index] = !newStars[index];

    setStars(newStars);
    setPoints(newStars.filter(star => star).length);
  };

  // ---------------------------------------- use effects ----------------------------------------

  useEffect(() => {
    const updatedTabs = tabData.map((tab, index) => {
      if (index === 0)
        return {...tab, countColor: colors.green_2F};
      if (index === 1)
        return {...tab,countColor: colors.blue_f5};
      if (index === 2)
        return {...tab, countColor: colors.orange_27};
      return tab;
    });

    setUpdatedTabData(updatedTabs);
  }, [tripList]);

  // ---------------------------------------- render ui ----------------------------------------

  const addReviewRBSheet = () => {
    return (
      <RBSheetComponent refRBSheet={reviewSheetRef} height={hp('70%')}>
        <View style={styles.rbSheetContainer}>
          <Text
            style={[
              baseStyle.txtStyleOutInterBold(sizes.size3, colors.black_937),
              styles.textAlign,
            ]}>
            {myTrip.addReview}
          </Text>
          <TouchableOpacity
            onPress={() => {
              reviewSheetRef.current?.close();
            }}
            style={styles.cancelIcon}>
            <CLOSE height={wp('4%')} width={wp('4%')} />
          </TouchableOpacity>

          <Spacer height={hp('4%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterSemiBold(sizes.size4, colors.black_937),
              styles.textAlign,
            ]}>
            {myTrip.weLovedFB}
          </Text>
          <Spacer height={hp('1%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_563),
              styles.textAlign,
            ]}>
            {myTrip.feedBackTitle}
          </Text>
          <Spacer height={hp('2%')} />
          <View style={styles.horizontalLine} />
          <View style={styles.row}>
            {Array.from({length: 5}).map((_, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleStarClick(index)}>
                {stars[index] ? (
                  <POINT_STAR width={wp('7%')} height={wp('7%')} />
                ) : (
                  <STAR width={wp('7%')} height={wp('7%')} />
                )}
              </TouchableOpacity>
            ))}
            <Text
              style={[
                baseStyle.txtStyleOutInterMedium(sizes.size3, colors.grey_95),
              ]}>
              {`${points} / 5`}{' '}
              <Text
                style={[
                  baseStyle.txtStyleOutInterRegular(
                    sizes.size2,
                    colors.grey_95,
                  ),
                ]}>
                {`${myTrip.stars}`}
              </Text>
            </Text>
          </View>
          <Spacer height={hp('2%')} />
          <View style={styles.horizontalLine} />
          <Spacer height={hp('2%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size2, colors.grey_563),
            ]}>
            {myTrip.addFeedback}
          </Text>
          <Spacer height={hp('1%')} />
          <TextInputComponent
            value={feedback}
            placeholderTextColor={colors.grey_95}
            placeholder={PLACEHOLDERS.myFeedBack}
            backgroundColor={colors.white_FF}
            onChangeText={data => setFeedback(data)}
            multiLine={true}
          />
          <Spacer height={hp('2%')} />
          <Button
            onPress={() => {}}
            text={myTrip.submitReview}
            buttonStyle={styles.button}
            textStyle={styles.textStyle}
          />
          <Spacer height={hp('4%')} />
        </View>
      </RBSheetComponent>
    );
  };

  // Render body
  const renderBody = ({item}: ListRenderItemInfo<Trip>) => {
    return (
      <View style={styles.marginHorizontal}>
        <TripItemCard data={item} onClick={() => {
           navigationService.navigate(SCREENS.STOP_DETAILS, {
            details: item,
          })
        }} />
        <Spacer height={hp('2%')} />
      </View>
    );
  };

  return (
    <CustomSafeArea style={styles.container} statusBarBGColor={colors.grey_F1}>
      <Header
        goBack={() => {
          navigationService.goBack();
        }}
        title="My Trips"
        isRightIcon={true}
        rightIcon={NOTIFICATION}
        rightIconView={styles.iconView}
        rightIconPress={() =>
          navigationService.navigate(SCREENS.NOTIFICATION_SCREEN)
        }
      />
      <Spacer height={hp('2%')} />
      <View style={styles.statusBarView}>
        <StatusBar
          name="MyTrips"
          data={updatedTabData}
          selectedItemData={currentTab}
          setSelectedItem={setCurrentTab}
          backgroundColor={colors.grey_F1}
          countTxtColor={colors.white_FF}
        />
      </View>
      <Spacer height={hp('2%')} />
      <FlatList
        data={tripList}
        renderItem={renderBody}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <NoDataComponent
            text={myTrip.uhHo}
            disc={myTrip.noDataDisc}
            height={wp('55%')}
            width={wp('55%')}
            noDataImage={NODATA}
            handlePress={() => bookTrip()}
            buttonText={myTrip.bookTrip}
            customStyles={styles.noDataContainer}
          />
        }
      />
      {addReviewRBSheet()}
    </CustomSafeArea>
  );
};

export default MyTripScreen;
