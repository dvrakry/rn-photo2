import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GRAY, PRIMARY } from '../colors';
import { MAP_KEY } from '../../env';

const LocationSearch = ({ styles, onPress, isLoading, isSelected }) => {
  return (
    <View style={[defaultStyles.container, styles?.container]}>
      <GooglePlacesAutocomplete
        placeholder={'Location'}
        query={{ key: MAP_KEY, language: 'ko' }}
        onPress={onPress}
        onFail={(e) => {
          // eslint-disable-next-line no-console
          console.log('GooglePlacesAutocomplete Error: ', e);
        }}
        styles={{ container: { flex: 0 }, textInput: { paddingLeft: 30 } }}
        debounce={400}
        enablePoweredByContainer={false}
        textInputProps={{ editable: !isLoading }}
      />
      <View style={[defaultStyles.icon, styles?.icon]}>
        <MaterialCommunityIcons
          name="map-marker"
          size={20}
          color={isSelected ? PRIMARY.DEFAULT : GRAY.DARK}
        />
      </View>
    </View>
  );
};

LocationSearch.propTypes = {
  //PropTypes
  styles: PropTypes.object,
  onPress: PropTypes.func,
  isLoading: PropTypes.bool,
  isSelected: PropTypes.bool,
};

const defaultStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: GRAY.LIGHT,
  },
  icon: {
    position: 'absolute',
    left: 20,
    top: 16,
  },
});

export default LocationSearch;
