import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../../constant/theme';

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    borderRadius: wp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: wp('2%'),
  },
  viewContainer: {
    flex: 1,
    borderRadius: wp('2%'),
    paddingVertical: '4%',
    paddingHorizontal: '4%',
  },
  paddingHorizontal: {
    paddingHorizontal: '4%',
  },
  textAlign: {
    textAlign: 'center',
  },
  todayEarn: {
    // paddingHorizontal: wp('1%'),
    paddingVertical: '2%',
    backgroundColor: colors.grey_F1,
    borderRadius: wp('2%'),
  },
});

export default styles;
