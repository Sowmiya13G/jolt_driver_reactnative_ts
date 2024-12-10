import React from 'react';
import {Text, View} from 'react-native';

// packages
import LinearGradient from 'react-native-linear-gradient';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// components
import Spacer from '../../spacer';

// constants
import {baseStyle, colors, sizes} from '../../../constant/theme';

// style
import styles from './styles';
import {dashboard} from '../../../constant/strings';

// Define types for the data prop
interface TotalEarnCardType {
  todayEarn: string | number;
  totalEarn: string | number;
}

const TotalEarnCard: React.FC<TotalEarnCardType> = ({todayEarn, totalEarn}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#4754EF', '#3762E1', '#3D80F3']}
      style={styles.gradientContainer}>
      <View style={styles.viewContainer}>
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size02, colors.white_FF),
            styles.textAlign,
          ]}>
          {dashboard.totalEarn}
        </Text>
        <Spacer height={hp('1%')} />
        <Text
          style={[
            baseStyle.txtStyleOutInterBold(sizes.size8, colors.white_FF),
            styles.textAlign,
          ]}>
          {`₹ ${totalEarn}`}
        </Text>
        <Spacer height={hp('2%')} />
        <View style={styles.todayEarn}>
          <Text
            style={[
              baseStyle.txtStyleOutInterMedium(sizes.size01, colors.grey_55),
              styles.textAlign
            ]}>
            {`${dashboard.todayEarn} ₹ ${todayEarn}`}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default TotalEarnCard;
