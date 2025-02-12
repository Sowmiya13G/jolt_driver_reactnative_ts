// Account Screen
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey_F1,
  },
  subContainer: {
    marginHorizontal: wp('5%'),
    flex: 1,
  },
  cardView: {
    paddingHorizontal: wp('4%'),
    backgroundColor: colors.white_FF,
    paddingVertical: wp('6%'),
    borderRadius: wp('3%'),
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  expanded: {
    marginRight: '3%',
    transform: [{rotate: '180deg'}],
  },
  iconView: {
    marginRight: '3%',
  },
  expandedView: {
    marginTop: 10,
    borderRadius: 5,
  },
  horizontalLineView: {
    height: wp('2%'),
    backgroundColor: colors.grey_F1,
    width: '100%',
    marginVertical: wp('2%'),
  },
  horizontalLine: {
    height: wp('0.5%'),
    backgroundColor: colors.grey_F1,
    width: '100%',
    marginVertical: wp('2%'),
  },
  header: {
    flex: 0,
    justifyContent: 'flex-start',
    marginHorizontal: wp('5%'),
  },
  leftIconView: {
    backgroundColor: colors.white_FF,
  },
  rightIconView: {
    right: wp('5%'),
    position: 'absolute',
  },
  earningCard: {
    marginHorizontal: wp('5%'),
    paddingHorizontal: wp('10%'),
    backgroundColor: colors.white_FF,
    paddingVertical: wp('6%'),
    borderRadius: wp('3%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  todayEarning: {
    paddingHorizontal: wp('2%'),
    backgroundColor: colors.green_2F,
    borderRadius: wp('2%'),
    paddingVertical: wp('1%'),
  },
  earning:{
    justifyContent:"center",
    alignItems:"center"
  }
});

export default styles;
