import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {baseStyle, colors, sizes} from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey_F1,
  },
  subContainer: {
    flex: 1,
    marginHorizontal: wp('5%'),
  },
  iconView: {
    marginRight: wp('3%'),
    backgroundColor: colors.white_FF,
    padding: wp('4.5%'),
    borderRadius: wp('2%'),
    ...baseStyle.cardElevationStyle(),
  },
  marginHorizontal: {
    marginHorizontal: wp('5%'),
  },
  width: {
    width: wp('57%'),
    flexWrap: 'wrap',
  },
  texAlign: {
    textAlign: 'center',
  },
  alignSelf: {
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp('5%'),
  },
  horizontalLine: {
    height: wp('2%'),
    backgroundColor: colors.grey_F1,
    width: '100%',
    marginVertical: hp('2%'),
  },
  starts: {
    paddingHorizontal: wp('2%'),
    backgroundColor: colors.green_2F,
    borderRadius: wp('2%'),
    paddingVertical: wp('1%'),
  },
  button: {
    borderColor: colors.orange_05,
    borderRadius: wp('2%'),
    borderWidth: 0.5,
    paddingVertical: wp('3%'),
    alignItems: 'center',
    width: wp('42%'),
  },
  endJourney: {
    backgroundColor: colors.orange_05,
    borderRadius: wp('2%'),
    paddingVertical: wp('3%'),
    alignItems: 'center',
    width: wp('42%'),
  },
  textStyle: {
    ...baseStyle.txtStyleOutInterRegular(sizes.size2, colors.white_FF),
  },
  iconText: {
    ...baseStyle.txtStyleOutInterRegular(sizes.size2, colors.orange_05),
    marginLeft: '3%',
  },
  callPassengerBtn: {
    backgroundColor: colors.orange_05,
    borderRadius: wp('2%'),
    paddingVertical: wp('3.5%'),
    alignItems: 'center',
    width: wp('42%'),
  },
  callPassenger: {
    backgroundColor: colors.red_600,
    borderRadius: wp('2%'),
    paddingVertical: wp('3.5%'),
    alignItems: 'center',
    width: wp('42%'),
  },
  text: {
    ...baseStyle.txtStyleOutInterRegular(sizes.size2, colors.white_FF),
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp('5%'),
  },
});

export default styles;
