import React from 'react';
import {Text, View} from 'react-native';

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
    from: string;
    to: string;
    fromTime: string;
    toTime: string;
    kmsAndHrs: string;
    passengersCount: number;
    stopsCount: number;
    start: string;
    end: string;
    duration: string;
  };
}

const TripCard: React.FC<TripCardType> = ({data}) => {
  return (
    <View style={styles.container}>
      <Spacer height={hp('2%')} />
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
              {data?.from}
            </Text>
            <Spacer height={hp('0.7%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterMedium(
                  sizes.size11,
                  colors.black_F40,
                ),
              ]}>
              {data?.fromTime}
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
              {data?.to}
            </Text>
            <Spacer height={hp('0.7%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterMedium(
                  sizes.size11,
                  colors.black_F40,
                ),
              ]}>
              {data?.toTime}
            </Text>
          </View>
        </View>
      </View>

      <Spacer height={hp('2%')} />
      <View style={styles.horizontalRow}>
        {Array.from(
          {length: widthPercentageToDP('7.5%')},
          (_, index) => index + 1,
        ).map((x, y) => {
          return <View key={y} style={styles.horizontalLineView1} />;
        })}
      </View>

      <Spacer height={hp('2%')} />
      <View style={styles.passengerData}>
        <View>
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size1, colors.grey_7D),
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
              baseStyle.txtStyleOutInterRegular(sizes.size1, colors.grey_7D),
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
        <View>
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size1, colors.grey_7D),
            ]}>
            Kms And Hrs
          </Text>
          <Spacer height={hp('1%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterSemiBold(sizes.size1, colors.grey_67),
            ]}>
            {data?.kmsAndHrs}
          </Text>
        </View>
      </View>
      <Spacer height={hp('2%')} />
      <View style={styles.horizontalRow}>
        {Array.from(
          {length: widthPercentageToDP('7.5%')},
          (_, index) => index + 1,
        ).map((x, y) => {
          return <View key={y} style={styles.horizontalLineView1} />;
        })}
      </View>
      <Spacer height={hp('2%')} />
      <View style={styles.passengerData}>
        <View>
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size1, colors.green_2F),
            ]}>
            Start :{' '}
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size1, colors.grey_50),
              ]}>
              {data?.start}
            </Text>
          </Text>

          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size1, colors.orange_27),
            ]}>
            End :{' '}
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size1, colors.grey_50),
              ]}>
              {data?.end}
            </Text>
          </Text>
        </View>
        <View style={styles.duration}>
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size1, colors.white_FF),
            ]}>
            {data?.duration}
          </Text>
        </View>
      </View>
      <Spacer height={hp('2%')} />
    </View>
  );
};

export default TripCard;
