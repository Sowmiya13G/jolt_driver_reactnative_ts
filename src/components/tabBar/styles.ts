import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    borderRadius: wp('1%'),
    width: '100%',
    height: wp('18%'),
    borderBottomWidth: 1,
    borderBottomColor: colors.grey_DD,
  },
  barItemView: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    flexDirection: 'row',
  },
  columnWrapperStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  row: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: 3,
  },
  count: {
    borderRadius: 100 / 2,
    marginVertical: wp('1%'),
    height: wp('6%'),
    width: wp('6%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp('2%'),
  },
});

export default styles;
