import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// packages
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// components
import Spacer from '../../spacer';

// constants
import {baseStyle, colors, sizes} from '../../../constant/theme';

// style
import styles from './styles';

// SVG Imports
import CLOCK from '../../../assets/svg/clock.svg';
import DROP from '../../../assets/svg/drop.svg';
import PERSON from '../../../assets/svg/iconPerson.svg';
import MAP from '../../../assets/svg/mapVector.svg';
import PICK from '../../../assets/svg/pick.svg';
import TELEGRAM from '../../../assets/svg/telegram.svg';
import CALL from '../../../assets/svg/yellowCall.svg';
import Button from '../../button';

interface route {
  place: string;
  time: string;
  total: number;
  in?: number;
  out?: number;
}
interface TripCardType {
  data: {
    routes: route[];
    kiloMeter: number;
    time: string;
    currentStop?: string;
  };
  viewMap?: () => void;
}

interface passenger {
  seat: string;
  name: string;
  number: string;
  in?: boolean;
  out?: boolean;
}

interface list {
  data: passenger[];
}
const passengerList = [
  {
    seat: 'UL16',
    name: 'Vignesh 22,  M',
    number: '9878797455',
    in: true,
    out: false,
  },
  {
    seat: 'UL17',
    name: 'Vignesh 22,  M',
    number: '9878797455',
    in: true,
    out: false,
  },
  {
    seat: 'UL18',
    name: 'Vignesh 22,  M',
    number: '9878797455',
    in: true,
    out: false,
  },
  {
    seat: 'UL19',
    name: 'Vignesh 22,  M',
    number: '9878797455',
    in: true,
    out: false,
  },
  {
    seat: 'UL20',
    name: 'Vignesh 22,  M',
    number: '9878797455',
    in: false,
    out: true,
  },
  {
    seat: 'UL21',
    name: 'Vignesh 22,  M',
    number: '9878797455',
    in: true,
    out: false,
  },
  {
    seat: 'UL22',
    name: 'Vignesh 22,  M',
    number: '9878797455',
    in: true,
    out: false,
  },
  {
    seat: 'UL23',
    name: 'Vignesh 22,  M',
    number: '9878797455',
    in: false,
    out: true,
  },
  {
    seat: 'UL24',
    name: 'Vignesh 22,  M',
    number: '9878797455',
    in: true,
    out: false,
  },
];

const StopDetailsCard: React.FC<TripCardType> = ({data, viewMap}) => {
  const [selectedItem, setSelectedItem] = useState<route | null>(null);
  const currentStopIndex = data?.routes.findIndex(
    route => route.place === data?.currentStop,
  );

  const animatedValues = useRef(
    data?.routes.map(
      (_, index) => new Animated.Value(index <= currentStopIndex ? 1 : 0),
    ),
  ).current;

  useEffect(() => {
    animatedValues.forEach((animatedValue, index) => {
      if (index <= currentStopIndex) {
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 500,
          delay: index * 500,
          useNativeDriver: true,
        }).start();
      } else {
        animatedValue.setValue(0);
      }
    });
  }, [currentStopIndex, animatedValues]);

  const renderTimeAndPlace = (route: route) => {
    return (
      <View key={route.place} style={styles.placeDetails}>
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size2, colors.grey_32),
          ]}>
          {route.time}
        </Text>
        <Spacer width={wp('2%')} />
        <View style={styles.place}>
          <Text
            style={[
              baseStyle.txtStyleOutInterMedium(sizes.size02, colors.grey_32),
            ]}>
            {route.place}
          </Text>
          <Spacer height={hp('0.5%')} />
          <View style={styles.delay}>
            <Text
              style={[
                baseStyle.txtStyleOutInterSemiBold(
                  sizes.size0,
                  colors.white_FF,
                ),
              ]}>
              20 min delay
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderInOutData = (route: route) => {
    const selectedPlace = selectedItem?.place == route.place;
    return (
      <TouchableOpacity
        key={`inout-${route.place}`}
        style={[
          styles.inOutView,
          {borderColor: selectedPlace ? colors.orange_05 : colors.grey_D9},
        ]}
        onPress={() => setSelectedItem(route)}>
        <PICK />
        <Text
          style={[
            baseStyle.txtStyleOutInterRegular(sizes.size01, colors.grey_32),
          ]}>
          {route.in ?? 0}
        </Text>
        <DROP />
        <Text
          style={[
            baseStyle.txtStyleOutInterRegular(sizes.size01, colors.grey_32),
          ]}>
          {route.out ?? 0}
        </Text>
        <PERSON />
        <Text
          style={[
            baseStyle.txtStyleOutInterRegular(sizes.size01, colors.grey_32),
          ]}>
          {route.total}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({item, index}: {item: route; index: number}) => {
    const isLastStop = index === data?.routes?.length - 1;
    const isCurrentStop = data?.currentStop === item.place;
    const currentStopIndex = data?.routes.findIndex(
      route => route.place === data?.currentStop,
    );

    const isPassedOrCurrentStop = index < currentStopIndex;

    const animatedColor = animatedValues[index].interpolate({
      inputRange: [0, 1],
      outputRange: [colors.grey_D9, colors.orange_05],
    });

    return (
      <>
        <View style={styles.routeDataContainer}>
          {renderTimeAndPlace(item)}
          <Spacer width={wp('2%')} />
          <View style={styles.connectContainer}>
            <View
              style={[
                isLastStop ? styles.lastStop : styles.dot,
                {
                  backgroundColor:
                    isPassedOrCurrentStop || isCurrentStop || isLastStop
                      ? colors.orange_05
                      : colors.grey_D9,
                },
              ]}
            />
            {!isLastStop && (
              <>
                {Array.from(
                  {length: wp('1.5%')},
                  (_, lineIndex) => lineIndex + 1,
                ).map((_, lineKey) => (
                  <View
                    key={lineKey}
                    style={[
                      styles.horizontalLineView1,
                      {
                        borderColor: isPassedOrCurrentStop
                          ? colors.orange_05
                          : colors.grey_D9,
                      },
                    ]}
                  />
                ))}
              </>
            )}
          </View>
          <Spacer width={wp('2%')} />
          {renderInOutData(item)}
        </View>
      </>
    );
  };

  const renderPassengerList = ({
    item,
    index,
  }: {
    item: passenger;
    index: number;
  }) => {
    const isLastIndex = index == passengerList?.length - 1;
    return (
      <View style={styles.margin}>
        <View key={index} style={styles.commonRowView}>
          {item?.in ? (
            <PICK height={wp('5%')} width={wp('5%')} />
          ) : (
            <DROP height={wp('5%')} width={wp('5%')} />
          )}
          <View style={[styles.detailsView]}>
            <PERSON height={wp('5%')} width={wp('5%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterMedium(sizes.size2, colors.grey_32),
              ]}>
              {item.seat} -
            </Text>
          </View>
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_32),
            ]}>
            {item.name}
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${item.number}`)}>
            <CALL height={wp('5%')} width={wp('5%')} />
          </TouchableOpacity>
        </View>
        {!isLastIndex && <View style={styles.horizontalLine} />}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text
            style={[
              baseStyle.txtStyleOutInterSemiBold(sizes.size2, colors.grey_32),
            ]}>
            Journey Details
          </Text>
          <Spacer height={hp('1%')} />
          <View style={styles.textRow}>
            <TELEGRAM height={wp('4%')} width={wp('4%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_32),
              ]}>
              {data?.kiloMeter} km
            </Text>
          </View>
          <Spacer height={hp('1%')} />
          <View style={styles.textRow}>
            <CLOCK height={wp('4%')} width={wp('4%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_32),
              ]}>
              {data?.time} Am
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.mapView} onPress={viewMap}>
          <MAP height={wp('5%')} width={wp('5%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterSemiBold(sizes.size02, colors.white_FF),
            ]}>
            View Map
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      {selectedItem ? (
        <>
          <View style={[styles.commonRow]}>
            <View style={[styles.detailsView]}>
              <PICK height={wp('5%')} width={wp('5%')} />
              <Text
                style={[
                  baseStyle.txtStyleOutInterRegular(
                    sizes.size2,
                    colors.grey_32,
                  ),
                ]}>
                {selectedItem.in ?? 0}
              </Text>
            </View>
            <Text
              style={[
                baseStyle.txtStyleOutInterSemiBold(sizes.size2, colors.grey_D9),
              ]}>
              |
            </Text>
            <View style={[styles.detailsView]}>
              <DROP height={wp('5%')} width={wp('5%')} />
              <Text
                style={[
                  baseStyle.txtStyleOutInterRegular(
                    sizes.size2,
                    colors.grey_32,
                  ),
                ]}>
                {selectedItem.out ?? 0}
              </Text>
            </View>
            <Text
              style={[
                baseStyle.txtStyleOutInterSemiBold(sizes.size2, colors.grey_D9),
              ]}>
              |
            </Text>
            <View style={[styles.detailsView]}>
              <PERSON height={wp('5%')} width={wp('5%')} />
              <Text
                style={[
                  baseStyle.txtStyleOutInterRegular(
                    sizes.size2,
                    colors.grey_32,
                  ),
                ]}>
                {selectedItem.total}
              </Text>
            </View>
          </View>
          <View style={styles.line} />
          <FlatList
            data={passengerList}
            keyExtractor={item => item.seat}
            renderItem={renderPassengerList}
          />
          <Spacer height={hp('2%')} />
          <Button
            onPress={() => {}}
            buttonStyle={styles.button}
            textStyle={styles.textStyle}
            text={'Back To Journey'}
          />
        </>
      ) : (
        <>
          <Spacer height={hp('2%')} />
          <FlatList
            data={data?.routes}
            keyExtractor={item => item.place}
            renderItem={renderItem}
          />
        </>
      )}
      <Spacer height={hp('2%')} />
    </View>
  );
};

export default StopDetailsCard;
