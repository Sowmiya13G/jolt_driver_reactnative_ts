import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {baseStyle, colors, sizes} from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: wp('3%'),
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('2%'),
    marginHorizontal: wp('5%'),
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowView1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    backgroundColor: colors.white_FAED,
    borderRadius: wp('3%'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('3%'),
    paddingVertical: wp('2%'),
  },
  margin: {
    marginHorizontal: '5%',
  },
  reviewContent: {
    borderColor: colors.grey_5DD,
    borderWidth: 1,
    backgroundColor: colors.white_FAED,
    borderRadius: wp('3%'),
    paddingHorizontal: wp('5%'),
    paddingVertical: wp('4%'),
    // alignItems: 'center',
    // width: wp('60%'),
  },
  comment: {
    paddingHorizontal: wp('3%'),
    paddingVertical: wp('4%'),
    height: hp('12%'),
  },
  verticalLine: {
    width: 1,
    height: '30%',
    borderWidth: 1,
    borderColor: colors.grey_D9,
    // marginVertical: wp('2%'),
  },

  point: {
    paddingHorizontal: '5%',
    paddingVertical: '1%',
    backgroundColor: colors.yellow_080,
    borderRadius: wp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    width: '25%',
    justifyContent: 'center',
  },
  number: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
    paddingVertical: '1%',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: wp('60%'),
  },
  pointsView: {
    alignItems: 'flex-end',
    right: wp('6%'),
  },
  horizontalLine: {
    height: wp('2%'),
    backgroundColor: colors.grey_F1,
    width: '100%',
    marginVertical: hp('2%'),
  },
  footer: {
    position: 'absolute',
    right: '5%',
    bottom: '5%',
  },
  button: {
    borderColor: colors.orange_05,
    borderWidth: 0.5,
    borderRadius: wp('2%'),
    paddingVertical: wp('1.5%'),
    alignItems: 'center',
    width: wp('25%'),
  },
  textStyle: {
    ...baseStyle.txtStyleOutInterSemiBold(sizes.size02, colors.orange_05),
  },
  footerView: {},
  replyButton: {
    backgroundColor: colors.orange_05,
    borderRadius: wp('3%'),
    paddingVertical: wp('4%'),
    alignItems: 'center',
  },
  replyTextStyle: {
    ...baseStyle.txtStyleOutInterSemiBold(sizes.size2, colors.white_FF),
    textAlign: 'center',
  },
  type: {
    backgroundColor: colors.green_C1,
    paddingHorizontal: '2%',
    borderRadius: wp('1.5%'),
    paddingVertical: wp('0.5%'),
  },
  typesView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('2%'),
  },
});

export default styles;
