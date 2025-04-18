import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { AuthRoutes } from './routes';
import { WHITE } from '../colors';
//import BankScreen2 from '../screens/BankScreen2';
// import OpicTest from '../screens/OpicTest';
// import BankScreen from '../screens/BankScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerShown: false,
      }}
    >
      <Stack.Screen name={AuthRoutes.SIGN_IN} component={SignInScreen} />
      <Stack.Screen name={AuthRoutes.SIGN_UP} component={SignUpScreen} />
      {/* <Stack.Screen name={AuthRoutes.OPIC} component={OpicTest} /> */}
      {/* <Stack.Screen name={AuthRoutes.BANK} component={BankScreen} /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
