import React from 'react';
import {Text, Touchable, TouchableOpacity, View} from 'react-native';

// packages
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

// components
import Spacer from '../../spacer';

// constants
import {baseStyle, colors, sizes} from '../../../constant/theme';

// style
import styles from './styles';

// SVG Imports
import BUS from '../../../assets/svg/busIcon.svg';

interface TripCardType {
  data: {
    routeDetails: {
      from: string;
      fromTime: string;
      to: string;
      toTime: string;
    };
    passengersCount: number;
    stopsCount: number;
  };
  onClick?: () => void;
}

const TripItemCard: React.FC<TripCardType> = ({data, onClick}) => {
  return (
    <View style={styles.container}>
      <View style={styles.hours}>
        <Text
          style={[
            baseStyle.txtStyleOutInterRegular(sizes.size01, colors.blue_F4),
          ]}>
          IN 4 Hours
        </Text>
      </View>
      <Spacer height={hp('6%')} />
      <View>
        <View style={[styles.row]}>
          <View>
            <Text
              style={[
                baseStyle.txtStyleOutInterSemiBold(
                  sizes.size02,
                  colors.black_F40,
                ),
              ]}>
              {data?.routeDetails?.from}
            </Text>
            <Spacer height={hp('0.7%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterMedium(
                  sizes.size11,
                  colors.black_F40,
                ),
              ]}>
              {data?.routeDetails?.fromTime}
            </Text>
          </View>
          <Spacer width={widthPercentageToDP('1%')} />
          <View style={styles.smallEclipse} />
          <View style={styles.horizontalLine1} />
          <BUS
            height={widthPercentageToDP('10%')}
            width={widthPercentageToDP('10%')}
          />
          <View style={styles.horizontalLine1} />
          <View style={styles.smallEclipse} />
          <Spacer width={widthPercentageToDP('1%')} />
          <View>
            <Text
              style={[
                baseStyle.txtStyleOutInterSemiBold(
                  sizes.size02,
                  colors.black_F40,
                ),
              ]}>
              {data?.routeDetails?.to}
            </Text>
            <Spacer height={hp('0.7%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterMedium(
                  sizes.size11,
                  colors.black_F40,
                ),
              ]}>
              {data?.routeDetails?.toTime}
            </Text>
          </View>
        </View>
      </View>

      <Spacer height={hp('2%')} />
      <View style={styles.line} />
      <Spacer height={hp('2%')} />
      <View style={styles.passengerData}>
        <View>
          <Text
            style={[
              baseStyle.txtStyleOutInterSemiBold(sizes.size1, colors.grey_32),
            ]}>
            Passengers
          </Text>
          <Spacer height={hp('1%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterSemiBold(sizes.size1, colors.grey_67),
            ]}>
            {data?.passengersCount}
          </Text>
        </View>
        <View>
          <Text
            style={[
              baseStyle.txtStyleOutInterSemiBold(sizes.size1, colors.grey_32),
            ]}>
            Stops
          </Text>
          <Spacer height={hp('1%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterSemiBold(sizes.size1, colors.grey_67),
            ]}>
            {data?.stopsCount}
          </Text>
        </View>
      </View>
      <Spacer height={hp('2%')} />
      <View style={styles.line} />
      <Spacer height={hp('2%')} />
      <TouchableOpacity style={styles.viewDetails} onPress={onClick}>
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size02, colors.orange_05),
          ]}>
          View Details
        </Text>
      </TouchableOpacity>
      <Spacer height={hp('2%')} />
    </View>
  );
};

export default TripItemCard;
