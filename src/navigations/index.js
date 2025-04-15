import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
});

export default Navigation;
