import React, {useEffect, useRef} from 'react';
import {Animated, FlatList, Text, TouchableOpacity, View} from 'react-native';

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

const StopDetailsCard: React.FC<TripCardType> = ({data, viewMap}) => {
  const currentStopIndex = data?.routes.findIndex(
    (route) => route.place === data?.currentStop
  );

  const animatedValues = useRef(
    data?.routes.map(
      (_, index) => new Animated.Value(index <= currentStopIndex ? 1 : 0)
    )
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
    return (
      <TouchableOpacity
        key={`inout-${route.place}`}
        style={[styles.inOutView, {borderColor: colors.orange_05}]}>
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

  const renderItem = ({ item, index }: { item: route; index: number }) => {
    const isLastStop = index === data?.routes?.length - 1;
    const isCurrentStop = data?.currentStop === item.place;
    const currentStopIndex = data?.routes.findIndex(route => route.place === data?.currentStop);

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
                    isPassedOrCurrentStop || isCurrentStop||isLastStop
                      ? colors.orange_05
                      : colors.grey_D9,
                },

              ]}
            />
            {!isLastStop && (
              <>
                {Array.from(
                  { length: wp('1.5%') },
                  (_, lineIndex) => lineIndex + 1,
                ).map((_, lineKey) => (
                  <View
                    key={lineKey}
                    style={[
                      styles.horizontalLineView1,
                      {
                        borderColor:
                          isPassedOrCurrentStop? colors.orange_05 : colors.grey_D9,
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
      <Spacer height={hp('2%')} />
      <FlatList
        data={data?.routes}
        keyExtractor={item => item.place}
        renderItem={renderItem}
      />
      <Spacer height={hp('2%')} />
    </View>
  );
};

export default StopDetailsCard;


