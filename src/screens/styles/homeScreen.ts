import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {baseStyle, colors, sizes} from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white_FF,
  },
  subContainer: {
    marginHorizontal: wp('5%'),
    flex: 1,
    backgroundColor: colors.white_FF,
  },
  horizontalLine: {
    height: wp('0.2%'),
    backgroundColor: colors.grey_DB,
  },
  marginHorizontal: {
    marginHorizontal: wp('2%'),
  },
  texAlign: {
    textAlign: 'center',
  },
  texAlignMargin: {
    textAlign: 'center',
    marginHorizontal: wp('2%'),
  },
  button: {
    backgroundColor: colors.orange_05,
    borderRadius: wp('3%'),
    paddingVertical: wp('4%'),
    alignItems: 'center',
    marginHorizontal: wp('15%'),
  },
  textStyle: {
    ...baseStyle.txtStyleOutInterSemiBold(sizes.size2, colors.white_FF),
    marginLeft: wp('3%'),
  },
  wrap: {
    flexWrap: 'wrap',
  },
  listContainer: {
    width: '100%',
    justifyContent:"center"
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: wp('3%'),
    borderRadius: wp('3%'),
    width: wp('28%'),
  },
});

export default styles;
