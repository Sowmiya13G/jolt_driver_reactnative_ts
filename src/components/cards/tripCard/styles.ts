import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {baseStyle, colors} from '../../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white_FF,
    borderRadius: wp('5%'),
    paddingVertical: '1%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.grey_B9,
    borderWidth: wp('0.3%'),
    paddingHorizontal: wp('5%'),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '4%',
  },
  paddingHorizontal: {
    paddingHorizontal: '4%',
  },
  horizontalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  smallEclipse: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: colors.grey_D9,
  },
  horizontalLine1: {
    height: wp('0.4%'),
    width: '10%',
    borderStyle: 'dashed',
    borderWidth: 0.8,
    borderColor: colors.grey_D9,
  },
  horizontalLineView1: {
    borderWidth: 1,
    width: '1.5%',
    height: wp('0.3%'),
    borderColor: colors.grey_D9,
    marginHorizontal: 3,
  },
  passengerData: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  duration:{
    paddingHorizontal: wp('2%'),
    backgroundColor: colors.green_2F,
    borderRadius: wp('2%'),
    paddingVertical: wp('1%'),
  }
});

export default styles;
