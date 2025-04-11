import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { GRAY, WHITE } from '../colors';

const HR = ({ styles, text }) => {
  return (
    <View style={[dafaultStyles.container, styles?.container]}>
      <View style={[dafaultStyles.line, styles?.line]}></View>
      {!!text && (
        <Text style={[dafaultStyles.text, styles?.text]}>{text}</Text>
      )}
    </View>
  );
};

HR.propTypes = {
  styles: PropTypes.object,
  text: PropTypes.string,
};

const dafaultStyles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    ...StyleSheet.absoluteFillObject,
    height: '50%',
    borderBottomWidth: 1,
    borderBottomColor: GRAY.DARK,
  },
  text: {
    backgroundColor: WHITE,
    paddingHorizontal: 10,
    color: GRAY.DARK,
  },
});

export default HR;
