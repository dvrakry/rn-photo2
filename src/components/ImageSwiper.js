import { Platform, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';
import { BlurView } from 'expo-blur';
import FastImage from './FastImage';
import { BLACK, PRIMARY } from '../colors';

const ImageSwiper = ({ photos }) => {
  return (
    <Swiper
      loop={false}
      dot={<View style={styles.dot} />}
      activeDot={<View style={[styles.dot, styles.activeDot]} />}
    >
      {photos.map(({ uri }, idx) => (
        <View key={idx} style={styles.photo}>
          <FastImage
            source={{ uri }}
            contentFit={'cover'}
            style={StyleSheet.absoluteFillObject}
          />
          <BlurView intensity={Platform.select({ ios: 20, android: 90 })}>
            <FastImage
              source={{ uri }}
              contentFit={'contain'}
              style={styles.photo}
            />
          </BlurView>
        </View>
      ))}
    </Swiper>
  );
};

ImageSwiper.propTypes = {
  //PropTypes
  photos: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  photo: {
    width: '100%',
    height: '100%',
  },
  dot: {
    backgroundColor: BLACK,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: PRIMARY.DEFAULT,
  },
});

export default ImageSwiper;
