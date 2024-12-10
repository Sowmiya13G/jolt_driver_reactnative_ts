import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// components
import Button from '../button';
import Spacer from '../spacer';
import TextInputComponent from '../textInput';

// constants
import {baseStyle, colors, sizes} from '../../constant/theme';

// styles
import styles from './styles';

import LIKE from '../../assets/svg/like.svg';
import POINT from '../../assets/svg/point.svg';
import UN_LIKE from '../../assets/svg/unLike.svg';
import UN_POINT from '../../assets/svg/unpointStar.svg';

// Types
import {ReviewContent} from '../../propTypes/screenProps';

interface ReviewsProps {
  data: ReviewContent[];
}

const Reviews: React.FC<ReviewsProps> = ({data}) => {
  const [likes, setLikes] = useState<Record<number, boolean>>({});
  const [reply, setReply] = useState<Record<number, boolean>>({});
  const [comments, setComments] = useState<Record<number, string>>({});

  const averagePoints =
    data.reduce((total, review) => total + review.points, 0) / data.length || 0;

  const handleLike = (index: number) => {
    setLikes(prevLikes => ({...prevLikes, [index]: !prevLikes[index]}));
  };

  const handleSubmit = (index: number) => {
    const updatedData = [...data];
    updatedData[index] = {
      ...updatedData[index],
      comment: comments[index] || '',
    };
    setReply(prev => ({...prev, [index]: false}));
  };

  const renderItem = ({item, index}: {item: ReviewContent; index: number}) => (
    <View style={styles.reviewContent}>
      <View style={styles.rowView}>
        <View style={styles.rowView1}>
          <Text
            style={[
              baseStyle.txtStyleOutInterMedium(sizes.size02, colors.black_28),
            ]}>
            {item.name}
          </Text>
          <Spacer width={wp('2%')} />
          <View style={styles.point}>
            <POINT />
            <Spacer width={wp('1%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(
                  sizes.size02,
                  colors.black_00,
                ),
              ]}>
              {item.points}
            </Text>
          </View>
          <Spacer width={wp('2%')} />
          <View style={styles.verticalLine} />
          <Spacer width={wp('2%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_7C),
            ]}>
            {item.date}
          </Text>
        </View>
        <TouchableOpacity onPress={() => handleLike(index)}>
          {likes[index] ? <LIKE /> : <UN_LIKE />}
        </TouchableOpacity>
      </View>
      <Spacer height={hp('2%')} />
      <View style={styles.typesView}>
        {item?.type?.map((x, y) => (
          <View style={styles.type} key={y}>
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(
                  sizes.size011,
                  colors.black_28,
                ),
              ]}>
              {x}
            </Text>
          </View>
        ))}
      </View>
      <Spacer height={hp('2%')} />
      <Text
        style={[
          baseStyle.txtStyleOutInterMedium(sizes.size02, colors.black_28),
        ]}>
        {item.comment}
      </Text>
      {comments[index] && (
        <>
          <Spacer height={hp('2%')} />
          <View>
            <Text
              style={[
                baseStyle.txtStyleOutInterMedium(sizes.size02, colors.black_28),
              ]}>
              Reply:{' '}
              <Text
                style={[
                  baseStyle.txtStyleOutInterRegular(
                    sizes.size02,
                    colors.black_28,
                  ),
                ]}>
                {comments[index]}
              </Text>
            </Text>
          </View>
        </>
      )}
      <Spacer height={hp('4%')} />
      {reply[index] ? (
        <View style={styles.footerView}>
          <TextInputComponent
            value={comments[index] || ''}
            onChangeText={text =>
              setComments(prev => ({...prev, [index]: text}))
            }
            placeholderTextColor={colors.grey_95}
            placeholder={'Enter here'}
            multiLine={true}
          />
          <Spacer height={hp('2%')} />
          <Button
            onPress={() => handleSubmit(index)}
            text={'Reply'}
            buttonStyle={styles.replyButton}
            textStyle={styles.replyTextStyle}
          />
        </View>
      ) : (
        <View style={styles.footer}>
          <Button
            onPress={() => setReply(prev => ({...prev, [index]: true}))}
            text={'Reply'}
            buttonStyle={styles.button}
            textStyle={styles.textStyle}
          />
        </View>
      )}
    </View>
  );

  const renderStars = () => {
    const fullStars = Math.floor(averagePoints);
    const halfStar = averagePoints % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {Array(fullStars)
          .fill(0)
          .map((_, index) => (
            <View key={`point-${index}`} style={{marginRight: 4}}>
              <POINT width={wp('4%')} height={wp('4%')} />
            </View>
          ))}
        {Array(emptyStars)
          .fill(0)
          .map((_, index) => (
            <View key={`unpoint-${index}`} style={{marginRight: 4}}>
              <UN_POINT width={wp('4%')} height={wp('4%')} />
            </View>
          ))}
      </View>
    );
  };

  return (
    <View style={styles.margin}>
      <Spacer height={hp('2%')} />
      <Text
        style={[
          baseStyle.txtStyleOutInterSemiBold(sizes.size3, colors.black_28),
        ]}>
        Ratings
      </Text>
      <Spacer height={hp('1.5%')} />
      <View style={[styles.row]}>
        <Spacer width={wp('1%')} />

        <View style={styles.column}>
          {[5, 4, 3, 2, 1].map(num => (
            <View key={num} style={styles.number}>
              <Text
                style={[
                  baseStyle.txtStyleOutInterRegular(
                    sizes.size3,
                    colors.grey_55,
                  ),
                ]}>
                {num}
              </Text>
              <Spacer width={wp('3%')} />
              <POINT height={wp('5%')} width={wp('5%')} />
              <Spacer width={wp('3%')} />
              <View
                style={{
                  height: 8,
                  width: `${num * 12}%`,
                  backgroundColor: colors.green_2F,
                  borderRadius: 5,
                }}
              />
            </View>
          ))}
        </View>
        <View style={styles.pointsView}>
          <Text
            style={[
              baseStyle.txtStyleOutInterMedium(sizes.size7, colors.black_28),
            ]}>
            {averagePoints}
          </Text>
          <Spacer height={hp('1%')} />
          {renderStars()}
          <Spacer height={hp('1%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size3, colors.black_28),
            ]}>
            {data.length} Reviews
          </Text>
        </View>
        <Spacer width={wp('3%')} />
      </View>
      <View style={styles.horizontalLine} />
      <Text
        style={[
          baseStyle.txtStyleOutInterSemiBold(sizes.size3, colors.black_28),
        ]}>
        Reviews
      </Text>
      <Spacer height={hp('2%')} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Spacer height={hp('2%')} />}
      />
      <Spacer height={hp('1%')} />
    </View>
  );
};

export default Reviews;
