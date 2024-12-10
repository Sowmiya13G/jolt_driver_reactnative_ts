import React from 'react';
import {FlatList, ListRenderItemInfo, View} from 'react-native';

// navigation
import navigationService from '../../navigation/navigationService';

// packages

// components
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';

// constants
import NOTIFICATION from '../../assets/svg/notification.svg';
import Reviews from '../../components/reviews';
import {SCREENS} from '../../constant';
import {colors} from '../../constant/theme';
import {ReviewContent} from '../../propTypes/screenProps';
import styles from '../styles/wallet';

interface WalletScreenProps {}

const reviewContent: ReviewContent[] = [
  {
    name: 'Prakash',
    comment: 'It was really good, Worth for money',
    date: '22Aug2024',
    points: 2,
    type: ['Clean', 'Value for money', 'Timing'],
  },
  {
    name: 'Venkat',
    comment: 'It was really good, Worth for money',
    date: '22Aug2024',
    points: 2.5,
    type: ['Clean', 'Value for money', 'Timing'],
  },
  {
    name: 'Santhosh',
    comment: 'It was really good, Worth for money',
    date: '22Aug2024',
    points: 4.5,
    type: ['Clean', 'Value for money', 'Timing'],
  },
  {
    name: 'Venkat',
    comment: 'It was really good, Worth for money',
    date: '22Aug2024',
    points: 5,
    type: ['Clean', 'Value for money', 'Timing'],
  },
  {
    name: 'Venkat',
    comment: 'It was really good, Worth for money',
    date: '22Aug2024',
    points: 3,
    type: ['Clean', 'Value for money', 'Timing'],
  },
];

const WalletScreen: React.FC<WalletScreenProps> = () => {
  // Render Body
  const renderBody = ({item}: ListRenderItemInfo<string>) => {
    return (
      <View>
        <Reviews data={reviewContent} />
      </View>
    );
  };

  return (
    <CustomSafeArea style={styles.container} statusBarBGColor={colors.white_FF}>
      <Header
        goBack={() => {
          navigationService.goBack();
        }}
        title="Reviews & Rating"
        isRightIcon={true}
        rightIcon={NOTIFICATION}
        rightIconView={styles.iconView}
        rightIconPress={() =>
          navigationService.navigate(SCREENS.NOTIFICATION_SCREEN)
        }
      />
      <FlatList
        data={['MY_TRIP']}
        renderItem={renderBody}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </CustomSafeArea>
  );
};

export default WalletScreen;
